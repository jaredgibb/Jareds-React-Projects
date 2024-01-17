import { useRef, useState, useCallback, useEffect } from 'react';
import Error from './components/Error.jsx';
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces, fetchUserPlaces } from './https.js';

function App() {
  const selectedPlace = useRef();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatePlaces, setErrorUpdatePlaces] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUserPlacesAndSort() {
      try {
        const userPlaces = await fetchUserPlaces();
        setUserPlaces(userPlaces);
      } catch (error) {
        setError({ message: error.message ?? 'Something went wrong while fetching places!' });
      }
      setIsLoading(false);
    }
    fetchUserPlacesAndSort();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      let a = await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setErrorUpdatePlaces({ message: error.message ?? 'Something went wrong while updating places!' });
      setUserPlaces(userPlaces);
      console.log(error);
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id));
      try {
        await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id));
      } catch (error) {
        setUserPlaces(userPlaces);
        setErrorUpdatePlaces({ message: error.message ?? 'Something went wrong while updating places!' });
      }
      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleError() {
    setErrorUpdatePlaces(null);
  }

  return (
    <>
      <Modal
        open={errorUpdatePlaces}
        onClose={handleError}>
        {errorUpdatePlaces && (
          <Error
            title='Error has occurred'
            message={errorUpdatePlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>
      <Modal
        open={modalIsOpen}
        onClose={handleStopRemovePlace}>
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
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </header>
      <main>
        {error && (
          <Error
            title='Error has occurred fetching places'
            message={error.message}
            onConfirm={() => setError(null)}
          />
        )}
       {!error && <Places
          isLoading={isLoading}
          loadingText='Loading your places...'
          title="I'd like to visit ..."
          fallbackText='Select the places you would like to visit below.'
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
