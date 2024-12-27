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

export const getComments = (id) => {

    return axios.get(`https://backend-nc-project-w9aw.onrender.com/api/articles/${id}/comments`).then(({data}) => {
        return data
    })
}

export const voteOnArticle = (id) => {

    return axios.patch(`https://backend-nc-project-w9aw.onrender.com/api/articles/${id}/`)
    
}

export const instance = axios.create({
    baseURL: 'https://backend-nc-project-w9aw.onrender.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });


export default getArticles