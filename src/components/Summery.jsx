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
      width:450px;
      margin-top:20px;   
 `
 const StyleCardActions=styled(CardActions)`
      padding:2px;
      margin-top:-35px ;
      margin-left:250px;
    
 `
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
           
        <div className='app1'>
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
                <CardMedia
                    component="img"
                    height="600"
                    image={data.show.image.medium}
                    alt="green iguana"
                />
                
                <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div">
                          {data.show.name}
                          <StyleCardActions>
                         <Button size="large" onClick={()=>navigate(`/tvmazemovie/form/${data.show.id}`)}>BookNow</Button>
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
            </div>
    </>
  )
}

export default Summery