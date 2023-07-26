import React from 'react';
import Header from './components/Header';
import Slots from './components/Slots';
import './App.css';
import ContactMe from './components/Contact';
import About from './components/About';
import NavigationBar from './components/NavBar';
import './NavBar.css'; 


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavigationBar />
          <div className="App-button-display">
            <Switch>
                <Route exact path="/">
                  <Slots />
                </Route>
                <Route exact path="/contactme">
                  <ContactMe />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>               
            </Switch>
          </div>
      </div>
    </Router>
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
