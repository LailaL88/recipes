import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import BlogPage from "../pages/BlogPage";
import { recipes } from "../recipes";

export default function App({state, dispatch}) {
  console.log(state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home state={state} dispatch={dispatch}/>} />
          {recipes.map( recipe => {return <Route key={recipe.id} path={recipe.path} element={<BlogPage title={recipe.text} img={recipe.img} path={recipe.path} state={state} dispatch={dispatch} />} />})}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}