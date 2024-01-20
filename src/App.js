// Imported Dependencies & Components
import React, { useState } from 'react';
import Form from './Components/Form/form';
import Table from './Components/Table/table';
import Modal from './Components/Modal/modal';

// App Component
const App = () => {
  const [tableData, setTableData] = useState([]);
  const [editModalData, setEditModalData] = useState(null);

  const handleFormSubmit = (formData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  const handleEdit = (rowData) => {
    setEditModalData(rowData);
  };

  const handleUpdate = (updatedData) => {
    const updatedTableData = tableData.map((row) =>
      row === editModalData ? updatedData : row
    );
    setTableData(updatedTableData);
    setEditModalData(null);
  };

  const handleDelete = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='box'><Form onSubmit={handleFormSubmit} /></div>
        <div className='box'><Table data={tableData} onEdit={handleEdit} onDelete={handleDelete} /></div>
      </div>
      {editModalData && (
        <Modal
          rowData={editModalData}
          onUpdate={handleUpdate}
          onClose={() => setEditModalData(null)}
        />
      )}
    </div>
  );
};

export default App;

