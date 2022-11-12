import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addcar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value })
    }

    const addCar = () => {
        props.saveCar(car);
        handleClose();
    }

    return(
        <div>
        <Button style={{margin: 10}} variant="outlined" onClick={handleClickOpen}>
          Add Car
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Car</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="brand"
              value={car.brand}
              label="Brand"
              onChange={e => handleInputChange(e)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="model"
              value={car.model}
              label="Model"
              onChange={e => handleInputChange(e)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="color"
              value={car.color}
              label="Color"
              onChange={e => handleInputChange(e)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="fuel"
              value={car.fuel}
              label="Fuel"
              onChange={e => handleInputChange(e)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="year"
              value={car.year}
              label="Year"
              onChange={e => handleInputChange(e)}
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="price"
              value={car.price}
              label="Price"
              onChange={e => handleInputChange(e)}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={addCar}>Add Car</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}