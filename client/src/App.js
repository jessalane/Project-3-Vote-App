import './css/App.css';
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import sweaterJson from "./lib/sweaters.json";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [sweater, setSweater] = useState([]);

  useEffect(() => {
    setSweater(sweaterJson);
  }, []);

  function incrementVoteCount(sweaterId) {
    sweater = sweater.map((sweater) => {
      if (sweater._id === sweaterId) {
        sweater.votes = sweater.votes + 1;
      }
      return sweater;
    });
    setSweater(sweater);
  }

  return (
    <Container className="app">
      <Row>
        {sweater.map((sweater) => {
          return (
            <Col md={4}>
              <VotingCard
                sweater={sweater}
                incrementVoteCount={(sweaterId) => incrementVoteCount(sweaterId)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default App;

