import React, { useState } from 'react';
import axios from 'axios';

function Context() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            alert(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            alert('Error sending message');
            console.error(error);
        }
    };

    return (
        <div className="p-10 bg-gray-100 text-gray-800">
            <h2 className="text-4xl font-bold mb-6 text-green-700 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md p-8 rounded">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Your message"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Context;
