import React from 'react'
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled } from '@mui/material';
import {useNavigate}from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { summeryMovies } from '../redux/actions';
;
const StyleCard=styled(Card)`
      width:250px;   
 `
 const StyleCardActions=styled(CardActions)`
      padding:2px;
      margin-top:-15px ;
      
    
 `
 const Cards = ({movie}) => {
    console.log(movie);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(() => {
        dispatch(summeryMovies());
    });

     const SummeryAll=()=>{
        
        navigate(`/tvmazemovie/summery/${movie.show.id}`)
     }
  return (
      <>
         <div className='movie'>
        <StyleCard>
                <CardMedia
                    component="img"
                    height="300"
                    image={movie.show.image.medium}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <b>Name:</b>{movie.show.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         <b>Type:</b>{movie.show.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         <b>Runtime:</b>{movie.show.averageRuntime}
                    </Typography>
                </CardContent>
                <StyleCardActions>
                    <Button size="small" variant="contained"onClick={SummeryAll} >Summery</Button>
                </StyleCardActions>
            </StyleCard>
            </div>
      </>
     
  )
}

export default Cards