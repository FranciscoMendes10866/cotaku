import axios from '../utils/axios'

const Find = async ({ queryKey }) => {
    return await axios.get('animes', {
        headers: {
            authorization: `Bearer ${queryKey[1].token}`
        }
    })
}

export default Find
