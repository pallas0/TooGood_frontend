import axios from "axios"

const POST_ROUTE = 'https://toogood-backend.onrender.com/submit_subscriber_info'

class APIHandler {
    static async post_data(userData) {
        try {
            const response = await axios.post(POST_ROUTE, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async process_data(subscriberId) {
        try {
            const response = await axios.get(`https://toogood-backend.onrender.com/process_subscriber/${subscriberId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default APIHandler