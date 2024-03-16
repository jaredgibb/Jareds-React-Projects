import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {

  const data = useRouteLoaderData("event-detail");
  console.log(data)
  return (
    <EventForm event={data} method="PATCH"/>
  );
}

