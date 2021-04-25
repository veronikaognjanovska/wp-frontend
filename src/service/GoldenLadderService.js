import axios from '../axios/axios';

const GoldenLadderService = {

    getMovie:(id)=>{
        return axios.get(`/m/${id}`);
    },
    rateMovie:(id,rating)=>{
        return axios.post(`/m/${id}/rate?rating=${rating}`,{
            "rating":rating

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


    searchInput: (searchText) =>{
        return axios.get(`/search/${searchText}`);
    }


};
export default GoldenLadderService;