import {
  /*useParam,*/ json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage() {
  //const { id } = useParams();
  const data = useRouteLoaderData("event");
  return (
    <section>
      <EventItem event={data} />
    </section>
  );
}

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);
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
