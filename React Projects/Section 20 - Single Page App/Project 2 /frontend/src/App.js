import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage, {
  loader as eventsLoader,
} from "./pages/EventsPage";
import EventDetailPage, {
  loader as singleEventLoader,
  action as deleteEvent,
} from "./pages/EventDetailPage";
import NewEventPage, { action as newEvent } from "./pages/NewEventPage";

import EditEventPage from "./pages/EditEventPage";
import Root from "./roots/Root";
import EventRoot from "./roots/EventRoot";
import { Error as ErrorPage } from "./components/Error";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event",
            loader: singleEventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEvent },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
