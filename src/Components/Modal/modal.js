// Imported Dependencies
import React, { useState } from 'react';
import '../styles.css'

// Modal Component
const Modal = ({ rowData, onClose, onUpdate }) => {
    const [editedData, setEditedData] = useState({ ...rowData });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'weekday') {
            setEditedData((prevData) => ({
                ...prevData,
                weekdays: {
                    ...prevData.weekdays,
                    [value]: checked,
                },
            }));
        } else {
            setEditedData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleUpdate = () => {
        onUpdate(editedData);
        onClose();
    };

    return (
        <div className='modalBackground'>
            <div className='modal'>
                <div className='modalControl'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={editedData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='modalControl'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='modalControl'>
                    <label htmlFor="contact">Contact:</label>
                    <input
                        type="number"
                        id="contact"
                        name="contact"
                        value={editedData.contact}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='modalControl'>
                    <label>Weekdays:</label>
                    <div className='checkbox-group'>
                        {Object.keys(editedData.weekdays).map((day) => (
                            <label key={day}>
                                <input
                                    type="checkbox"
                                    name="weekday"
                                    value={day}
                                    checked={editedData.weekdays[day]}
                                    onChange={handleInputChange}
                                />
                                {day.charAt(0).toUpperCase() + day.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>

                <div className='modalControl'>
                    <label>Gender:</label>
                    <div className='genderbox'>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={editedData.gender === 'male'}
                                onChange={handleInputChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={editedData.gender === 'female'}
                                onChange={handleInputChange}
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div className='modalControl'>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={editedData.dob}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='modalBtns'>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal
