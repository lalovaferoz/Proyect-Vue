import axios from "axios";

// Configura la URL base para las solicitudes
const api = axios.create({
  baseURL: "http://localhost:5000", // Asegúrate de que esta URL sea correcta
});

export default api;
