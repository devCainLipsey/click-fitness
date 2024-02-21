import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import ProgramPage1 from "./pages/ProgramPage1";
import ProgramPage2 from "./pages/ProgramPage2";
import ProgramPage3 from "./pages/ProgramPage3";
import ProgramPage4 from "./pages/ProgramPage4";
import ProgramPage5 from "./pages/ProgramPage5";
import ProgramPage6 from "./pages/ProgramPage6";
import BasicMembershipPage from "./pages/BasicMembershipPage";
import PremiumMembershipPage from "./pages/PremiumMembershipPage";
import VIPMembershipPage from "./pages/VIPMembershipPage";
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
      { path: "/programpage1", element: <ProgramPage1 /> },
      { path: "/programpage2", element: <ProgramPage2 /> },
      { path: "/programpage3", element: <ProgramPage3 /> },
      { path: "/programpage4", element: <ProgramPage4 /> },
      { path: "/programpage5", element: <ProgramPage5 /> },
      { path: "/programpage6", element: <ProgramPage6 /> },
      { path: "/basic", element: <BasicMembershipPage /> },
      { path: "/premium", element: <PremiumMembershipPage /> },
      { path: "/vip", element: <VIPMembershipPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
