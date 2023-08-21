import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.tsx";
import CoffeTable from "./components/CoffeTable.tsx";
import Services from "./components/Services.tsx";
import Portfolio from "./components/Portfolio.tsx";
import AboutMe from "./components/Aboutme.tsx";

export const Route = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/contact",
    element: <CoffeTable />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={Route} />
    </React.StrictMode>
  </QueryClientProvider>
);
