import { createRoot } from "react-dom/client";
import App from "@/components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "@/pages/about";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(root).render(<RouterProvider router={router} />);
