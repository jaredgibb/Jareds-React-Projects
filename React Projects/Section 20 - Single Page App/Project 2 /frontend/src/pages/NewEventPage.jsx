import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

export default function NewEventPage() {
  return <EventForm />;
}

export async function action({ request, params }) {
  const data = await request.formData();
  const event = {
    title: data.get("title"),
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const body = JSON.stringify(event);

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: "could not save event" },
      { status: response.status }
    );
  }

  return redirect("/events");
}
