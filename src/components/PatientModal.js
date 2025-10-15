import React, { useEffect } from 'react';
import './PatientModal.css';

function PatientModal({ patient, onClose }) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!patient) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-avatar">
            {patient.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="modal-title">{patient.name}</h2>
            <p className="modal-subtitle">Patient ID: #{patient.id}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="info-section">
            <h3 className="section-title">Personal Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Age</div>
                <div className="info-value">{patient.age} years</div>
              </div>
              <div className="info-item">
                <div className="info-label">Gender</div>
                <div className="info-value">{patient.gender}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Blood Group</div>
                <div className="info-value">{patient.bloodGroup}</div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">Contact Information</h3>
            <div className="info-grid">
              <div className="info-item full-width">
                <div className="info-label">Phone</div>
                <div className="info-value">{patient.contact}</div>
              </div>
              <div className="info-item full-width">
                <div className="info-label">Email</div>
                <div className="info-value">{patient.email}</div>
              </div>
              <div className="info-item full-width">
                <div className="info-label">Emergency Contact</div>
                <div className="info-value">{patient.emergencyContact}</div>
              </div>
              <div className="info-item full-width">
                <div className="info-label">Address</div>
                <div className="info-value">{patient.address}</div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">Medical Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Last Visit</div>
                <div className="info-value">{new Date(patient.lastVisit).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Doctor</div>
                <div className="info-value">{patient.doctor}</div>
              </div>
              <div className="info-item full-width">
                <div className="info-label">Current Diagnosis</div>
                <div className="info-value diagnosis">{patient.diagnosis}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientModal;

