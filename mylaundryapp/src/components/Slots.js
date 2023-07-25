import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function Slots() {
  const [displaySlots, setDisplaySlots] = useState(false);
  const [showConfirmationMessage, setConfirmationMessage] = useState(false);
  const [nameInput, setInput] = useState('');
  const [timeSlotsArray, setTimeSlotsArray] = useState([]);
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

  function BookAvailableSlots() {
    console.log('Book Available Slots Button clicked');
    setDisplaySlots(true);
    setConfirmationMessage(false); // Reset confirmation message when showing booking interface
  }

  function BookedSlots() {
    console.log('Booked Slots Button clicked');
    setDisplaySlots(false);
  }

  function ConfirmHandling() {
    if (startDateTime >= endDateTime) {
      alert('Error: Start time must be earlier than end time.');
      return;
    }
    
    const newTimeSlot = {
      userName: nameInput,
      userStartDateTime: startDateTime,
      userEndDateTime: endDateTime,
      deleted: false, // Adding a new property to keep track of deleted slots
    };

    setTimeSlotsArray([...timeSlotsArray, newTimeSlot]);
    setConfirmationMessage(true);
  }

  function deleteSlot(index) {
    setTimeSlotsArray((prevSlots) =>
      prevSlots.map((slot, i) => 
        (i === index ? { ...slot, deleted: true } : slot))
    );
  }

  function nameInputHandling(inputValue) {
    setInput(inputValue.target.value);
  }

  function enterAnotherEntry() {
    setInput('');
    setStartDateTime(new Date());
    setEndDateTime(new Date());
    setConfirmationMessage(false); // Reset confirmation message when entering another entry
  }

  function formatDateTime(dateTime) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(dateTime).toLocaleString('en-US', options);
  }

  return (
    <div className="App-container">
      <div className="App-button-display">
        <button onClick={BookAvailableSlots}>Book Available Slots</button>
        <button onClick={BookedSlots}>Booked Slots</button>
      </div>
      {displaySlots ? (
        <div className="App-output">
          <DateTimePicker onChange={setStartDateTime} value={startDateTime} />
          <DateTimePicker onChange={setEndDateTime} value={endDateTime} />
          <div className="input-container">
            <label htmlFor="nameInput">Enter your name:</label>
            <input type="text" value={nameInput} onChange={nameInputHandling} />
          </div>
          <button onClick={ConfirmHandling}>Confirm</button>
          {showConfirmationMessage && (
            <div>
              <p>
                Booking for {nameInput} from {formatDateTime(startDateTime)} to{' '}
                {formatDateTime(endDateTime)} has been confirmed!
              </p>
              <button onClick={enterAnotherEntry}>Enter Another Entry</button>
            </div>
          )}
        </div>
      ) : (
        timeSlotsArray.length > 0 && (
          <div>
            <h2>Booked Slots:</h2>
            <ul className="no-bullets">
              {timeSlotsArray.map((timeSlot, index) =>
                timeSlot.deleted ? null : (
                  <li key={index}>
                    {formatDateTime(timeSlot.userStartDateTime)} to{' '}
                    {formatDateTime(timeSlot.userEndDateTime)} (Booked by:{' '}
                    {timeSlot.userName})
                    <button onClick={() => deleteSlot(index)}>x</button>
                  </li>
                )
              )}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default Slots;
