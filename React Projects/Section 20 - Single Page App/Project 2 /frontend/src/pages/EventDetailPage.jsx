import {
  defer,
  Await,
  /*useParam,*/ json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";
export default function EventDetailPage() {
  //const { id } = useParams();
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <section>
      <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={event}>{(data) => <EventItem event={data} />}</Await>

      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
      </Suspense>
    </section>
  );
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  console.log(response);
  if (!response.ok) {
    throw json(
      { message: "couldnt grab this assets data" },
      {
        status: 500,
      }
    );
  }
  const data = await response.json();
  return data.event;
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
  return data.events;
}
/*
export async function loader({ request, params }) {
  console.log(params);
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  console.log(response);
  if (!response.ok) {
    throw json(
      { message: "couldnt grab this assets data" },
      {
        status: 500,
      }
    );
  }
  const data = await response.json();
  return data.event;
}
*/

export async function loader({ request, params }) {
  const id = params.eventId;
  console.log(params)
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method || "GET",
  });

  if (!response.ok) {
    throw json(
      { message: "could not delete event" },
      { status: response.status }
    );
  }

  return redirect("/events");
}
