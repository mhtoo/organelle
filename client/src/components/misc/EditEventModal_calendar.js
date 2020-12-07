import React,{useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import "../layout/todoList.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import moment from 'moment';

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

export default function EditEventModal_Calendar(props){

    const [title, setEventTitle] = useState("");
    const [description, setEventDescription] = useState("");
    const [priority, setEventPriority] = useState("");
    const [type, setEventType] = useState("");
    const [startTime, setEventStartTime] = useState("");
    const [endTime, setEventEndTime] = useState("");
    const [courseName, setCourseName] = useState("");

    const [title2, setEventTitle2] = useState("");
    const [description2, setEventDescription2] = useState("");
    const [priority2, setEventPriority2] = useState("");
    const [type2, setEventType2] = useState("");
    const [startTime2, setEventStartTime2] = useState("");
    const [endTime2, setEventEndTime2] = useState("");
    const [courseName2, setCourseName2] = useState("");
    const [courseList, setCourseList] = useState([]);

    const monthList = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    const yearList = ["2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039"];
    const [dayList,setDayList] = useState([]);
    const hourList = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
    const minList = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
    const [year,setYear] = useState("");
    const [month,setMonth] = useState("");
    const [day,setDay] = useState("");
    const [hour,setHour] = useState("");
    const [min,setMin] = useState("");

    const [showEdit, setShowEdit] = useState(props.show);

    useEffect(() => {
        setShowEdit(props.show);
        getEvent();
        getCourseList();
        setEventPriority2("");
        setEventType2("");
        setEventStartTime2("");
        setEventDescription2("");
        setCourseName2("");
        setEventEndTime2("");
        setEventTitle2("");
        console.log(props.id);
    },[props.show,props.id])

    function handleClose() {

        return props.action();
    }

    const EditSubmit = async(e) => {

        e.preventDefault();

        try{

            const eventTag = {title: title, type: type, startTime: startTime, endTime: endTime,
                priority:priority, description: description, courseName: courseName};
            console.log("this is updated info")
            console.log(eventTag);

            const eventURL = process.env.NODE_ENV === "production"?
                "http://organelle.pzny.xyz/events/"+ props.id:
                "http://localhost:8080/events/"+ props.id;
            let token = localStorage.getItem("auth-token");

            const eventRes = await Axios.put(eventURL,eventTag,{headers: {"x-auth-token": token}});
            console.log("This is event res:", eventRes);

          } catch (err){
            console.log("This is course res ERR:");
            console.log(err);
          }

        return props.action();
      }

      function getCourseList() {
        let token = localStorage.getItem("auth-token");
        const coursesURL = process.env.NODE_ENV === "production"?
        "http://organelle.pzny.xyz/courses/all" :
        'http://localhost:8080/courses/all'
        Axios.get(coursesURL,{headers: {"x-auth-token": token}})/*NOTICE: this may not be correct.*/
        .then(
            (response) => {
                setCourseList(response.data);
            }
        )
        .catch( (error) => {console.log(error); })
      }

    function getEvent() {
        let token = localStorage.getItem("auth-token");
        const eventsURL = 'http://localhost:8080/events/' + props.id;
        Axios.get(eventsURL,{headers: {"x-auth-token": token}})/*NOTICE: this may not be correct.*/
            .then(
                (response) => {
                    console.log(response);
                    setEventTitle2(response.data.title);
                    setCourseName2(response.data.courseName);
                    setEventDescription2(response.data.description);
                    setEventPriority2(response.data.priority);
                    setEventStartTime2(response.data.startTime);
                    setEventEndTime2(moment(response.data.endTime).format('LLLL'));
                    setEventType2(response.data.type)
                }
            )
            .catch( (error) => {console.log(error);})
    }


    function onDatePickerChange(e) {
        setEventStartTime(moment(e).startOf("day").toISOString());
        setEventEndTime(e);
    }


    return(

        <Modal show={showEdit} onHide={handleClose} backdrop="static" keyboard={false} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Event</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Group controlId="formGroupName">
                                    <Form.Label>Event Name</Form.Label>
                                    <Form.Control type="title" plaintext readOnly defaultValue= {title2}/>
                                </Form.Group>
                                <Form.Group controlId="formGroupCourse">
                                    <Form.Label>Event Course</Form.Label>
                                    <Form.Control type="course" plaintext readOnly defaultValue= {courseName2} />
                                </Form.Group>

                                <Form.Group controlId="formGroupEndTime">
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control type="EndTime" plaintext readOnly defaultValue= {endTime2} />
                                </Form.Group>

                                <Form.Group controlId="formGroupDescription">
                                    <Form.Label>Event Description</Form.Label>
                                    <Form.Control type="description" as="textarea" rows={3} plaintext readOnly defaultValue= {description2} />
                                </Form.Group>

                                <Form.Group controlId="formGroupType">
                                    <Form.Label>Event Type</Form.Label>
                                    <Form.Control type="type" plaintext readOnly defaultValue= {type2} />
                                </Form.Group>

                                <Form.Group controlId="formGroupPriority">
                                <Form.Label>Priority</Form.Label>
                                <Form.Control type="priority" plaintext readOnly defaultValue= {priority2} />
                                </Form.Group>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Group controlId="formGroupName">
                                    <Form.Label>Event Name</Form.Label>
                                    <Form.Control type="title" placeholder="What is this event?" onChange={(e)=>setEventTitle(e.target.value)}/>
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

                        <Form.Row>
                                <Form.Group controlId="formDatePicker">
                                    <Form.Label>End Time</Form.Label>
                                        <Datetime onChange={(e)=>onDatePickerChange(e)}/>
                                </Form.Group>
                        </Form.Row>

                                <Form.Group controlId="formGroupDescription">
                                    <Form.Label>Event Description</Form.Label>
                                    <Form.Control type="description" as="textarea" rows={3} placeholder="Any notes for this event?" onChange={(e)=>setEventDescription(e.target.value)}/>
                                </Form.Group>

                                <Form.Group controlId="formGroupType">
                                    <Form.Label>Event Type</Form.Label>
                                    <Form.Control type="type" placeholder="Is this a Lecture or Something else?" onChange={(e)=>setEventType(e.target.value)}/>
                                </Form.Group>

                                <Form.Group controlId="formGroupPriority">
                                <Form.Label>Priority</Form.Label>
                                <Form.Control as="select" onChange={(e)=>setEventPriority(e.target.value)} defaultValue="How important is this event?">
                                    <option>How important is this event?</option>
                                    <option value = "3">High</option>
                                    <option value = "2">Median</option>
                                    <option value = "1">Low</option>
                                </Form.Control>
                                </Form.Group>
                            </Form.Group>
                        </Form.Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={EditSubmit}>Save</Button>
                    <Button variant="primary" onClick={handleClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
    )
}
