import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

export default function EventsPage() {
  const { events } = useLoaderData();
  console.log(events)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: response.statusText }), {
    //   status: response.status,
    // });

    throw json({ message: response.statusText }, { status: response.status });
  }
  const data = await response.json();
  console.log(data.events)
  return data.events;
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
