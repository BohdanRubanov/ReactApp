import "./App.css";
import { FavPostsProvider } from "../context/favPostContext";
import { AppRoutes } from "../routes/Routes";




export function App() {
  return (
    <FavPostsProvider>
      <AppRoutes></AppRoutes>
    </FavPostsProvider>
  );
}
