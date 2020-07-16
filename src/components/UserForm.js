import React from "react";
import useInput from "../hooks/useInput";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function UserForm() {
  // Destructure the array returned from the custom hook
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const [checked, setChecked] = React.useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checked) {
      alert('First check the checkbox!')
      return
    }

    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <>
      <form>
        <div>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="filled"
            {...bindFirstName}
          />

          {/*
          <input 
            type='text'
            value={firstName}
            onChange={() => setFirstName(e.target.value)}
          */}
        </div>

        <div>
          <TextField label="Last name" variant="filled" {...bindLastName} />

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                name="understood"
                value="The string to use as the value of the checkbox when submitting the form, if the checkbox is currently toggled on"
                color="primary"
                onClick={(e) => {console.log(e); setChecked(!checked)}}
              />
            }
            label="I understand I will trigger an alert"
          />

          <Button variant="contained" color="primary" onClick={submitHandler}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}

export default UserForm;
