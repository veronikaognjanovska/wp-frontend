import axios from '../axios/axios';

const GoldenLadderService = {

    getMovie:(id)=>{
        return axios.get(`/m/${id}`);
    },
    rateMovie:(id,rating)=>{
        return axios.post(`/m/rate?rating=${rating}&id=${id}`,{
            "rating":rating
        });
    },
    rateSerie:(id,rating)=>{
        return axios.post(`/m/rate?rating=${rating}&id=${id}`,{
            "rating":rating
        });
    },
    getMoviesByGenre:(genre)=>{
        return axios.get(`/m/g/${genre}`);
    },
    getSerie:(id)=>{
      return axios.get(`/s/${id}`);
    },
    getSeriesByGenre:(genre)=> {
        return axios.get(`/s/g/${genre}`);
    },
    getActor:(id)=>{
        return axios.get(`/a/${id}`)
    },
    getDirector:(id)=>{
        return axios.get(`/d/${id}`)
    }



};