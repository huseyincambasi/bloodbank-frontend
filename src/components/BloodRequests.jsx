import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material'
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { URL } from "App";
import DonateDialog from "./DonateDialog";

const BloodRequests = () => {
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);

    useEffect(() => {
        getBloodRequestsData();
    }, []);

    const getBloodRequestsData = async () => {
        await axios.get(`${URL}/api/blood_requests`).then((res) => {
            setData(res.data);
        });
    };

    const columns = [
        { field : "name", headerName: "Name", width: 150},
        { field : "surname", headerName: "Surname", width: 150},
        { field : "city", headerName: "City", width: 150},
        { field : "district", headerName: "District", width: 150},
        { field : "blood_group", headerName: "Blood Group", width: 150},
        { field : "blood_product_type", headerName: "Blood Product Type", width: 150},
        { field : "donate_blood", headerName: "", width: 150,
            renderCell: (cellValues) => {
              return (
                <Button variant="contained" color="primary" onClick={() => setSelectedRow(cellValues.row._id)}>                    
                    Donate Blood
                </Button>
              );
            }
          },
          { field: "Route", headerName: "", width: 150,
            renderCell: (cellValues) => {
                return (
                    <Button variant="contained" color="warning">
                        <Link style={{textDecoration: "none", color:'inherit'}} to={`/bloodrequest/${cellValues.row._id}`}>
                            View Details
                        </Link>
                    </Button>
                );
            }
          }, 
    ]

    const rows = data.map((row) => ({
        _id: row._id,
        name: row.name,
        surname: row.surname,
        city: row.city,
        district: row.district,
        blood_group: row.blood_group,
        blood_product_type: row.blood_product_type,
    }));

    return (
        <div>
            <Box sx={{height:400, width:'100%'}}>
                <DataGrid columns={columns} rows={rows} getRowId={(row) => row._id} pageSize={10} /> 
                <DonateDialog selectedRow={selectedRow}/>
            </Box>
        </div>
    )
}

export default BloodRequests;