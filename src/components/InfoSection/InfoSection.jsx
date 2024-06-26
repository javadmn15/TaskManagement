import React from "react";
import "../InfoSection/InfoSection.css";
function InfoSection() {
  return (
    <div className="container1">
      <h1>Information</h1>
      <div className="queue-container">
        <div className="queue-box todo">
          <span className="queue-title">In Queue</span>
          <span className="queue-count">16</span>
          <span className="queue-title">Tasks</span>
        </div>
        <div className="queue-box in-progress">
          <span className="queue-title">In Progress</span>
          <span className="queue-count">15</span>
          <span className="queue-title">Tasks</span>
        </div>
        <div className="queue-box completed">
        <span className="queue-title">Completed</span>
          <span className="queue-count">18</span>
          <span className="queue-title">Tasks</span>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
