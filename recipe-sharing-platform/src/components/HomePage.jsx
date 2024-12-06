import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import Data from "../data.json";

function HomePage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(Data);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-6 transform transition-transform hover:scale-105"
          >
            <img
              src={user.image}
              alt={user.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h1 className="text-2xl font-semibold text-gray-800 mb-3">
              {user.title}
            </h1>
            <p className="text-gray-600 mb-4">{user.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
