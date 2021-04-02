import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container style={styles.container} component="main" maxWidth="xl">
        <div style={styles.topBar}></div>
        <div style={styles.bottomBar}></div>
        <div style={styles.homeContainer}>
          <h1 style={styles.dashboardText}>Welcome to the Users Dashboard!</h1>
          <nav>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <Button style={styles.button} variant="contained" color="primary">
                Enter Dashboard
              </Button>
            </Link>
          </nav>
        </div>
      </Container>
    );
  }
}

const styles = {
  container: {
    padding: 0,
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
  homeContainer: { margin: "0 auto", marginTop: "50px", textAlign: "center" },
  dashboardText: { color: "white", textAlign: "center" },
  button: { textAlign: "center", margin: "0 auto" },
};
