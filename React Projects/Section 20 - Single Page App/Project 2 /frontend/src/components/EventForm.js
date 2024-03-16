import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
 
  const data = useActionData();

  if (!event) {
    event = {
      title: "",
      image: "",
      date: new Date().toLocaleString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      description: "",
    };
  }

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.keys(data.errors).map((key) => {
            return <li key={key}>{data.errors[key]}</li>;
          })}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event.date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;

  let baseURL = "http://localhost:8080/events";
  if (method === "PATCH") {
    const id = params.id;
    baseURL = `${baseURL}/${id}`;
  }

  const event = {
    title: data.get("title"),
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const body = JSON.stringify(event);

  const response = await fetch(baseURL, {
    method,
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
