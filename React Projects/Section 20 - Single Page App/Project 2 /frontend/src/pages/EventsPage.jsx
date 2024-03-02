import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

export default function EventsPage() {
  const { events } = useLoaderData();
  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: response.statusText }), {
    //   status: response.status,
    // });

    throw json({ message: response.statusText }, { status: response.status });
  }
  const data = await response.json();

  return data;
}
