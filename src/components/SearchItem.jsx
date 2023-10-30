import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import search from './images/search.png'
import classes from '../styles/SearchStyle.module.css' 
import UserService from "../API/UserService";

const SearchItem = ({setUsers}) => {

    const [filter, setFilter] = useState('')

    const userSearch = async() => {
        const response = await UserService.getByStr(filter);
        console.log(response.data)
        setUsers(response.data)
    }

    return (
        <div className={classes.search}>
            <MyInput 
                value={filter}
                onChange={event => setFilter(event.target.value)}
            /> 
            <img src={search} alt="" onClick={userSearch} />
        </div>
    );
};

export default SearchItem;