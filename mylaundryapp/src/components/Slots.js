import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
// import { format } from 'date-fns'; // Import the format function from date-fns

function Slots() {
  const [displaySlots, setDisplaySlots] = useState(false);
  const [selectionConfirmed, setIsSelectionConfirmed] = useState(false);
  const [showConfirmationMessage, setConfirmationMessage] = useState(false);
  const [nameInput, setInput] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

  function BookAvailableSlots() {
    console.log('Book Available Slots Button clicked');
    setDisplaySlots(true);
  }

  function BookedSlots() {
    console.log('Booked Slots Button clicked');
    setDisplaySlots(false);
  }

  function ConfirmHandling() {
    setIsSelectionConfirmed(true);
    setConfirmationMessage(true);
  }

  function nameInputHandling(inputValue) {
    setInput(inputValue.target.value);
  }

//   // Function to handle changes in the start time
//   function handleStartDateTimeChange(dateTime) {
//     // Format the dateTime before saving it to the state
//     const formattedDateTime = format(dateTime, "yyyy-MM-dd hh:mm a");
//     setStartDateTime(formattedDateTime);
//   }

//   // Function to handle changes in the end time
//   function handleEndDateTimeChange(dateTime) {
//     // Format the dateTime before saving it to the state
//     const formattedDateTime = format(dateTime, "yyyy-MM-dd hh:mm a");
//     setEndDateTime(formattedDateTime);
//   }
  
  return (
    <div className="App-container">
      <div className="App-button-display">
        <button onClick={BookAvailableSlots}>Book Available Slots</button>
        <button onClick={BookedSlots}>Booked Slots</button>
      </div>
      {displaySlots ? (
        <div className="App-output">
          <DateTimePicker
            onChange={setStartDateTime}
            value={startDateTime}
          />
          <DateTimePicker
            onChange={setEndDateTime}
            value={endDateTime}
          />
          <div className="input-container">
            <label htmlFor="nameInput">Enter your name:</label>
            <input
              type="text"
              value={nameInput}
              onChange={nameInputHandling}
            />
          </div>
          <button onClick={ConfirmHandling}>Confirm</button>
          {showConfirmationMessage && (
            <p>
              Booking for {nameInput} from{' '}
              {startDateTime.toISOString()} to {endDateTime.toISOString()} has been confirmed!
            </p>
          )}
        </div>
      ) : (
        selectionConfirmed && (
          <ul className="no-bullets">
            <li>
              {startDateTime.toISOString()} to {endDateTime.toISOString()} (Booked by: {nameInput})
            </li>
          </ul>
        )
      )}
    </div>
  );
}

export default Slots;
