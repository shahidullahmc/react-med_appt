import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
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
    <div className="doctor-card">
      <div className="doctor-card-details">
        <div className="doctor-card-profile-image-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
        <div>
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
          <button className="book-appointment-btn" onClick={handleBooking}>
            <div>{appointments.length > 0 ? 'Cancel Appointment' : 'Book Appointment'}</div>
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
            {appointments.length > 0 ? (
              <>
                <h3 style={{ textAlign: 'center' }}>Appointment Canceled!</h3>
                {/* Display canceled appointments */}
                {appointments.map((appointment) => (
                  <div className="bookedInfo" key={appointment.id}>
                    <p>Name: {appointment.name}</p>
                    <p>Phone Number: {appointment.phoneNumber}</p>
                  </div>
                ))}
              </>
            ) : (
              <AppointmentForm onSubmit={handleFormSubmit} />
            )}
          </div>
        </div>
      )}

      {/* Display appointments */}
      {appointments.map((appointment) => (
        <div key={appointment.id}>
          {/* Display appointment details */}
          <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="doctor-cards-container">
      <DoctorCard name="Dr. Michael Murphy" speciality="General Physician" experience="10" ratings="4.8" />
      <DoctorCard name="Dr. Jiao Yang" speciality="General Physician" experience="7" ratings="4.5" />
      <DoctorCard name="Dr. Dinah Jackson" speciality="General Physician" experience="8" ratings="4.7" />
    </div>
  );
};

