import React from 'react';

export default function Todo({ title, checked, onCheckboxChange }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <input type="checkbox" checked={checked} onChange={onCheckboxChange} />
      <div classname="actions"></div>
    </div>
  );
}
