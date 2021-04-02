import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: null, count: 9 };
  }

  storeUsers(data) {
    this.setState({ users: data.results });
  }

  componentDidMount() {
    this.getUsers();
  }

  setNewCount(e) {
    this.setState({ count: e.target.value });
  }

  getUsers() {
    fetch(" https://randomuser.me/api/?results=" + this.state.count, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        this.storeUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  formRow(user, index) {
    return (
      <React.Fragment>
        <Grid key={`user-` + index} wrap={"wrap"} style={styles.rowGrid} item>
          <Paper className={styles.paper}>
            <img style={styles.image} src={user.picture.large}></img>
            <h3 style={styles.first}>{user.name.first}</h3>
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: "/users/profile", state: user }}
            >
              <Grid style={styles.buttonPadding}>
                <Button
                  style={styles.button}
                  variant="contained"
                  color="primary"
                >
                  View Profile
                </Button>
              </Grid>
            </Link>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  returnGrid(users) {
    return (
      <div styles={{}} className={styles.root}>
        <Grid container style={styles.outerGrid} spacing={1}>
          <Grid container xs={12} spacing={3} style={{}}>
            {users &&
              users.map((user, index) => {
                return this.formRow(user, index);
              })}
          </Grid>
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Container style={styles.topContainer} component="main" maxWidth="xl">
          <div style={styles.topBar}></div>
          <div style={styles.bottomBar}></div>
          <div style={styles.outerDiv}>
            <h1 style={styles.userText}>Users Dashboard</h1>
            <Button
              style={styles.getUser}
              variant="contained"
              color="primary"
              onClick={() => {
                this.getUsers();
              }}
            >
              {" "}
              Get New Users
            </Button>
            <Link style={styles.link} to="/">
              <Button
                style={styles.homeButton}
                variant="contained"
                color="primary"
              >
                {" "}
                Return To Home
              </Button>
            </Link>
            <p>Number of users to retrieve</p>
            <input
              onChange={(e) => {
                this.setNewCount(e);
              }}
              style={styles.input}
              placeholder={"default is 9"}
            ></input>
          </div>
          {this.returnGrid(this.state.users)}
        </Container>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    padding: 25,
    textAlign: "center",
    color: "black",
  },
  rowGrid: { margin: "0 auto" },
  image: {
    padding: 10,
    height: 200,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  first: { textAlign: "center" },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  buttonPadding: { padding: 15 },
  outerGrid: {
    textAlign: "center",
    margin: "0 auto",
  },
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
  outerDiv: { margin: "0 auto", marginTop: "50px", textAlign: "center" },
  userText: { color: "white", textAlign: "center" },
  getuser: { textAlign: "center", margin: "0 auto" },
  link: { padding: 5, textDecoration: "none" },
  homeButton: { textAlign: "center", margin: "0 auto" },
  input: { marginBottom: 50 },
  topContainer: { padding: 0 },
};
