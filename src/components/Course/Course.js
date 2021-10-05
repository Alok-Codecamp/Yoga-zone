import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
  const {package_name, tutor_name,package_detail, Lesson,student, price,thumbnail}=props.course;
    return (
        <div className="my-card">
            <Card bg="hot-pink" className="p-2">
        <Card.Img variant="top" src={thumbnail} className="rounded" />
        <Card.Body>
          <Card.Title className="custom-card-title">{package_name}</Card.Title>
          <p className="tutor">Tutor: {tutor_name}</p>
          <Card.Text className="text-success">
           {package_detail.slice(0,80)}
          </Card.Text>
        </Card.Body>
      <div className="d-flex justify-content-between">
      <div className="ms-3 text-success myFontSize">
       <p>Lesson : {Lesson}</p>
        <p>Number of seats :{student}</p>
       </div>
        <div>
        <p className="price">Price: {price}</p>
        <Button className="ms-2"  variant="success">detail</Button>
        </div>
      </div>
      </Card>
        </div>
    );
};

export default Course;