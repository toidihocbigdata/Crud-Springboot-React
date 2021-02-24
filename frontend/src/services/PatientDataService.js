import axios from "axios";

const API_URL = "http://localhost:8008";

class PatientDataService {
  retrieveAllPatient() {
    return axios.get(`${API_URL}/patients`);
  }
  retrievePatientById(id) {
      return axios.get(`${API_URL}/patients/${id}`);
  }

  deletePatientById(id) {
    return axios.delete(`${API_URL}/patients/${id}`);
  }

  updatePatientById(id, patient) {
    return axios.put(`${API_URL}/patients/${id}`, patient);
  }

  createPatient(patient) {
    return axios.post(`${API_URL}/patients/new`, patient);
  }
}

export default new PatientDataService();
