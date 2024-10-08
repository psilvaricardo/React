import { useRef, useState, useEffect, useCallback } from "react";
import Places from "./components/Places";
import Modal from "./components/Modal";
import Error from "./components/Error";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces";
import { updateUserPlaces, fetchUserPlaces } from "./http";

const App = () => {
    const selectedPlace = useRef();
    const [userPlaces, setUserPlaces] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    // retrieve the places saved by the user only once when the app starts...
    useEffect(() => {
        const fetcPlacesSavedByUser = async () => {
            setIsFetching(true);
            try {
                const placesSavedByUser = await fetchUserPlaces();
                setUserPlaces(placesSavedByUser);
            } catch (error) {
                setError({
                    message:
                        error.message ||
                        "Failed to fetch places saved by the User.",
                });
            }

            setIsFetching(false);
        };

        fetcPlacesSavedByUser();
    }, []);

    const handleStartRemovePlace = (place) => {
        setModalIsOpen(true);
        selectedPlace.current = place;
    };

    const handleStopRemovePlace = () => {
        setModalIsOpen(false);
    };

    const handleSelectPlace = async (selectedPlace) => {
        setUserPlaces((prevPickedPlaces) => {
            if (!prevPickedPlaces) {
                prevPickedPlaces = [];
            }
            if (
                prevPickedPlaces.some((place) => place.id === selectedPlace.id)
            ) {
                return prevPickedPlaces;
            }
            return [selectedPlace, ...prevPickedPlaces];
        });

        try {
            // sending the request after the UI was updated is called optimisting updating...
            await updateUserPlaces([selectedPlace, ...userPlaces]);
        } catch (error) {
            console.error(JSON.stringify(error));
            // if something goes wrong, we need to reset the state to whatever it was before.
            setUserPlaces(userPlaces);
            setErrorUpdatingPlaces({
                message: error.message || "Failed to update places.",
            });
        }
    };

    const handleRemovePlace = useCallback(
        async function handleRemovePlace() {
            setUserPlaces((prevPickedPlaces) =>
                prevPickedPlaces.filter(
                    (place) => place.id !== selectedPlace.current.id
                )
            );

            try {
                await updateUserPlaces(
                    userPlaces.filter(
                        (place) => place.id !== selectedPlace.current.id
                    )
                );
            } catch (error) {
                // if something goes wrong, rollback...
                setUserPlaces(userPlaces);
                setErrorUpdatingPlaces({
                    message:
                        error.message || "Failed to remove selected place.",
                });
            }

            setModalIsOpen(false);
        },
        [userPlaces]
    );

    const handleErrorUpdatingPlaces = () => {
        setErrorUpdatingPlaces(null);
    };

    return (
        <>
            <Modal
                open={errorUpdatingPlaces}
                onClose={handleErrorUpdatingPlaces}
            >
                {errorUpdatingPlaces && (
                    <Error
                        title="An error occurred!"
                        message={errorUpdatingPlaces.message}
                        onConfirm={handleErrorUpdatingPlaces}
                    />
                )}
            </Modal>

            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe" />
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to
                    visit or you have visited.
                </p>
            </header>
            <main>
                {error && (
                    <Error title="An error occurred!" message={error.message} />
                )}
                {!error && (
                    <Places
                        title="I'd like to visit ..."
                        fallbackText="Select the places you would like to visit below."
                        isLoading={isFetching}
                        loadingText="Fetching your places..."
                        places={userPlaces}
                        onSelectPlace={handleStartRemovePlace}
                    />
                )}

                <AvailablePlaces onSelectPlace={handleSelectPlace} />
            </main>
        </>
    );
};

export default App;
