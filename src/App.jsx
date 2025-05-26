// App.jsx
import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "./component/loading/Loading.jsx";

const Layout = lazy(() => import("./layout/Layout/Layout"));
const Home = lazy(() => import("./component/Home/Home"));
const Arrivals = lazy(() => import("./component/Arrivals/Arrivals"));

const All = lazy(() => import("./component/Arrivals/nestedComponents/All/All"));
const Nested1 = lazy(() =>
  import("./component/Arrivals/nestedComponents/Nested1/Nested1")
);
const Nested2 = lazy(() =>
  import("./component/Arrivals/nestedComponents/Nested2/Nested2")
);
const Nested3 = lazy(() =>
  import("./component/Arrivals/nestedComponents/Nested3/Nested3")
);

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
const Contact = lazy(() => import("./component/Contact/Contact"));
const Wishlist = lazy(() => import("./component/Wishlist/Wishlist"));
const SignUp = lazy(() => import("./component/SignUp/SignUp"));
const LogIn = lazy(() => import("./component/LogIn/LogIn"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading status={"app"} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* Nested routes for Arrivals */}
            <Route path="arrivals" element={<Arrivals />}>
              <Route index element={<All />} />
              <Route path="snakes" element={<Nested1 />} />
              <Route path="fruits" element={<Nested2 />} />
              <Route path="vege" element={<Nested3 />} />
            </Route>

            {/* Other routes */}
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Ctegories />} />
            <Route
              path="categories/ProductsOfCategory"
              element={<ProductsOfCategory />}
            />
            <Route path="productCategory/:title" element={<ProductDetails />} />
            <Route path="compare" element={<Compare />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="*" element={<Loading status={"error"} />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
