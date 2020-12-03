import React,{useState, useEffect,useContext} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../layout/todoList.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function AddEventModalTodo(props){
    
    const [title, setEventTitle] = useState("");
    const [courseID, setCourseId] = useState("");
    const [description, setEventDescription] = useState("");
    const [priority, setEventPriority] = useState("");
    const [type, setEventType] = useState("");

    const [startTime, setEventStartTime] = useState();
    const [endTime, setEventEndTime] = useState();


    const [courseList, setCourseList] = useState([]);
    const [courseName, setCourseName] = useState("");
    const fakeCourse = ["CSE110","CSE101","CSE152","HUM3"];/*This is intended for tests. */

    const [showAddEvent, setShowAddEvent] = useState(props.show);
    useEffect(() => {
        setShowAddEvent(props.show);
        getCourseList();
    })
    function handleClose() {
        props.action();
        return setShowAddEvent(false);
    }

const newEventSubmit = async(e) => {

      e.preventDefault();

      try{

        const eventTag = {title: title, type: type, startTime: startTime, endTime: endTime,
                        priority:priority, description: description, courseName: courseName};
        console.log(eventTag);

        const eventURL = "http://localhost:8080/events/add";
        let token = localStorage.getItem("auth-token");

        const eventRes = await Axios.post(eventURL,eventTag,{headers: {"x-auth-token": token}});
        console.log("This is event res:", eventRes);

      } catch (err){
        console.log("This is event res ERR:");
        console.log(err);
      }
      props.action();
      return setShowAddEvent(false);
    }

    function getCourseList() {
        let token = localStorage.getItem("auth-token");
        Axios.get('http://localhost:8080/courses/all',{headers: {"x-auth-token": token}})/*NOTICE: this may not be correct.*/
        .then(
            (response) => {
                console.log(response);
                setCourseList(response.data);

            }
        )
        .catch( (error) => {console.log(error); }) 
      }

    return(
        <Modal show={showAddEvent} onHide={handleClose} backdrop="static" keyboard={false} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>New Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="name" placeholder="What is this event?" onChange={(e)=>setEventTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGroupCourse">
                    <Form.Label>Course</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." onChange={(e)=>setCourseName(e.target.value)}>
                        <option>Choose...</option>
                        {courseList.map((data,key) =>
                        <option key={key}>{data.courseName}</option>
                    )}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGroupStartTime">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control type="StartTime" placeholder="When does it begin? Format: mm-dd-yyyy-hh-mm" onChange={(e)=>setEventStartTime(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGroupEndTime">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control type="EndTime" placeholder="When does it end? Format: mm-dd-yyyy-hh-mm" onChange={(e)=>setEventEndTime(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGroupDescription">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control type="description" as="textarea" rows={3} placeholder="Any notes for this event?" onChange={(e)=>setEventDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formGroupType">
                    <Form.Label>Event Type</Form.Label>
                    <Form.Control type="description" placeholder="Is this a Lecture or Discussion or Assignment or Something else?" onChange={(e)=>setEventType(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formGroupPriority">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control as="select" onChange={(e)=>setEventPriority(e.target.value)} defaultValue="How important is this event?">
                        <option>How important is this event?</option>
                        <option value = "3">High</option>
                        <option value = "2">Medium</option>
                        <option value = "1">Low</option>
                    </Form.Control>
                </Form.Group>

            </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={newEventSubmit}>Save</Button>
                <Button variant="primary" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}