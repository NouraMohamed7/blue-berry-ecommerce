import React from "react";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import { Suspense } from "react";
import {  createHashRouter, RouterProvider } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout/Layout"));
const Home = lazy(() => import("./component/Home/Home"));

import All from "./component/Arrivals/nestedComponents/All/All";
import Nested1 from "./component/Arrivals/nestedComponents/Nested1/Nested1";
import Nested2 from "./component/Arrivals/nestedComponents/Nested2/Nested2";
import Nested3 from "./component/Arrivals/nestedComponents/Nested3/Nested3";
import Loading from "./component/loading/Loading";
import Contact from "./component/Contact/Contact";
import Arrowup from "./common/Arrowtoup/arrowup";
import Wishlist from "./component/Wishlist/Wishlist";
import SignUp from "./component/SignUp/SignUp";
import LogIn from "./component/LogIn/LogIn";

const Products = lazy(() => import("./component/Products/Products"));

const Ctegories = lazy(() => import("./component/Ctegories/Ctegories"));

const ProductsOfCategory = lazy(() =>
  import("./component/ProductsOfCategory/ProductsOfCategory")
);

const ProductDetails = lazy(() =>
  import("./component/ProductDetails/ProductDetails")
);

const Compare = lazy(() => import("./component/Compare/Compare"));

const Cart = lazy(() => import("./component/Cart/Cart"));
const About = lazy(() => import("./component/About/About"));

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <Home />
            </Suspense>
          ),

          children: [
            { path: "", element: <All /> },
            { path: "snakes", element: <Nested1 /> },
            { path: "friuts", element: <Nested2 /> },
            { path: "vege", element: <Nested3 /> },
          ],
        },
        {
          path: "products",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "categories",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <Ctegories />
            </Suspense>
          ),
        },
        {
          path: "categories/ProductsOfCategory",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <ProductsOfCategory />
            </Suspense>
          ),
        },
        {
          path: "productCategory/:title",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <ProductDetails />
            </Suspense>
          ),
        },
        {
          path: "compare",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <Compare />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <Cart />
            </Suspense>
          ),
        },

        {
          path: "about",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },

        {
          path: "signup",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <SignUp />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<Loading status={"componant"} />}>
              <LogIn />
            </Suspense>
          ),
        },
      ],

      errorElement: <Loading status={"/error"} />,
    },
  ]);


  return (
    <main>
      <RouterProvider router={router} />
      <Toaster />
      <Arrowup/>
    </main>
  );
}

export default App;   

