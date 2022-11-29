import React from "react";
import { Card, Button } from "react-bootstrap";
import ('../css/poll.css');

function VotingCard(props) {
  let { sweater, incrementVoteCount } = props;
// changes
  return (
    <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/assets/images/${sweater.pic}`} />
      <Card.Body class="cardBody">
        <Card.Title class="cardTitle">{sweater.name}</Card.Title>
        <Button variant="success" onClick={() => incrementVoteCount(sweater._id)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer class="voteCount">Vote count: {sweater.votes}</Card.Footer>
    </Card>
    </div>
  );
}

export default VotingCard;