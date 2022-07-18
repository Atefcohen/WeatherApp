import { useState,useEffect,useContext } from "react";
import { AppContext } from "../App";
import { getFromLoacalStorage,addToLoacalStorge } from "../helpers/storage";
 
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const FAVORITE = getFromLoacalStorage('favorite')



const Favorites = (props) =>{{
    const [favorite,setFavorite] = useState(FAVORITE)
return(
    <h2>Favorites</h2>
)

}}




export default Favorites;