import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import axios from 'axios';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [username, setUsername] = useState(''); 

  const fetchProfile = async(username) => {
    try{
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfiles((prevProfiles) => [...profiles, response.data]);
    }
    catch(error){
      console.error("Error fetching user : ", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchProfile(username);
    setUsername('');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Github username"
          required
        />
        <button type="submit">Add Card</button>
      </form>
      <CardList profiles={profiles}/>
    </div>
  );
}

export default App;
