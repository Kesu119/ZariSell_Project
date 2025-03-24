import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data from the backend API
  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/requirement/getAllRequirements');
        setRequirements(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch requirements');
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) 
    return <div>Loading...</div>;
  if (error) 
    return <div>{error}</div>;

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center">Admin Panel - All Requirements</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Meeting Type</th>
            <th>Packing</th>
            <th>Packing (gm)</th>
            <th>Additional Details</th>
          </tr>
        </thead>
        <tbody>
          {requirements.length > 0 ? (
            requirements.map((req) => (
              <tr key={req._id}>
                <td>{req.fullname}</td>
                <td>{req.email}</td>
                <td>{req.phone}</td>
                <td>{req.meeting}</td>
                <td>{req.packing}</td>
                <td>{req.packing2}</td>
                <td>{req.additional}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No requirements found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
