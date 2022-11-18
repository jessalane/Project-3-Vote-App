import React from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  let { sweater, incrementVoteCount } = props;
// hi
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/images/${sweater.pic}`} />
      <Card.Body>
        <Card.Title>{sweater.name}</Card.Title>
        <Button variant="success" onClick={() => incrementVoteCount(sweater._id)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {sweater.votes}</Card.Footer>
    </Card>
  );
}
export default VotingCard;