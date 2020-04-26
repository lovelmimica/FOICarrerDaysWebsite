import React, {useState, useEffect} from 'react';
import {Form, Input} from './SearchBarStyle.js';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) =>{
        setSearchQuery(event.target.value);
    }

    useEffect(() =>{
        console.log("Changed search query to " + searchQuery);
        props.doSearch(searchQuery);
    }, [searchQuery]);

    return(
        <Form>
            {props.disabled == 'true' ?
                <Input disabled type='text' name='searchQuery' value={searchQuery} placeholder={props.placeholder} onChange={handleChange}/>
                :
                <Input type='text' name='searchQuery' value={searchQuery} placeholder={props.placeholder} onChange={handleChange}/>
        }
        </Form>
    );
}

export default SearchBar;