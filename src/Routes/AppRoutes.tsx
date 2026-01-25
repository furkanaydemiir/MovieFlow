import { Routes, Route } from "react-router-dom";
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import FavoriteMovies from "../pages/FavoriteMovies";
import Details from '../pages/Details'
export default function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/favorites" element={<FavoriteMovies/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
