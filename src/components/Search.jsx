import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {AsyncPaginate} from 'react-select-async-paginate'


const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)
    const API_KEY ="572b0ff04dmshf3c51a06bb991fap11fcc9jsnc0e5b24a8f02"

    const loadOptions = async (inputValue) => {
        try {
           const response = await axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?rapidapi-key=${API_KEY}&namePrefix=${inputValue}&limit=10`)
           const data= response.data.data
           const options = data.map((item) => ({
            value: item.city,
            label: `${item.name} ${item.countryCode}`,
          }));
    
          return {
            options: options,
          };
        }
        catch (error){
            console.error("Error fetching City",error)
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }
    return (
        <div className='flex items-center justify-center py-6'>
            <AsyncPaginate 
            className='w-full'
                placeholder="Search for city"
                debounceTimeout={1200}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    )
}

export default Search
