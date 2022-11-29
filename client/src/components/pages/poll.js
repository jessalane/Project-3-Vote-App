import '../../css/poll.css';
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "../votingCard";
import sweaterJson from "../../lib/sweaters.json";
// import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function Poll() {
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
    <Container className="Poll">
      <section id="pollPage">
        <h1>Most Festive Sweater</h1>
      <div id="pollContainer">
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
      </div>
      </section>
    </Container>
  );
}
export default Poll;
