import { useForm } from "react-hook-form";
import { useUserContext } from "../../context/userContext";

interface IRegForm {
    username: string;
	email: string;
	password: string;
}
export function RegistrationPage() {
	const {register: userRegister} = useUserContext()
	const { register, formState, clearErrors, handleSubmit} = useForm<IRegForm>({
		mode: 'onSubmit'
	});
	function onSubmit(data: IRegForm){
        userRegister(data.username, data.email, data.password)
    }
	
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Username:
					<input
						type="text"
						{...register("username", {
							required: {value: true, message: "Field is required"},
							minLength: {value: 2, message: "Length should be > 2"},
							maxLength: {value: 50, message: "Length should be < 50"},
						})}
                        onFocus={() => {clearErrors("username")}}
					/>
					
                <p>{formState.errors.username?.message}</p>
				</label>
				<label>
					Email:
					<input
						type="email"
						{...register("email", {
							required: {value: true, message: "Field is required"},
							minLength: {value: 7, message: "Length should be > 7"},
							maxLength: {value: 50, message: "Length should be < 50"},
						})}
                        onFocus={() => {clearErrors("email")}}
					/>
					
                <p>{formState.errors.email?.message}</p>
				</label>
				<label>
					Password:
					<input
						type="password"
						{...register("password", {
							required: {value: true, message: "Field is required"},
							minLength: {value: 7, message: "Length should be > 7"},
							maxLength: {value: 50, message: "Length should be < 50"},
						})}
                        onFocus={() => {clearErrors("password")}}
					/>
				</label>
                <p>{formState.errors.password?.message}</p>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}