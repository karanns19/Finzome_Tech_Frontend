// Imported Dependencies
import React from 'react';
import '../styles.css'

// Table  Component
const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th id='thFirst'>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Days</th>
          <th>Gender</th>
          <th>DOB</th>
          <th id='thLast'>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.contact}</td>
            <td>{renderWeekdays(row.weekdays)}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>
              <button onClick={() => onEdit(row)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Helper function to render weekdays as a string
const renderWeekdays = (weekdays) => {
  const selectedDays = Object.keys(weekdays).filter((day) => weekdays[day]);
  return selectedDays.length > 0 ? selectedDays.join(', ') : 'None';
};

export default Table;
