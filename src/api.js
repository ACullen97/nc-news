import axios from 'axios'

export const getArticles = () => {

    return axios.get(`https://backend-nc-project-w9aw.onrender.com/api/articles`).then(({data}) => {
        return data
    })
}

export const getArticle = (id) => {

    return axios.get(`https://backend-nc-project-w9aw.onrender.com/api/articles/${id}`).then(({data}) => {
        return data
    })
}



export default getArticles