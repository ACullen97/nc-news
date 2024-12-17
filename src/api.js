import axios from 'axios'

export const getArticles = () => {

    return axios.get(`https://backend-nc-project-w9aw.onrender.com/api/articles`).then(({data}) => {
        return data
    })
}



export default getArticles