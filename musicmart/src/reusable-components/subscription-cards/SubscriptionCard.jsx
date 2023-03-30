import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';

function SubscriptionCard({ heading, subheading, benefit1, benefit2, benefit3, buttonText }) {
  return (
    <Card style={{ width: '15%', height: '40%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
      <Card.Body>
        <Card.Title as="h3">{heading}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subheading}</Card.Subtitle>
        <hr />
        <ListGroup className="my-4">
          <ListGroupItem><BsCheck className="text-success mr-2" />{benefit1}</ListGroupItem>
          <ListGroupItem><BsCheck className="text-success mr-2" />{benefit2}</ListGroupItem>
          <ListGroupItem><BsCheck className="text-success mr-2" />{benefit3}</ListGroupItem>
        </ListGroup>
        <Button variant="primary" size="lg">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default SubscriptionCard;
