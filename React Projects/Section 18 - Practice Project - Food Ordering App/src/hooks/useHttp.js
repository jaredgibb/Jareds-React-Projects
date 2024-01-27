import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error((await response.json().message) || "Something went wrong!");
  }

  const data = await response.json();
  console.log(data)
  return data;
}


export default function useHttp(url, config, initialData) {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialData);

  function clearData() {
    setData(null);
    setError(null);
    setIsLoading(null);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);

  
      try {
        const response = await sendHttpRequest(url, {...config, body:data});
        console.log('response', response)

        setData(response);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config?.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    isLoading,
    error,
    data,
    sendRequest,
    clearData,
  };
}
