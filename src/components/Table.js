import React, {useEffect, useState} from "react";
import { Box, Typography } from '@mui/material'
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { URL } from "../App";

export const Table = () => {
    const [pageSize, setPageSize] = useState([]);
    const [data, setData] = useState([]);

    const getTableData = async () => {
        await axios.get(`${URL}/api/blood_requests`).then((res) => {
            setData(res.data);
        });;
    };

    useEffect(() => {
        getTableData();
        setPageSize(5);
    }, []);

    const columns = [
        { field : "_id", headerName: "Id", width: 90},
        { field : "name", headerName: "Name", width: 150},
        { field : "surname", headerName: "Surname", width: 150},
        { field : "blood_product_type", headerName: "Blood Product Type", width: 150},
        { field : "city", headerName: "City", width: 150},
        { field : "district", headerName: "District", width: 150},
        { field : "contact_gsm", headerName: "Contact GSM", width: 150},
    ]

    const rows = data.map((row) => ({
        _id: row._id,
        name: row.name,
        surname: row.surname,
        blood_product_type: row.blood_product_type,
        city: row.city,
        district: row.district,
        contact_gsm: row.contact_gsm,
    }));

    return (
        <div>
            <Box sx={{height:400, width:'100%'}}>
                <Typography variant='h3' component='h4' sx={{textAlign:'center', mt:3, mb:3}}>
                    Blood Requests
                </Typography>
                <DataGrid columns={columns} rows={rows} getRowId={(row) => row._id} rowsPerPageOptions={[5, 10, 20]}
                pageSize={pageSize} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}/> 
            </Box>
        </div>
    )
}