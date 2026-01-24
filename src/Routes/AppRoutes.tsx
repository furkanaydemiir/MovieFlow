import { Routes, Route } from "react-router-dom";
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import FavoriteMovies from "../pages/FavoriteMovies";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/favorites" element={<FavoriteMovies/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
