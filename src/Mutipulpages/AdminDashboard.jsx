import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/enquiry")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>
      {data.map((item) => (
        <div key={item._id} className="border p-4 mb-4">
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Message:</strong> {item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
