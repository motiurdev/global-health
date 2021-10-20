import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleContact = (e) => {
        e.preventDefault()
    }



    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <Form onSubmit={handleContact}>
                        <h2 className="section-title py-4"><i class="fas fa-address-book"></i> Contact Form</h2>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <button className="regular-btn mt-2" variant="primary" type="submit" onClick={handleShow}>
                            Submit
                        </button>
                    </Form>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title className="section-title">Successful</Modal.Title>
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
                <div className="col-md-6 mt-5 ps-3">
                    <div className="mt-5 ps-5 ms-2">
                        <div className="d-flex align-items-center pt-5 mb-5 ps-5">
                            <div className="icon section-title">
                                <i class="fas fa-map-marked-alt fa-3x pe-3"></i>
                            </div>
                            <div>
                                <h4 className="section-title">Address</h4>
                                <p className="text-muted">35 West Dental Street</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-5 ps-5">
                            <div className="icon section-title">
                                <i class="fas fa-phone-alt fa-3x pe-3"></i>
                            </div>
                            <div>
                                <h4 className="section-title">Phone</h4>
                                <p className="text-muted">+088 123 654 987</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center ps-5">
                            <div className="icon section-title">
                                <i class="far fa-envelope-open fa-3x pe-3"></i>
                            </div>
                            <div>
                                <h4 className="section-title">Email</h4>
                                <p className="text-muted">globalhealth@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;