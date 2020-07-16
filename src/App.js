import React from "react";
import UserForm from "./components/UserForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

function App() {
  return (
    <>
      <CssBaseline>
        <Grid container>
          <Grid
            item
            xs={false}
            sm={2}
            md={3}
            lg={4}
            style={{ backgroundColor: "#fbded054" }}
          >
            <Hidden xsDown>Grid item, Hidden xsDown</Hidden>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            Grid item
            <UserForm />
          </Grid>
          <Grid
            item
            xs={false}
            sm={2}
            md={3}
            lg={4}
            style={{ backgroundColor: "#fbded054" }}
          >
            <Hidden xsDown>Grid item, Hidden xsDown</Hidden>
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
}

export default App;
