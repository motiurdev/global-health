import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './Appointment.css'

const Appointment = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAppointment = (e) => {
        e.preventDefault()
    }

    window.scrollTo(0, 0)
    return (
        <div className="appointment py-4">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="appointment-form">
                            <Form onSubmit={handleAppointment}>
                                <h3 className="section-title py-4"><i class="far fa-calendar-alt"></i> Book Appointment</h3>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Phone" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" placeholder="Date" />
                                </Form.Group>
                                <button className="regular-btn mt-2" variant="primary" type="submit" onClick={handleShow}>
                                    Submit
                                </button>
                            </Form>
                        </div>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Book Successful</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Your great smile begins with a great dentist</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={{ background: "#06a3da" }} variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;