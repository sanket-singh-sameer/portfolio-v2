// api.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.xsam.in/api",
  timeout: 15000,
});

let axiosPublicUser;
export async function fetchPublicUser() {
  const response = await axiosInstance.get("/user/public");
  axiosPublicUser = response.data;
  return axiosPublicUser;
}
export async function fetchProjects() {
  const response = await axiosInstance.get("/project");
  return response.data;
}
export async function fetchSkills() {
  const response = await axiosInstance.get("/skill");
  return response.data;
}
export async function fetchTimelines() {
  const response = await axiosInstance.get("/timeline");
  return response.data;
}
export async function fetchSocials() {
  const response = await axiosInstance.get("/social");
  return response.data;
}

export async function sendMessage(messageData) {
  const response = await axiosInstance.post("/message", messageData);
  return response.data;
}

export default axiosInstance;