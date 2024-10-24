import React, { useState } from 'react';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className='bg-blue-300 '>
            <h2 className="ml-20 text-slate-700 lg:text-5xl text-3xl font-bold px-10 lg:px-16 py-10">Contact Me</h2>
            <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className="space-y-4 w-3/4 mb-6">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block font-bold">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full"
                        required
                    />
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
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>

                {/* Message TextArea */}
                <div>
                    <label htmlFor="message" className="block font-bold">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = 'auto';
                            target.style.height = `${target.scrollHeight}px`;
                        }}
                        className="border rounded-md h-32 p-2 w-full"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    Submit
                </button>
            </form>
            </div>
        </div>
    );
}

export default MyForm;