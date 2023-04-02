import React, {useState} from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
   
  
    return (
      <div className="app" style={{textAlign: "center"}}>
        <ReactSwitch
          checked={checked}
          onChange={handleChange}
        />
      </div>
    );
  }
  
  export default ToggleSwitch;