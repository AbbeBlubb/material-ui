import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Button from '@material-ui/core/Button'


function App() {
  return (
    <div className="App">
			<UserForm />

      <br />
      <Button variant="contained" color="primary">
        Hello
      </Button>


    </div>
  );
}

export default App;
