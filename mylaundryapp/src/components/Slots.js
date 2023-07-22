import React, { useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';
// import { format, addMinutes } from 'date-fns'; // Importing necessary functions from date-fns

function Slots() {
    const availableSlots = ['Available Slot 1', 'Available Slot 2', 'Available Slot 3'];
    // const availableSlots = [
    //     new Date(2023, 6, 23, 10, 0, 0), // July 23, 2023, 10:00 AM
    //     new Date(2023, 6, 24, 14, 30, 0), // July 24, 2023, 2:30 PM
    //     new Date(2023, 6, 25, 18, 45, 0), // July 25, 2023, 6:45 PM
    //     new Date(2023, 6, 26, 9, 15, 0),  // July 26, 2023, 9:15 AM
    //     new Date(2023, 6, 27, 20, 0, 0),  // July 27, 2023, 8:00 PM
    //   ];

 
  // Generate arbitrary time slots for the next 5 days
    // const availableSlots = Array.from({ length: 15 }, (_, index) => {
    //     const startDate = new Date(); // Start with the current date and time
    //     return addMinutes(startDate, index * 30); // Add 30 minutes to each subsequent slot
    // });
    
    const [checkedSlots, setCheckedSlots] = useState([]); //checkedSlots -> which slots have user checked, setCheckedSlots -> update checkedSlots value
    const [displaySlots, setDisplaySlots] = useState(false); // State to control when to display slots
    const [selectionConfirmed, setIsSelectionConfirmed] = useState(false); // New state to track if Confirm button is clicked
    const [showConfirmationMessage, setConfirmationMessage] = useState(false);
    const [nameInput, setInput] = useState("")

    //function called when 'Book Available Slot' button is clicked
    function BookAvailableSlots() {
        console.log('Book Available Slots Button clicked');
        setDisplaySlots(true); // Show the available slots when the button is clicked
    }

    //function called when 'Book Slots' button is clicked - still working on this function to move selected slots to appear when this button is clicked 
    function BookedSlots() {
        console.log('Booked Slots Button clicked');
        setDisplaySlots(false); // Do not show the available slots when this button is clicked 
    }

    //when user checkmarks a slot 
    function checkboxHandling(slot) {
        if (checkedSlots.includes(slot)) { //checks if the slot was already checked (meaning user just unchecked it)
            setCheckedSlots(checkedSlots.filter((item) => item !== slot)); //now creating a new array for checkedSlots that includes all items except for the one just unchecked 
        } else {
            setCheckedSlots([...checkedSlots, slot]); //adding the slot to the checkedSlots array
        }
    }

    function ConfirmHandling(){
        setIsSelectionConfirmed(true);
        setConfirmationMessage(true);
    }

    function nameInputHandling(inputValue){
        setInput(inputValue.target.value)
    }

return (
    <div className="App-container">
        <div className="App-button-display">
            <button onClick={BookAvailableSlots}>Book Available Slots</button>
            <button onClick={BookedSlots}>Booked Slots</button>
        </div>
         {displaySlots ? ( // Render the slots (2nd operant) only if displaySlots is true 
            <div className="App-output">
                <ul className="no-bullets"> {/*Adding a class to remove bullet points from the output*/}
                    {availableSlots.map((slot, index) => ( //mapping is iterating over the array items and then defining what happens to them, in this case making list items (li) for each item in the array
                        <li key={index}> {/*making list item*/}
                            <label> {/*to asscoaite text/label with the checkbox, the <label> element encloses the text that is associated with the input type (checkboxes)*/}
                                <input
                                    type="checkbox" //type of input field 
                                    checked={checkedSlots.includes(slot)}
                                    onChange={() => checkboxHandling(slot)} //event handler to call the checkboxHandling function when a user checks or unchecks a box
                                />
                                {slot}
                            </label>
                        </li>
                    ))}
                </ul>
                <div className="input-container">
                    <label htmlFor="nameInput">Enter your name:</label>
                    <input 
                        type='text'
                        value={nameInput}
                        onChange={nameInputHandling} 
                    />
                </div>

                <button onClick={ConfirmHandling}>Confirm</button> {/*I want to print/display the checkmarked items/items in the checkedSlots state variable after the Booked Slots button is clicked*/}
                {showConfirmationMessage && <p>Booking for {nameInput} has been confirmed!</p>}
            </div>
        ):(
            //when i click on Booked Slots button, the following code output is rendered
            // {/*how do i display/print the items stored in a state variable array */}
            
            selectionConfirmed && (
                <ul className="no-bullets">
                    {checkedSlots.map((prebookedSlots, index) => (
                        <li key={index}>{prebookedSlots} (Booked by: {nameInput})</li>
                        // {/*but i only wanna display when a specific button is clicked - Done*/}
            
                    ))}
                </ul>
            )
        )}
    </div>
);
}

export default Slots;
