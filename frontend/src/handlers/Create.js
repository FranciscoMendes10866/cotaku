import axios from '../utils/axios'

const CreateReviewHandler = async (data) => {
    return await axios.post('reviews', data.body, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default CreateReviewHandler
