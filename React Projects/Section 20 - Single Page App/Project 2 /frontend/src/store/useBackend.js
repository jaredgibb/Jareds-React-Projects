import { useState, useEffect } from "react";

export function useBackend() {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch("http://localhost:8080/events");
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setEvents(data);
      setLoading(false);
    }
    fetchEvents();

  }, []);
  console.log(events);
  return {
    events,
    error,
    loading,
  };
}
