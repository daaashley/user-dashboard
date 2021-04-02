import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const user = this.props.location.state;
    return (
      <div>
        <Container style={styles.container} component="main" maxWidth="xl">
          <div style={styles.topBar}></div>
          <div style={styles.bottomBar}></div>
          <div style={styles.profileContainer}>
            <h1 style={styles.userText}>Users Profile</h1>
            <Link style={{ textDecoration: "none" }} to="/users">
              <Button style={styles.button} variant="contained" color="primary">
                {"Back to Users"}
              </Button>
            </Link>
          </div>
          <Grid item style={styles.outerGrid} xs={8}>
            <Paper style={styles.outerBackground} className={styles.paper}>
              <Grid style={styles.gridPadding}>
                <img style={styles.imageFormat} src={user.picture.large}></img>
              </Grid>

              <Grid item style={styles.innerGrid} xs={12}>
                <Paper styles={styles.infoPaper}>
                  <Grid style={styles.infoGrid} item xs={12}>
                    <p style={styles.info}>
                      {user.name.first} {user.name.last}
                    </p>
                    <p style={styles.info}>
                      Date of Birth: {Date(user.dob.date)}
                    </p>
                    <p style={styles.info}>Age: {user.dob.age}</p>
                    <p style={styles.info}> email: {user.email}</p>
                    <p style={styles.info}>Gender: {user.gender}</p>
                    <p style={styles.info}>
                      Location: {user.location.city}, {user.location.country}
                    </p>
                    <p style={styles.info}>Phone Number: {user.phone}</p>
                    <p style={styles.info}>
                      Date Joined: {Date(user.registered.date)}
                    </p>
                  </Grid>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </div>
    );
  }
}
const styles = {
  root: {
    flexGrow: 1,
  },
  info: {
    fontWeight: 600,
    fontSize: 18,
  },
  paper: {
    padding: 25,
    textAlign: "center",
    color: "black",
  },
  container: { padding: 0 },
  topBar: {
    left: 0,
    height: "100px",
    width: "100%",
    background: "#343837",
  },
  bottomBar: {
    left: 0,
    height: "50px",
    width: "100%",
    background: "#03719C",
  },
  profileContainer: {
    margin: "0 auto",
    marginTop: "50px",
    textAlign: "center",
  },
  userText: { color: "white", textAlign: "center" },
  button: { textAlign: "center", margin: "0 auto" },
  outerGrid: {
    textAlign: "center",
    margin: "0 auto",
    marginTop: 30,
    marginBottom: 30,
  },
  outerBackground: {
    background: "#03719C",
  },
  gridPadding: { paddingTop: 30 },
  imageFormat: {
    borderRadius: 10,
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  innerGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    padding: 10,
  },
  infoPaper: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  infoGrid: {
    padding: 10,
    alignContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
};
