import React from "react";
import useInput from "../hooks/useInput";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Avatar,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles({
  paper: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px",
    borderRadius: "10px",
  },
  avatar: {
    background:
      "linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
    margin: "10px",
  },
  form: {
    margin: "20px",
  },
  submitButton: {
    marginTop: "20px",
  },
});

function UserForm() {
  const classes = useStyles();

  // Destructure the array returned from the custom hook
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const [checked, setChecked] = React.useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checked) {
      alert("First check the checkbox!");
      return;
    }

    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
    setChecked(false);
  };

  return (
    <>
      <Container component="main" maxWidth="xs" className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ChatBubbleOutlineIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Fire an alert
        </Typography>

        <form className={classes.form}>
          <div>
            <TextField
              label="First Name"
              variant="filled"
              margin="normal"
              fullWidth
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
            <TextField
              label="Last name"
              variant="filled"
              margin="normal"
              fullWidth
              {...bindLastName}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  name="understood"
                  value="The string to use as the value of the checkbox when submitting the form, if the checkbox is currently toggled on"
                  color="primary"
                  onClick={(e) => {
                    setChecked(!checked);
                  }}
                />
              }
              label="I understand that I will trigger an alert"
            />

            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              fullWidth
              onClick={submitHandler}
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default UserForm;
