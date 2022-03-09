import { Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>Recipes & Cooking</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
