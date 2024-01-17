import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initialVal) {
  const [fetchedData, setFetchedData] = useState(initialVal);
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || 'Could not fetch data, please try again later.',
        });
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn, setFetchedData]);

  return {
    fetchedData,
    error,
    isFetching,
    setFetchedData
  };
}
