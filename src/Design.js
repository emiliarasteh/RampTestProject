import * as React from 'react';
import { useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DateComponent from './DateComponent';



 function Design() {

  const [inputValue, setInputValue] = useState('its normal')

  const handleNext = () => {

    if (inputValue === false) {
  
      setInputValue(["test1", "test2", "test3"]);
      
    }else if(inputValue instanceof Array){
      setInputValue('its normal');
    }else{
      setInputValue(false);

    } 
  };

 
  const theme = useTheme();

  return (
    <Grid container spacing={12}>
    <Grid item xs={12} alignItems="center">

    <Card sx={{ display: 'flex' }}>

    <Grid item xs={12} alignItems="center">

      <Box sx={{ display: 'flex', flexDirection: 'column'}}>


        <CardContent sx={{ flex: '1 0 auto' }}  align="center">
          <Typography component="div" variant="h5">
            <DateComponent input={inputValue} />  
         </Typography>
        </CardContent>
        <Box sx={{ display: 'contents', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton onClick={handleNext} aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
    </Grid>

    </Card>
    </Grid>
    </Grid>
  );
}

export default Design

