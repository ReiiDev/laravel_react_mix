import React from 'react'
import MainApp from '../templates/MainApp';
import { Box, Fab } from '@mui/material';
import * as icon from '@mui/icons-material';


function About() {

  return (
      <MainApp>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <icon.Add />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <icon.Edit />
          </Fab>
          <Fab variant="extended">
            <icon.Navigation sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <icon.Favorite />
          </Fab>
        </Box>
      </MainApp>
  );
}
  
export default About;