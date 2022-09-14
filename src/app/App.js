import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import BlogPage from "../pages/BlogPage";
import { recipes } from "../recipes";
import ScrollToTop from "../features/ScrollToTop";

export default function App({state, dispatch}) {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="https://lailal88.github.io/recipes/" element={<Layout />}>
          <Route index element={<Home state={state} dispatch={dispatch}/>} />
          {recipes.map( recipe => {return <Route key={recipe.id} path={recipe.path} element={<BlogPage title={recipe.text} img={recipe.img} />} />})}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}