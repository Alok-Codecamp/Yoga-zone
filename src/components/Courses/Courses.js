import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Loading from '../Course/Loading';


const Courses = () => {
    const [courses, setCourses]=useState([]);
    useEffect(()=>{
        fetch('./myData.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);
        const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    return (
        <div className="my-5 ">
            <h1 className="mb-5 text-success">explorer Our courses</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
            {
                courses.length===0?num.map(render=><Col>
                <Loading key={render}></Loading></Col>)
                :
                courses.map(course=><Col>
                <Course
                key={course.id}
                course={course}
                ></Course>
                </Col>)
                
                }
            </Row>
        </div>
    );
};

export default Courses;