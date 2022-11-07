import React from 'react'
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar, styled } from '@mui/material';
import {useDispatch,useSelector}from 'react-redux'
import '../App.css'
import { getAllMovies } from '../redux/actions';
import Cards from './Cards';

const StyledAppbar = styled(AppBar)`
      position:relative;
      display: flex;
      flex-wrap: wrap;
      align-content:center;
      background:#fff;
      color:blue;
      

 `
 const StyleTypography=styled(Typography)`
  font-size:30px;
  font-weight:400;
 `
  
const Home = () => {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getAllMovies());
 },[]);
    const movies=useSelector((state)=>state.movies); 
    
     //console.log(movies);
    
     
    return (
        <>
         <div className='app'>
            <StyledAppbar>
                <Toolbar>
                    <StyleTypography>
                        TV MAZEMOVIE ....
                    </StyleTypography>
                </Toolbar>
            </StyledAppbar>
            {
                 movies?.length>0 
                 ?(<div className='container'>
                    
                      {movies.map((movie1,index)=>(
                           
                           <Cards key={index} movie={movie1}/>
                 ))}
                    
                   </div>
                  ):(
                <div className='empty'>
                   <h2>no movies found </h2>
                </div>

            )
       }

       </div>
            
        </>
    )
}

export default Home