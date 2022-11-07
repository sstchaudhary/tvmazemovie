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
   margin-top:-130px;
 `
 const NewTypography=styled(Typography)`
  font-size:15px;
  font-weight:200;
  margin-top:-200px;
  @media (max-width:425px) {
      margin-left:200px;
  }
  @media (max-width:768px) {
       
  }

`
 const StyleCardActions=styled(CardActions)`
 padding:2px;
 margin-top:-400px;
 @media (max-width:425px) {
    margin-top:-450px;
      
      }
      @media (max-width:768px) {
        margin-top:-450px;
     }

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
                   <ul className='ulcss'>
                    <li className='licss'><b>Customer Name:</b>{bookingdata.name} </li>
                    <li className='licss'><b>No.Of Ticket:</b>{bookingdata.username} </li>
                    <li className='licss'> <b>Customer Email :</b>{bookingdata.email} </li>
                    <li className='licss'> <b>Customer Phone:</b>{bookingdata.phone} </li>
                   </ul>
                 </NewTypography>
                  
        </div>
        <StyleCardActions>
          <Button size="small" variant="contained" onClick={()=>navigate('/tvmazemovie')}>SearchMovie</Button>
          </StyleCardActions>
      </div>
    )
  }
  
  export default BookedDetails