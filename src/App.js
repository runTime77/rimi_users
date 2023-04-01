
import { useEffect, useState } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {

const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>res.json())
    .then((data) => {
      console.log(data); 
      setUsers(data);
    })
  },[])
  return (
    <div className="App">
      <div className= " grid grid-cols-4 gap-5 p-10 ">
        {
          
        users.map((user) => (
        <UserCard user={user}></UserCard>
        ))}
      </div>
     </div>
  );
}

export default App;
