import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/`;

console.log(API_URL);

// API Related Utility Functions (Axios Call)
export async function axiosGetZones() {
	return await axios.get(`${API_URL}zone`);
}

export async function axiosGetZoneByNum(num) {
    return await axios.get(`${API_URL}zone/${num}`);
}
