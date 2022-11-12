import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Editcar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
      const row = props.getRow.api.getSelectedNodes()[0].id;
      setCar({
          brand: props.cars[row].brand, 
          model: props.cars[row].model,
          color: props.cars[row].color,
          fuel: props.cars[row].fuel,
          year: props.cars[row].year,
          price: props.cars[row].price,
      });
      setOpen(true);
    };
  
    const handleClose = () => {
      const row = props.getRow.api.getSelectedNodes()[0].id;  
      props.editCar(props.cars[row]._links.self.href, car);
      setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    }

    const handleInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value })
    }


    return(
        <div>
        <Button style={{margin: 10}} variant="outlined" onClick={handleClickOpen}>
          Edit Car
        </Button>
        <Dialog open={open} disableEscapeKeyDown={true} aria-labelledby="form-dialog-title" onClose={handleClose}>
          <DialogTitle id="form-dialog-title">Edit Car</DialogTitle>
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
            <Button onClick={handleClose}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}