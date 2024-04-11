"use client";
import { useClient } from 'next/client';
import Form from '../components/Form'; 

const UploadPage = () => {
    return (
        <div>
            <h1>Upload Page</h1>
            <Form />
        </div>
    );
};

export default UploadPage;
