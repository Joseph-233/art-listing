"use client";
import { useClient } from 'next/client';
import Form from '../components/Form'; // Assuming Form.js is in the components directory

const UploadPage = () => {
    return (
        <div>
            <h1>Upload Page</h1>
            <Form />
        </div>
    );
};

export default UploadPage;
