import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';

import { sortPlacesByDistance } from './loc.js';
let storedPlaces = JSON.parse(localStorage.getItem('pickedPlaces')) || [];
storedPlaces = storedPlaces.map((id) =>
  AVAILABLE_PLACES.find((place) =>
    place.id === id
  )
);
console.log(storedPlaces);

function App() {
  const selectedPlace = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  console.log('App render');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        location.coords.latitude,
        location.coords.longitude
      );

      console.log(sortedPlaces);
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalVisible(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalVisible(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedPlaces = JSON.parse(localStorage.getItem('pickedPlaces')) || [];
    if (storedPlaces.includes(id)) {
      return;
    }
    localStorage.setItem('pickedPlaces', JSON.stringify([id, ...storedPlaces]));
  }

  //useCallback is used to memoize a function
  //this means that the function is only created once
  const handleRemovePlace = useCallback( function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalVisible(false)
    const storedPlaces = JSON.parse(localStorage.getItem('pickedPlaces')) || [];
    localStorage.setItem(
      'pickedPlaces',
      JSON.stringify(storedPlaces.filter((id) => id !== selectedPlace.current))
    );
  }, [])
 

  return (
    <>
      <Modal open={modalVisible} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img
          src={logoImg}
          alt='Stylized globe'
        />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title='Available Places'
          places={availablePlaces}
          fallbackText={'Sorting places by distance ...'}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
