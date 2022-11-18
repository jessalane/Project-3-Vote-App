import './css/App.css';
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import sweaterJson from "./lib/sweaters.json";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [sweater, setsweater] = useState([]);

  useEffect(() => {
    setsweater(sweaterJson);
  }, []);

  function incrementVoteCount(teamId) {
    sweater = sweater.map((team) => {
      if (team._id === teamId) {
        team.votes = team.votes + 1;
      }
      return team;
    });
    setsweater(sweater);
  }

  return (
    <Container className="app">
      <Row>
        {sweater.map((team) => {
          return (
            <Col md={4}>
              <VotingCard
                team={team}
                incrementVoteCount={(teamId) => incrementVoteCount(teamId)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default App;

