  import { Typography,styled } from '@mui/material'
  import React from 'react'
  import CardActions from '@mui/material/CardActions';
  import Button from '@mui/material/Button';
  import '../App.css'
  import { useNavigate } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  const StyleTypography=styled(Typography)`
   font-size:20px;
   font-weight:300;
 `
 const NewTypography=styled(Typography)`
  font-size:15px;
  font-weight:200;
  margin-top:-200px;

`
 const StyleCardActions=styled(CardActions)`
 padding:2px;
 margin-top:-300px;
`

  const BookedDetails = () => {
    const bookingdata=useSelector((state)=>state.bookdata);
     console.log(bookingdata);
     const navigate=useNavigate();
    return (
      <div className='first_div'>
        <div className='second_div'>
            <StyleTypography>
                BookingDetails...
            </StyleTypography>
                  <NewTypography variant="body2" color="text.secondary">
                   <ul>
                    <li>{bookingdata.name} </li>
                    <li>{bookingdata.username} </li>
                    <li> {bookingdata.email} </li>
                    <li> {bookingdata.phone} </li>
                   </ul>
                 </NewTypography>
                  
        </div>
        <StyleCardActions>
          <Button size="large" variant="contained" onClick={()=>navigate('/tvmazemovie')}>SearchMovie</Button>
          </StyleCardActions>
      </div>
    )
  }
  
  export default BookedDetails