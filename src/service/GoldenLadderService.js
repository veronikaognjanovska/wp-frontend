import axios from '../axios/axios';

const GoldenLadderService = {

    getMovie:(id)=>{
        return axios.get(`/m/${id}`);
    },
    rateMovie:(id,rating,comment)=>{
        return axios.post(`/m/rate?rating=${rating}&comment=${comment}`,{
            "rating":rating,
            "comment": comment
        });
    },
    getMoviesByGenre:(genre)=>{
        return axios.get(`/m/g/${genre}`);
    },
    getNewest:()=>{
        return axios.get(`/m/newest`);
    },
    getTopRated:()=>{
        return axios.get(`/m/topRated`);
    },
    getPopular:()=>{
      return axios.get(`/m/popular`)
    },
    getActor:(id)=>{
        return axios.get(`/a/${id}`)
    },




};
export default GoldenLadderService;