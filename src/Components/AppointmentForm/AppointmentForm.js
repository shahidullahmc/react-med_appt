import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    }
    if (!selectedSlot) {
      errors.selectedSlot = 'Please select a time slot';
    }
    if (!selectedDate) {
      errors.selectedDate = 'Please select a date';
    } else {
      const currentDate = new Date();
      const selectedDateObj = new Date(selectedDate);
      if (selectedDateObj < currentDate) {
        errors.selectedDate = 'Selected date must be in the future';
      }
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ name, phoneNumber, selectedSlot, selectedDate });
      setName('');
      setPhoneNumber('');
      setSelectedSlot(null);
      setSelectedDate(null);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="timeSlot">Select Time Slot:</label>
        <select
          id="timeSlot"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          required
        >
          <option value="" disabled>Select a time slot</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
        {errors.selectedSlot && <p className="error">{errors.selectedSlot}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="appointmentDate">Select Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />
        {errors.selectedDate && <p className="error">{errors.selectedDate}</p>}
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentForm;
