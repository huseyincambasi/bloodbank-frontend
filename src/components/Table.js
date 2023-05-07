import React, {useEffect, useState} from "react";
import { Box, Typography, Button } from '@mui/material'
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import AccessibilityIcon from "@mui/icons-material/Accessibility" 


export const Table = () => {
    const [data, setData] = useState([]);

    const getTableData = async () => {
        await axios.get("https://www.balldontlie.io/api/v1/teams?per_page=100").then((res) => {
            setData(res.data.data);
        });
    };

    useEffect(() => {
        getTableData()
    }, []);

    const columns = [
        { field : "id", headerName: "ID", width: 90},
        { field : "city", headerName: "City", width: 150},
        { field : "abbreviation", headerName: "Abbreviation", width: 150},
        { field : "conference", headerName: "Conference", width: 150},
        { field : "division", headerName: "Division", width: 150},
    ]

    const rows = data.map((row) => ({
        id: row.id,
        abbreviation: row.abbreviation,
        city: row.city,
        conference: row.conference,
        division: row.division,
    }));

    console.log(data);
    return (
        <div>
            <Button>THIS IS A BUTTON</Button>
            <AccessibilityIcon />

            <Box sx={{height:400, width:'100%'}}>
                <Typography variant='h3' component='h3' sx={{textAlign:'center', mt:3, mb:3}}>
                    Manage Users
                </Typography>
                <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5, 10, 20]}/> 
            </Box>
        </div>
    )
}