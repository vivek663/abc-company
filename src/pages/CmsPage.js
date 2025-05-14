import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CmsPage.css';

export default function CmsPage({ heading, setHeading }) {
  const [input, setInput] = useState(heading || '');
  const [message, setMessage] = useState({ text: '', success: false });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInput(heading || '');
  }, [heading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', success: false });
    try {
      await axios.post('http://localhost:8080/api/heading', { text: input });
      setMessage({ text: 'Heading updated successfully!', success: true });
      setHeading(input); // Update the heading in App state
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || 'Error updating heading',
        success: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="cms-container">
      <div className="cms-card">
        <h1 className="cms-title">Content Management System</h1>
        <form className="cms-form" onSubmit={handleSubmit}>
          <label className="cms-label" htmlFor="heading">Main Heading</label>
          <input
            className="cms-input"
            id="heading"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter heading text"
            required
          />
          <button className="cms-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
        {message.text && (
          <div className={`cms-message ${message.success ? 'success' : 'error'}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
} 