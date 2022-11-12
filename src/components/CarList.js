import React, { useEffect, useState, useRef } from 'react';
import { AgGridReact } from'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import Addcar from './AddCar'
import Editcar from './EditCar'

export default function CarList() {
    const [cars, setCars] = useState([]);
    const gridRef = useRef();
    const columns = [
        { headerName: 'Brand', field: "brand" , sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Model', field: "model" , sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Color', field: "color" , sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Fuel', field: "fuel" , sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Year', field: "year" , sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Price', field: "price" , sortable: true, filter: true, floatingFilter: true }
    ];

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    };

    const deleteCar = () => {
        const selected = gridRef.current.api.getSelectedNodes();
        //console.log(selected[0].id);
        //console.log(cars[gridRef.current.api.getSelectedNodes()[0].id]);
        if(selected.length > 0) {     
            if(window.confirm('Delete car?')) {
                const car = cars[selected[0].id];
                const link = car._links.self.href;
                //console.log('link: ' + link);
                fetch(link, {method: 'DELETE'})
                .then(res => fetchData())
                .catch(err => console.error(err))
            }
        } else {
            alert('Select a row before deleting')
        }
    };

    const editCar = (link, car) => {
        fetch( link, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    };

    const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    };

    return  (
        <div>
            <div className="ag-theme-material" style={{height: '600px', width: '100vw' }}>
                <Addcar saveCar={saveCar} />
                <Editcar editCar={editCar} cars={cars} getRow={gridRef.current} />
                <Button style={{margin: 10}} variant="outlined" onClick={deleteCar}>Delete Car</Button>
                <AgGridReact
                    ref={gridRef}
                    onGridkey={ params => gridRef.current = params.api }
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={cars}
                    animateRows={true}     
                    defaultColDef={{cellStyle: () => ({display: "flex", alignItems: "left", justifyContent: "left"})}}            
                >
                </AgGridReact>
            </div>
        </div>
    );
}