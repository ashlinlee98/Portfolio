import React, { useState } from 'react';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submittedMessage, setSubmittedMessage] = useState('');

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (!value) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` }));
        }

        if (name === 'email' && value && !validateEmail(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address' }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        setSubmittedMessage("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <div>
            <h2 className="lg:text-7xl text-3xl p-16 mb-4 mt-16 text-gray-900 text-shadow-cyanGlow">Contact Me</h2>
            <p className='text-center text-slate-500 mb-20 text-3xl'>Please feel free to reach out via LinkedIn or email. I would love to hear from you!</p>                
        </div>
        </section>
    );
}

export default MyForm;