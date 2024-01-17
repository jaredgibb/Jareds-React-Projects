import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchPlaces } from '../https.js';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  //data, loading, and error states. common when making http requests

  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAndSortPlaces() {
      setIsLoading(true);
      try {
        const unsortedPlaces = await fetchPlaces()
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(unsortedPlaces, position.coords.latitude, position.coords.longitude);
          setPlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setError({ message: error.message ?? 'Something went wrong!' });
        setIsLoading(false);

      }
    }
    fetchAndSortPlaces();
  }, []);

  if (error !== null) {
    return (
      <Error
        title='Error has occurred'
        message={error.message}
      />
    );
  }

  return (
    <Places
      title='Available Places'
      places={places}
      isLoading={isLoading}
      loadingText='Loading places...'
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
