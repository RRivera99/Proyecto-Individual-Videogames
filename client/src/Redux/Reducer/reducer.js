// importacion de las action typer
import { isUUID } from "../../Utils";
import {  FILTER_GENRES, FILTER_ORIGIN, GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAME_NAME, ORDER_AZ, ORDER_RATING, PAGE, RESET } from "../Action/actionTypes";

let initialState ={
    allVideogames: [],
    allVideogamesBackUp: [],
    videogamesFiltered:[],
    allGenres: [],
    filters:false,
    currentPage: 0
}

const rootReducer = (state = initialState, action ) => {
    const ITEMS_PER_PAGE = 15;
    switch (action.type){

        case GET_VIDEOGAMES: return {
            ...state,
            allVideogames: [...action.payload].splice(0, ITEMS_PER_PAGE),
            allVideogamesBackUp: action.payload
            };
        
        case GET_GENRES: return{
            ...state,
            allGenres: action.payload
        }
        case PAGE: 
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const first_index = action.payload === 'next' ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;
            
            if(state.filters){
                if(action.payload === 'next' && first_index >= state.videogamesFiltered.length) return state
                else if (action.payload === 'prev' && prev_page < 0) return state
                return {
                    ...state,
                    allVideogames: [...state.videogamesFiltered].splice(first_index, ITEMS_PER_PAGE),
                    currentPage: action.payload === 'next' ? next_page : prev_page 
                }
            }
            if(action.payload === 'next' && first_index >= state.allVideogamesBackUp.length) return state
            else if (action.payload === 'prev' && prev_page < 0) return state
            return {
                ...state,
                allVideogames: [...state.allVideogamesBackUp].splice(first_index, ITEMS_PER_PAGE),
                currentPage: action.payload === 'next' ? next_page : prev_page 
            }
        case ORDER_AZ: 
            if (action.payload === 'AZ'){
                let asc =[]
                if(state.filters){
                    asc= [...state.videogamesFiltered].sort((a,b)=>{
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                        return 0
                    })
                    return {
                        ...state,
                        allVideogames: [...asc].splice(0, ITEMS_PER_PAGE),
                        videogamesFiltered: asc,
                        currentPage:0
                    }
                } else {
                    asc= [...state.allVideogamesBackUp].sort((a,b)=>{
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                        return 0
                    })
                    return {
                        ...state,
                        allVideogames: [...asc].splice(0, ITEMS_PER_PAGE),
                        allVideogamesBackUp: asc,
                        currentPage:0
                    }
                }
                
                
            }
            if (action.payload === 'ZA'){
                let desc =[]
                if(state.filters){
                    desc= [...state.videogamesFiltered].sort((a,b)=>{
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        return 0
                    })
                    return {
                        ...state,
                        allVideogames: [...desc].splice(0, ITEMS_PER_PAGE),
                        videogamesFiltered: desc,
                        currentPage:0
                    }
                } else{
                    desc= [...state.allVideogamesBackUp].sort((a,b)=>{
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        return 0
                    })
                    return {
                        ...state,
                        allVideogames: [...desc].splice(0, ITEMS_PER_PAGE),
                        allVideogamesBackUp: desc,
                        currentPage:0
                    }
                }
                
                
            }
        case ORDER_RATING: 
        if (action.payload === 'ASC'){
            let asc =[];
            if (state.filters){
                asc= [...state.videogamesFiltered].sort((a,b)=>{
                    if(a.rating > b.rating) return 1
                    if(a.rating < b.rating) return -1
                    return 0
                })
                return {
                    ...state,
                    allVideogames: [...asc].splice(0, ITEMS_PER_PAGE),
                    videogamesFiltered: asc,
                    currentPage:0
                }
                
            } else {
                 asc= [...state.allVideogamesBackUp].sort((a,b)=>{
                    if(a.rating > b.rating) return 1
                    if(a.rating < b.rating) return -1
                    return 0
                })
                return {
                    ...state,
                    allVideogames: [...asc].splice(0, ITEMS_PER_PAGE),
                    allVideogamesBackUp: asc,
                    currentPage:0
                }
            }
            
        }
        if (action.payload === 'DESC'){
            let desc =[];
            if (state.filters){
                desc= [...state.videogamesFiltered].sort((a,b)=>{
                    if(a.rating > b.rating) return -1
                    if(a.rating < b.rating) return 1
                    return 0
                })
                return {
                    ...state,
                    allVideogames: [...desc].splice(0, ITEMS_PER_PAGE),
                    videogamesFiltered: desc,
                    currentPage:0
                }
                
            } else {
                 desc= [...state.allVideogamesBackUp].sort((a,b)=>{
                    if(a.rating > b.rating) return -1
                    if(a.rating < b.rating) return 1
                    return 0
                })
                return {
                    ...state,
                    allVideogames: [...desc].splice(0, ITEMS_PER_PAGE),
                    allVideogamesBackUp: desc,
                    currentPage:0
                }
            }
            
        }

       
        case FILTER_GENRES:
            const videogamesFilterGenre = [...state.allVideogamesBackUp].filter((v) => v.genres.some((g)=> g === action.payload));
            return {
                ...state,
                allVideogames: [...videogamesFilterGenre].splice(0, ITEMS_PER_PAGE),
                videogamesFiltered: videogamesFilterGenre,
                currentPage:0,
                filters: true
            }
        case FILTER_ORIGIN:
            if (action.payload === 'db'){
            const videogamesFilterOrigin = [...state.allVideogamesBackUp].filter((v) => isUUID(v.id));
            return {
                ...state,
                allVideogames: [...videogamesFilterOrigin].splice(0, ITEMS_PER_PAGE),
                videogamesFiltered: videogamesFilterOrigin,
                currentPage:0,
                filters: true
            }
            }
            else if (action.payload=== 'api'){
            const videogamesFilterOrigin = [...state.allVideogamesBackUp].filter((v) => v.id < 853958);
            return {
                ...state,
                allVideogames: [...videogamesFilterOrigin].splice(0, ITEMS_PER_PAGE),
                videogamesFiltered: videogamesFilterOrigin,
                currentPage:0,
                filters: true
            }
            }
        case GET_VIDEOGAME_NAME: return {
            ...state,
            allVideogames: action.payload,

        }
            
        case RESET: return {
            ...state,
            allVideogames: [...state.allVideogamesBackUp].splice(0, ITEMS_PER_PAGE),
            currentPage:0,
            filters: false,
            videogamesFiltered: []
        }
       
        default :
            return{
                ...state
            };
    }
 };

 export default rootReducer;