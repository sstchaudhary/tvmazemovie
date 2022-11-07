import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styled,Toolbar,AppBar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css'
import { useNavigate } from 'react-router-dom';
const StyleCard=styled(Card)`
      width:95%;
      display:flex;
      flex-direction:row;
      align-item:center;
      justify-content:center;
      margin-left:20px;
      margin-right:20px;
      margin-top:1px;
      @media (max-width:425px) {
      flex-direction:column;
      align-item:center;
      justify-content:center;
      margin-left:5px;
      margin-top:5px;
      
      }
      @media (max-width:768px) {
      flex-direction:column;
      align-item:center;
      justify-content:center;
      margin-left:17px;
      margin-top:1px;
     }
 `
 const StyleCardActions=styled(CardActions)`
      padding:2px;
      margin-top:-40px ;
      margin-left:400px;
      @media (max-width:768px) {
        margin-left:100px;
     }
 `
 const StyledAppbar = styled(AppBar)`
      position:relative;
      display: flex;
      flex-wrap: wrap;
      align-content:center;
      background:#fff;
      color:blue;
      width:100vw;

 `
 const Cardmediastyle=styled(CardMedia)`
       height:20%;
       width:20%;
       margin-left:10px;
       margin-right:10px; 
       margin-top:10px; 
       margin-bottom:20px;
      
      @media (max-width:425px) {
       height:50%;
       width:70%;
       margin-left:10px;
       margin-right:10px; 
       margin-top:10px; 
       margin-bottom:10px;
  }
  @media (max-width:768px) {
       height:40%;
       width:40%;
       margin-left:5px;
       margin-right:5px; 
       margin-top:10px; 
       margin-bottom:10px;
  }
       
 `
 const StyleTypography=styled(Typography)`
  font-size:30px;
  font-weight:400;
 `
const Summery = () => {
     const navigate=useNavigate();
    const {id}=useParams();
     //console.log(typeof(id));
    const summery=useSelector((state)=>state.summery);
    // const moviedata=summery.filter((data)=>{
    //     return (data.show.id)===JSON.parse(id);
    // }).map((data)=>{
    //      return data;
    // })

     const moviedata=summery.map((data)=>{
           return data
     }).filter((data)=>{
        return (data.show.id)===JSON.parse(id);
     })
     
    console.log(moviedata);
   
  return (
    <>
           
            <StyledAppbar>
                <Toolbar>
                    <StyleTypography>
                       Summery
                    </StyleTypography>
                </Toolbar>
            </StyledAppbar>
              
        <div className='movie1'>
           {
                 moviedata.map((data)=>(
                    
                    
            <StyleCard>
                <Cardmediastyle
                    component="img"
                    image={data.show.image.original}
                    alt="green iguana"
                />
                
                <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div">
                          {data.show.name}
                          <StyleCardActions>
                         <Button size="small" variant="contained"onClick={()=>navigate(`/tvmazemovie/form/${data.show.id}`)}>BookNow</Button>
                         </StyleCardActions>
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                         <b>Summary:</b>{data.show.summary}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         <b>Runtime:</b>{data.show.averageRuntime}
                    </Typography>
                    
                </CardContent>
                
            </StyleCard> 
               
                )
                
               )
            }
            </div>
    </>
  )
}

export default Summery