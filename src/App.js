import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import NotesPage from './pages/NotesPage';



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>  
      <Route component={NotesPage}/>
    </div>
    </Router>
  );
}

export default App;
