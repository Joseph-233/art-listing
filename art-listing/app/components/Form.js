// components/UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from './UploadForm.module.css'; // Import CSS module for styling

const UploadForm = () => {
    const [formData, setFormData] = useState({
        imageUrl: '',
        title: '',
        author: '',
        price: '',
        date: '',
        country: '',
        description: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send data to backend
        axios.post('http://localhost:5000/api/saveFormData', formData)
            .then(response => {
                console.log('Data saved:', response.data);
                setFormData({
                    imageUrl: '',
                    title: '',
                    author: '',
                    price: '',
                    date: '',
                    country: '',
                    description: '',
                    phone: ''
                });
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                placeholder="Image URL"
                onChange={handleChange}
                className={styles.input}
            />
            <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Title"
                onChange={handleChange}
                className={styles.input}
            />
            <input
                type="text"
                name="author"
                value={formData.author}
                placeholder="Author"
                onChange={handleChange}
                className={styles.input}
            />
            <input
                type="text"
                name="price"
                value={formData.price}
                placeholder="Price"
                onChange={handleChange}
                className={styles.input}
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={styles.input}
            />
            <input
                type="text"
                name="country"
                value={formData.country}
                placeholder="Country"
                onChange={handleChange}
                className={styles.input}
            />
            <textarea
                name="description"
                value={formData.description}
                placeholder="Description"
                onChange={handleChange}
                className={styles.textarea}
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone"
                onChange={handleChange}
                className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
};

export default UploadForm;
