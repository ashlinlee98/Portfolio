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

    return (
        <div className='bg-blue-300 '>
            <h2 className="ml-20 text-slate-700 lg:text-5xl text-3xl font-bold px-7 md:px-16 py-10">Contact Me</h2>
            <div className='flex justify-center'>
                <form className="space-y-4 w-3/4 mb-6" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block font-bold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border rounded-md p-2 w-full"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-xl">{errors.name}</p>}
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block font-bold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border rounded-md p-2 w-full"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xl">{errors.email}</p>}
                    </div>

                    {/* Message TextArea */}
                    <div>
                        <label htmlFor="message" className="block font-bold">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = 'auto';
                                target.style.height = `${target.scrollHeight}px`;
                            }}
                            className="border rounded-md h-32 p-2 w-full"
                            required
                        />
                        {errors.message && <p className="text-red-500 text-xl">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="bg-indigo-400 text-white p-2 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
            {submittedMessage && <p className="text-black text-center text-xl font-bold p-4">{submittedMessage}</p>}
        </div>
    );
}

export default MyForm;