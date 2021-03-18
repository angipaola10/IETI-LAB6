import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import UserList from './components/UserList';

function App() {

  const [usersList, setUsersList] = useState([]);


  const componentDidMount = () => {
    fetch('https://task-planner-api.herokuapp.com/users')
      .then( response => response.json())
      .then( data => {
        setUsersList(data);
      })
    return usersList;
  }

  return (
    <>
    <Typography variant="h4" gutterBottom> Task Planner - Users </Typography>
    <UserList users={componentDidMount()} />
    </>
  );
}

export default App;
