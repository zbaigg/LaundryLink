import React, { useState } from 'react';

function Slots() {
  const [output, setOutput] = useState('');

  function BookAvailableSlots() {
    console.log('Button clicked');

    function DisplayAvailableSlots() {
      console.log('Displaying Available Slots');
      const message = 'Available Slot 1';
      setOutput(message);
    }

    DisplayAvailableSlots();
  }

  function BookedSlots() {
    console.log('Button clicked');
  }

  return (
    <div className="App-button-display">
      <button onClick={BookAvailableSlots}>Book Available Slots</button>
      <button onClick={BookedSlots}>Booked Slots</button>
      <p>{output}</p>
    </div>
  );
}

export default Slots;
