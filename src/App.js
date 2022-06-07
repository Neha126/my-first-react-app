// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "hellooooooo", id: 1 },
    { title: "hiiiiiii", id: 2 },
    { title: "byeeeee", id: 3 },
  ]);
  // console.log(showEvents);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const subtitle = "all the latest events in the kingdom";
  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={false}>
          <NewEventForm />
        </Modal>
      )}
      <br />
      <br />
      <button onClick={() => setShowModal(true)}>Add New Event</button>
    </div>
  );
}

export default App;
