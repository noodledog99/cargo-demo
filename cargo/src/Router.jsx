import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/product-detail",
          element: <ProductDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
