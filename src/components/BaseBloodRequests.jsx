import React, {useEffect, useState} from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { URL } from "App";

const BaseBloodRequests = (values) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function getBloodRequestsData() {
            await axios.get(`${URL}${values.dataUrl}`, values.header).then((res) => {
                setData(res.data);
            });
        };
        getBloodRequestsData();
    }, [values.dataUrl]);

    const columns = [
        { field : "name", headerName: "Name", width: 150},
        { field : "surname", headerName: "Surname", width: 150},
        { field : "city", headerName: "City", width: 150},
        { field : "district", headerName: "District", width: 150},
        { field : "blood_group", headerName: "Blood Group", width: 150},
        { field : "blood_product_type", headerName: "Blood Product Type", width: 150},
        ...values.additionalColumns
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
        <DataGrid columns={columns} rows={rows} getRowId={(row) => row._id} pageSize={10} />
    )
}

export default BaseBloodRequests;