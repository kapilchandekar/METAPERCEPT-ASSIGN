import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import jsonData from './data.json';

import Table from './Table';

const App = () => {

  const [data, setData] = useState(jsonData);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleUpdate = (id) => {
    // Implement update logic here
    console.log(`Update item with id ${id}`);
  };

  return (
    <div className="App">
      <h1>CRUD React App</h1>
      <Table data={data} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
