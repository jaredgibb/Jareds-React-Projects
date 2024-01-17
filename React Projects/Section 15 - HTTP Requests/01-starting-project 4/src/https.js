export async function fetchPlaces() {
  const response = await fetch('http://localhost:3000/places');
  const data = await response.json();
  console.log(data.places);
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return data.places;
}

export async function updateUserPlaces(places) {
  console.log('places', places);
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({
      places: places,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return data.message;
}

export async function fetchUserPlaces() {
      const response = await fetch('http://localhost:3000/user-places');
      const data = await response.json();
      console.log(data.places);
      if (!response.ok) {
        throw new Error('Something went wrong when grabbing user placse!');
      }
      return data.places;
    }