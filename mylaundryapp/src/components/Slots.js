import React, { useState } from 'react';

function Slots() {
    const availableSlots = ['Available Slot 1', 'Available Slot 2', 'Available Slot 3'];
    const [checkedSlots, setCheckedSlots] = useState([]); //checkedSlots -> which slots have user checked, setCheckedSlots -> update checkedSlots value
    const [displaySlots, setDisplaySlots] = useState(false); // State to control when to display slots
    const [selectionConfirmed, setIsSelectionConfirmed] = useState(false); // New state to track if Confirm button is clicked
    const [showConfirmationMessage, setConfirmationMessage] = useState(false);
    
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

//     return (
//         <div className="App-container">
//             <div className="App-button-display">
//                 <button onClick={BookAvailableSlots}>Book Available Slots</button>
//                 <button onClick={BookedSlots}>Booked Slots</button>
//             </div>
//              {displaySlots && ( // Render the slots (2nd operant) only if displaySlots is true 
//                 <div className="App-output">
//                     <ul className="no-bullets"> {/*Adding a class to remove bullet points from the output*/}
//                         {availableSlots.map((slot, index) => ( //mapping is iterating over the array items and then defining what happens to them, in this case making list items (li) for each item in the array
//                             <li key={index}> {/*making list item*/}
//                                 <label> {/*to asscoaite text/label with the checkbox, the <label> element encloses the text that is associated with the input type (checkboxes)*/}
//                                     <input
//                                         type="checkbox" //type of input field 
//                                         checked={checkedSlots.includes(slot)}
//                                         onChange={() => checkboxHandling(slot)} //event handler to call the checkboxHandling function when a user checks or unchecks a box
//                                     />
//                                     {slot}
//                                 </label>
//                             </li>
//                         ))}
//                         {/*how do i display/print the items stored in a state variable array */}
//                         {/*{checkedSlots.map((prebookedSlots, index) => (
//                         <li key={index}>{prebookedSlots}</li>*/}
//                         {/*but i only wanna display when a specific button is clicked*/}
//                         {/*))}*/}
//                     </ul>
//                     <button>Confirm</button> {/*I want to print/display the checkmarked items/items in the checkedSlots state variable after the Booked Slots button is clicked*/}
//                 </div>
//             )}


//         </div>
//     );
// }

// export default Slots;


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
                    {/*how do i display/print the items stored in a state variable array */}
                    {/*{checkedSlots.map((prebookedSlots, index) => (
                    <li key={index}>{prebookedSlots}</li>*/}
                    {/*but i only wanna display when a specific button is clicked*/}
                    {/*))}*/}
                </ul>
                <button onClick={ConfirmHandling}>Confirm</button> {/*I want to print/display the checkmarked items/items in the checkedSlots state variable after the Booked Slots button is clicked*/}
                {showConfirmationMessage && <p>Booking has been confirmed!</p>}
            </div>
        ):(
            //when i click on Booked Slots button, the following code output is rendered
            // {/*how do i display/print the items stored in a state variable array */}
            
            selectionConfirmed && (
                <ul className="no-bullets">

                    {checkedSlots.map((prebookedSlots, index) => (
                        <li key={index}>{prebookedSlots}</li>
                        // {/*but i only wanna display when a specific button is clicked - Done*/}
            
                    ))}
                </ul>
            )
        )}
    </div>
);
}

export default Slots;
