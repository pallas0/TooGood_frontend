import axios from "axios"
// const handleSubmit = async () => {
//     try {
//      const response = await axios.post('http://127.0.0.1:5000//submit_subscriber_info', userData);
//     console.log(response.data.message);
//     } catch (error) {
//         console.error('Error submitting user info:', error);
//     }
// };

const POST_ROUTE = 'http://127.0.0.1:5000//submit_subscriber_info'

class APIHandler {
    static async post_data(userData) {
        try {
            const response = await axios.post(POST_ROUTE, userData);
            console.log(response.data.message);
            } catch (error) {
                console.error('Error submitting user info:', error);
            }

    }
}

export default APIHandler