import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useGlobalContext } from '../context';

export default function Pokemon({item}){  
const {handleOpen, setPokemon}= useGlobalContext()
const cardHandle=()=> {
  handleOpen()
  setPokemon(item)
}
  return (
    
    <Card sx={{ maxWidth: 345 }} onClick={cardHandle}  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.sprites.front_shiny}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}