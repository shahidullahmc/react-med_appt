import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'
import { v4 as uuidv4 } from 'uuid';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">Dr. Michael Murphy</div>
          <div className="doctor-card-detail-speciality">General Physician</div>
          <div className="doctor-card-detail-experience">10 years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
          <button className='book-appointment-btn' onClick={handleBooking}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">Dr. Jiao Yang</div>
          <div className="doctor-card-detail-speciality">General Physician</div>
          <div className="doctor-card-detail-experience">7 years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
          <button className='book-appointment-btn' onClick={handleBooking}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">Dr. Dinah Jackson</div>
          <div className="doctor-card-detail-speciality">General Physician</div>
          <div className="doctor-card-detail-experience">8 years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
          <button className='book-appointment-btn' onClick={handleBooking}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>
      {showModal && (
        <div className="appointment-modal">
            <div className="modal-content">
                <button className="close-modal" onClick={() => setShowModal(false)}>
                    Close
                </button>
                <AppointmentForm onSubmit={handleFormSubmit} />
            </div>
        </div>
      )}

    </div>
  );
};

export default DoctorCard;