import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import PlanPage1 from "./pages/PlanPage1";
import PlanPage2 from "./pages/PlanPage2";
import PlanPage3 from "./pages/PlanPage3";
import PlanPage4 from "./pages/PlanPage4";
import PlanPage5 from "./pages/PlanPage5";
import PlanPage6 from "./pages/PlanPage6";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RootLayout />
        <ScrollToHashElement />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/mainpage", element: <MainPage /> },
      { path: "/planpage1", element: <PlanPage1 /> },
      { path: "/planpage2", element: <PlanPage2 /> },
      { path: "/planpage3", element: <PlanPage3 /> },
      { path: "/planpage4", element: <PlanPage4 /> },
      { path: "/planpage5", element: <PlanPage5 /> },
      { path: "/planpage6", element: <PlanPage6 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
