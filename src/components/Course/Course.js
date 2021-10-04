import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = (props) => {
  const {package_name, tutor_name,package_detail, Lesson,student, price,thumbnail}=props.course;
    return (
        <div>
            <Card>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{package_name}</Card.Title>
          <p>Tutor: {tutor_name}</p>
          <Card.Text>
           {package_detail.slice(0,80)}
          </Card.Text>
        </Card.Body>
      <div className="d-flex justify-content-between">
      <div>
       <p>Lesson : {Lesson}</p>
        <p>Number of seats :{student}</p>
       </div>
        <div>
        <p>Price: {price}</p>
        <Button>Course detail</Button>
        </div>
      </div>
      </Card>
        </div>
    );
};

export default Course;