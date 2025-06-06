import { createRoot } from "react-dom/client";
import "./index.css";
import { lazy, Suspense } from "react";

import "swiper/swiper-bundle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = lazy(() => import("./App.jsx"));

import { DisplayProductContextProvider } from "./context/DisplayProductsContext.jsx";
import { CompareContextProvider } from "./context/CompareContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { ToolsContext } from "./context/ToolsContext.jsx";
import { WishListContextProvider } from "./context/WishListContext.jsx";

import Loading from "./component/loading/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <DisplayProductContextProvider>
    <CompareContextProvider>
      <CartContextProvider>
        <ToolsContext>
          <Suspense fallback={<Loading status={"app"} />}>
            <WishListContextProvider>
              <App />
            </WishListContextProvider>
          </Suspense>
        </ToolsContext>
      </CartContextProvider>
    </CompareContextProvider>
  </DisplayProductContextProvider>
);
