import axios from '../utils/axios'

const DeleteReviewHandler = async (data) => {
    return await axios.delete(`reviews/${data.id}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    })
}

export default DeleteReviewHandler
