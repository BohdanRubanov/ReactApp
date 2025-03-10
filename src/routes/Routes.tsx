import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../pages/Header/Header";
import { PostPage } from "../pages/PostPage/PostPage";
import { NotFound } from "../pages/NotFound/NotFound";
import { TagsPage } from "../pages/TagsPage/TagsPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { AuthorizationPage } from "../pages/AuthorizationPage/AuthorizationPage";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { Layout } from "../shared/Layout/Layout";
import { FavPostsPage } from "../pages/FavPostsPage/FavPostPage";




export function AppRoutes() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<AuthorizationPage />} />
            <Route path="/favPosts" element={<FavPostsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}