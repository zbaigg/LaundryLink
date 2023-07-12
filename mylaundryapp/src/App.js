import React from 'react';
import Header from './components/Header';
import Slots from './components/Slots';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="App-button-display">
          <Slots />
        </div> 
    </div>
  );
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <div className="App-button-display">
//           <Slots />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
