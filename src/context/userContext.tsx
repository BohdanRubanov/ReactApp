import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { IPost } from "../hooks/usePosts";

interface IUser {
	id: number;
	username: string;
	email: string;
	role: string;
	posts: IPost[];
}

interface IUserContext {
	user: IUser | null;
	login: (email: string, password: string) => void;
	register: (
		username: string,
		email: string,
		password: string
	) => void;
    isAuthenticated: boolean
}

const initialValue: IUserContext = {
	user: null,
	login: (email, password) => {},
	register: (username, email, password) => {},
    isAuthenticated: false
};

const userContext = createContext<IUserContext>(initialValue);

export function useUserContext() {
	return useContext(userContext);
}

interface IUserContextProvider {
	children: ReactNode;
}

export function UserContextProvider(props: IUserContextProvider) {
	const { children } = props;
	const [user, setUser] = useState<IUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

	async function getUser(token: string) {
		try {
			const response = await fetch("http://localhost:8000/me", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const result = await response.json();
			if (result.status === "error") {
				console.log(result.message);
			} else {
				setUser(result.data);
			}
		} catch {}
	}

	async function login(email: string, password: string) {
		try {
			const response = await fetch(
				"http://localhost:8000/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email: email, password: password }),
				}
			);
			const result= await response.json();

			if (result.status === "error") {
				console.log(result.message);
			} else {
				localStorage.setItem("token", result.data);
                setIsAuthenticated(true)
				getUser(result.data);
                console.log(isAuthenticated)
			}
		} catch {}
	}
	async function register(
		username: string,
		email: string,
		password: string
	) {
		try {
			const response = await fetch(
				"http://localhost:8000/registration",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,
                        role: "User"
					}),
				}
			);
			const result = await response.json();

			if (result.status === "error") {
				console.log(result.message);
			} else {
				localStorage.setItem("token", result.data);
                setIsAuthenticated(true)
                console.log(result.data);
				getUser(result.data);
                
			}
		} catch {}
	}
	useEffect(() => {
		const userToken = localStorage.getItem("token");
		if (!userToken) {
			return;
		}
		getUser(userToken);
	}, []);
	return (
		<userContext.Provider
			value={{ user: user, login: login, register: register, isAuthenticated: isAuthenticated }}
		>
			{children}
		</userContext.Provider>
	);
}