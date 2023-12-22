import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Notification.css";

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  const handleCancelAppointment = () => {
    // Your logic to cancel the appointment
    // For example, localStorage.removeItem to remove appointment data

    // Hide the notification after cancellation
    setShowNotification(false);
  };

  return (
    <div>
      <Navbar />
      {children}
      {isLoggedIn && appointmentData && showNotification && (
        <>
          <div className="notification-container">
            <div className="appointment-card">
              <div className="appointment-card__content">
                <h3 className="appointment-card__title">Appointment Details</h3>
                <p className="appointment-card__message">
                  <strong>Doctor:</strong> {doctorData?.name}
                </p>
                <p className="appointment-card__message">
                  <strong>Booked By:</strong> {appointmentData[0].name}
                </p>
                <p className="appointment-card__message">
                  <strong>Appointment Time:</strong> {appointmentData[0].time}
                </p>
                <p className="appointment-card__message">
                  <strong>Appointment Date:</strong> {appointmentData[0].date}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
