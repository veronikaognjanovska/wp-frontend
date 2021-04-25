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
    addToFavorites:(id)=>{
        return axios.get(`/m/${id}/favorites`)
    },
    deleteFromFavorites:(id)=>{
        return axios.get(`m/${id}/removefavorites`)
    },
    addToWatchList:(id)=>{
        return axios.get(`/m/${id}/watchlist`)
    },
    deleteFromWatchList:(id)=>{
        return axios.get(`m/${id}/removewatchlist`)
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