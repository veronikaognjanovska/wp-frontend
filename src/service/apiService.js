import api  from "../api/api";
import axios from "axios";
export const baseUrl=api;
const API_KEY="9a60ff96502093b1dac5bc2adc4e192a";
const ApiService ={
    findAll:(id)=>
        axios
            .get(`https://api.themoviedb.org/3/find/${id}`,{
                params:{
                    api_key:API_KEY,
                    external_source:"imdb_id"
                }
            }),
    //se zimam so ova
    getUpcoming:()=>{
        axios
            .get(`${baseUrl}/3/movie/upcoming`,{
                params:{
                    api_key:API_KEY

                }
            })
        },
    getPopular:()=>{
        axios
            .get(`${baseUrl}/3/movie/popular`,{
                params:{
                    api_key:API_KEY

                }
            })
    },
    getPopularSeries:()=>{
        axios
            .get(`${baseUrl}/3/tv/popular`,{
                params:{
                    api_key:API_KEY

                }
            })
    },
    getVideo:(id)=>{
        axios
            .get(`${baseUrl}/3/movie/${id}/videos`,{
                params:{
                    api_key:API_KEY

                }
            })
    }



}
export default ApiService;