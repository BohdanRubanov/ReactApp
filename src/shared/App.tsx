import "./App.css";
import { FavPostsProvider } from "../context/favPostContext";
import { AppRoutes } from "../routes/Routes";
import { UserContextProvider } from "../context/userContext";




export function App() {
  return (
    <UserContextProvider>
      <FavPostsProvider>
        <AppRoutes></AppRoutes>
      </FavPostsProvider>
    </UserContextProvider>
    
  );
}
