import React from 'react';

const Table = ({ data, onDelete, onUpdate }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>School ID</th>
          <th>Student ID</th>
          <th>Assignment</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item['school-id']}</td>
            <td>{item.students[0]['student-id']}</td>
            <td>{item.students[0].assignment}</td>
            <td>{item.status}</td>
            <td>
              <button onClick={() => onUpdate(item.id)}>Update</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
