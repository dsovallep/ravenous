import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import BusinessList from '../BusinessList/BusinessList.js';


function App() {
  return (
    <div className="App">
       <SearchBar />
       <BusinessList />
    </div>
  );
}

export default App;
