import React, { lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLoader } from "./shared/PageLoader/PageLoader";
import ReactGA from "react-ga";

const TRACKING_ID = "G-D2Q5SFQDNV";

ReactGA.initialize(TRACKING_ID);

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

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <React.Suspense fallback={<PageLoader />}>
        <RouterProvider router={routes} />
      </React.Suspense>
    </>
  );
}

export default App;
