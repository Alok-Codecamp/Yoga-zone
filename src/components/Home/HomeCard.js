import { Card, Col, Row } from 'react-bootstrap';

const HomeCard = (props) => {
  const { package_name, tutor_name, package_detail, thumbnail } = props.data;

  return (
    
        <Card className="text-success">
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title>{package_name}</Card.Title>
            <Card.Text>
              {package_detail.slice(0,100)}
            </Card.Text>
          </Card.Body>
        </Card>
     
  );
};

export default HomeCard;