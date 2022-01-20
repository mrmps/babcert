import React, { useState } from 'react';
//exported customers component
export default function Customers() {


  //   Retrieve Data from (https://randomuser.me/api) 
  // Fetch a new user every time you click a button and append it to local state 
  // Display (userImg and name) in an array
  // Handle state loading and state dependencies as you like 
  // Handle styling as you like 
  // Handle component breakdown as you like 
  // *Add Remove Button that removes the user info from the array list 
  // Be creative with data if you have time! 
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data.results[0]]);
        setLoading(false);
      });
  };

  const handleRemove = (index) => {
    setUsers(users.filter((user, i) => i !== index));
  };


  return (
    <div>
      <h1>Get a Random User</h1>
      <button style={{"marginBottom": 10}} onClick={handleClick}>Fetch New User</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {users.map(user => (
            <div key={user}>
              <img src={user.picture.large} alt={user.name.first} />
              <h2 style={{"marginBottom": 10}}>{user.name.first + " " + user.name.last}</h2>
              <button style={{"marginBottom": 10}} onClick={() => handleRemove(users.indexOf(user))}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



  // const listItems = users.map((user) =>
  // <li>{user}</li>
  // );
  //call the random image api and add the image to the list
  // handleClick() {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers([...users, data.message]);
  //     }
  //     );
  // }
