import axios from '../utils/axios'

const CreateReviewHandler = async (data) => {
    return await axios.post(`reviews/${data.id}`, data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default CreateReviewHandler
