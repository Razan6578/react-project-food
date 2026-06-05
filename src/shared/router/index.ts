import { createBrowserRouter } from "react-router";
import App from "../../App";
import AboutUs from "../../pages/AboutUs";
import ProductList from "../../pages/ProductList";
import Blog from "../../pages/Blog";
import Blogs from "../../pages/Blogs";
import Login from "../../pages/Login";
import Product from "../../pages/Product";
import Registration from "../../pages/Registration";
import FAQ from "../../pages/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/about",
    Component: AboutUs,
  },
  {
    path: "/products",
    Component: ProductList,
  },
  {
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/blogs",
    Component: Blogs,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/product",
    Component: Product,
  },
  {
    path: "/registration",
    Component: Registration,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
]);
