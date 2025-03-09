import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../pages/Header/Header";
import { PostPage } from "../pages/PostPage/PostPage";
import { NotFound } from "../pages/NotFound/NotFound";
import { TagsPage } from "../pages/TagsPage/TagsPage";
import { Layout } from "./Layout/Layout";
import "./App.css";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { AuthorizationPage } from "../pages/AuthorizationPage/AuthorizationPage";
import { FavPostsProvider } from "../context/favPostContext";
import { PostListPage } from "../pages/PostListPage/PostListPage";




export function App() {
  return (
    <FavPostsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<AuthorizationPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FavPostsProvider>
  );
}
