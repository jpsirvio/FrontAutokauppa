import React from 'react';
import './App.css';
import CarList from './components/CarList';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <CarList />
    </div>
  );
}

export default App;
