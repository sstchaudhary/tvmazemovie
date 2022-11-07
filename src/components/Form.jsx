import React from 'react'
import styled from '@emotion/styled';
import { AppBar, Toolbar, FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMovie }from '../redux/actions';
import { useDispatch } from 'react-redux';
import '../App.css'

const Container = styled(FormGroup)`
      margin: 0 auto 0 auto;
      width:50%;
       height:auto;
      & > div{
        margin-top:20px;
      }
      
 `
const defaultUser = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

const StyledAppbar = styled(AppBar)`
      position:relative;
      display: flex;
      flex-wrap: wrap;
      align-content:center;
      background:#fff;
      color:blue;
      

 `
const StyleTypography = styled(Typography)`
  font-size:30px;
  font-weight:400;
 `
const Form = () => {
  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();
  const { id } = useParams();
  const summery = useSelector((state) => state.summery);
   const dispatch=useDispatch();
  const moviedata = summery.map((data) => {
    return data
  }).filter((data) => {
    return (data.show.id) === JSON.parse(id);
  })
  //console.log(moviedata);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user);
  }
  // const addMovie = (data) => {
  //   console.log(data);
  // }

  const MovieDetails = () => {
    dispatch(addMovie(user));
    navigate('/tvmazemovie/bookingdetail');
  }
  return (
    <div className='main_div'>

      <StyledAppbar>
        <Toolbar>
          <StyleTypography>
            Book Movie
          </StyleTypography>
        </Toolbar>
      </StyledAppbar>
      {
        moviedata.map((data) => (
          <Container>
            <Typography variant="h6"><b>MovieName:</b>{data.show.name}</Typography>
            <Typography variant="h6"><b>Duration:</b>{data.show.averageRuntime}</Typography>
            <Typography variant="h6"><b>Genere:</b>{data.show.type}</Typography>
          </Container>
        ))
      }

      <Container>
        <FormControl>
          <InputLabel>
            Name
          </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>
            Number of Ticket
          </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>
            Email
          </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>
            Phone
          </InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => MovieDetails()}>Submit</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default Form