import React from "react";
import { Link } from "react-router-dom";

function UserList({ displayUser }) {
  return (
    <div className="my-3 py-2 table-responsive">
      <table className="table table-bordered table-striped bg-white">
        <thead className="bg-white">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {displayUser.map((user) => (
            <tr key={user._id}>
              <th scope="row">
                <Link to={`customer/${user._id}`}>{user.name}</Link>
              </th>
              <td>
                <Link to={`customer/${user._id}`}>{user.email}</Link>
              </td>
              <td>{user.mobile}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
