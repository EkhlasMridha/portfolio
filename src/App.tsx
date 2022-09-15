import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import EventTicketing from "./pages/WorkDetails/EvetnTicketing";

const RootPage = lazy(() => import("./pages/RootPage"));
const EventTicketing = lazy(() => import("./pages/WorkDetails/EvetnTicketing"));
const Booky = lazy(() => import("./pages/WorkDetails/Booky"));
const MooIn = lazy(() => import("./pages/WorkDetails/MooIn"));

function App() {
  console.log("App");

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
    },
    {
      path: "/event-ticket",
      element: <EventTicketing />,
    },
    {
      path: "/booky",
      element: <Booky />,
    },
    {
      path: "/mooin",
      element: <MooIn />,
    },
  ]);

  return (
    <React.Suspense fallback={"Loading commponent"}>
      <RouterProvider router={routes} />
    </React.Suspense>
  );
}

export default App;
