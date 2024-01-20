// Imported Dependencies
import React, { useState } from 'react';
import '../styles.css'

// Form Component
const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        weekdays: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
        },
        gender: 'male',
        dob: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'weekday') {
            setFormData((prevData) => ({
                ...prevData,
                weekdays: {
                    ...prevData.weekdays,
                    [value]: checked,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '',
            email: '',
            contact: '',
            weekdays: {
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
            },
            gender: 'male',
            dob: '',
        });
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='formControl'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='formControl'>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='formControl'>
                <label htmlFor="contact">Contact:</label>
                <input
                    type="number"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='formControl'>
                <label>Weekdays:</label>
                <div className='checkbox-group'>
                    {Object.keys(formData.weekdays).map((day) => (
                        <label key={day}>
                            <input
                                type="checkbox"
                                name="weekday"
                                value={day}
                                checked={formData.weekdays[day]}
                                onChange={handleInputChange}
                                className='checkbox'
                            />
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                        </label>
                    ))}
                </div>
            </div>

            <div className='formControl'>
                <label>Gender:</label>
                <div className='genderbox'>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleInputChange}
                        />
                         Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleInputChange}
                        />
                        Female
                    </label>
                </div>
            </div>

            <div className='formControl'>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
