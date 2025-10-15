import React, { useState, useEffect } from 'react';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import { fetchPatients } from '../services/patientsData';
import './PatientsPage.css';

function PatientsPage() {
  // State management using React Hooks
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patients data on component mount
  useEffect(() => {
    const loadPatients = async () => {
      try {
        setLoading(true);
        const data = await fetchPatients();
        setPatients(data);
        setFilteredPatients(data);
        setError(null);
      } catch (err) {
        setError('Failed to load patients. Please try again.');
        console.error('Error fetching patients:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  // Filter patients based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPatients(patients);
    } else {
      const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPatients(filtered);
    }
  }, [searchQuery, patients]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle view details
  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  if (loading) {
    return (
      <div className="patients-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading patients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patients-page">
        <div className="error-container">
          <svg className="error-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="patients-page">
      <div className="patients-container">
        <div className="patients-header">
          <div className="header-content">
            <h1 className="page-title">Patient Records</h1>
            <p className="page-subtitle">
              Manage and view patient information
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-badge">
              <span className="stat-number">{patients.length}</span>
              <span className="stat-text">Total Patients</span>
            </div>
          </div>
        </div>

        <div className="search-section">
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search patients by name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button className="clear-search" onClick={handleClearSearch} aria-label="Clear search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <div className="search-results-info">
            {searchQuery ? (
              <p>
                Found <strong>{filteredPatients.length}</strong> patient{filteredPatients.length !== 1 ? 's' : ''} matching "{searchQuery}"
              </p>
            ) : (
              <p>Showing all <strong>{patients.length}</strong> patients</p>
            )}
          </div>
        </div>

        {filteredPatients.length === 0 ? (
          <div className="no-results">
            <svg className="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <h3>No patients found</h3>
            <p>Try adjusting your search query</p>
            <button className="reset-btn" onClick={handleClearSearch}>
              Clear Search
            </button>
          </div>
        ) : (
          <div className="patients-grid">
            {filteredPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </div>

      {selectedPatient && (
        <PatientModal patient={selectedPatient} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default PatientsPage;

