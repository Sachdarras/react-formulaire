import React, { useState } from 'react';

function MyTitleForm() {
  const [title, setTitle] = useState('Awesome Title');
  const handleChange = (event) => {
    const value = event.target.value;
    setTitle(value.replace('*', ''));
  };

  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor="title">Title :</label>
      <input id="title" type="text" value={title} onChange={handleChange} />
    </div>
  );
}

export default MyTitleForm;
