import React, { useEffect } from 'react'
import { useState } from 'react';
import instance from '../instance';
import './Row.css'

function Row({title,fetchURL}) {
    const base_url = "https://image.tmdb.org/t/p/original";
    const [allMovies,setAllMovies]=useState([]);
    //console.log(title,fetchURL);
    const fetchData =async()=>{
        const response = await instance.get(fetchURL);
        const {data}=response;
       // console.log(data);
        setAllMovies(data.results)
    }
    useEffect(()=>
        {
            fetchData();
        },[]);
       // console.log(allMovies)
  return (
    <div className="row">
        <h2 style={{color:"white",marginTop:"30px"}}>{title}</h2>
        <div className='movie_row'>
            {
                allMovies?.map(item=>(
                    <img className='movie' src={`${base_url}${item.poster_path}`} alt=""/>
                ))
            }
        </div>
    </div>
  )
}

export default Row