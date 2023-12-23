import React, { useState } from 'react';
import "./ReviewForm.css"

const ReviewForm = ({ doctorName, specialty }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    // Your logic to handle review submission (e.g., send data to server/API)
    alert(`Thank you for reviewing ${doctorName}!`);
  };

  return (
    <div style={{ marginTop: '10%' }} className="reviews-container">
      <h3>Ratings and Reviews</h3>
      <p>Our medical professionals are qualified and their Ratings and Reviews are verified</p>
      <table className="report-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Doctor’s Name</th>
            <th>Doctor Specialty</th>
            <th>Provide review</th>
            <th>Review given</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td><button className="update-button">Click Here</button></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td><button className="update-button">Click Here</button></td>
            <td></td>
          </tr>
          {/* Repeat similar rows for other doctors */}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;
