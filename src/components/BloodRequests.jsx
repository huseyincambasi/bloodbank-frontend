import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { URL } from "App";


const BloodRequests = (props) => {
    const access_token = useSelector((state) => state.access_token);

    useEffect(() => {
        async function getBloodRequestsData() {
            await axios.get(`${URL}${props.dataUrl}`, {headers: {Authorization: 'Bearer ' + access_token}}).then((res) => {
                props.setData(res.data);
            });
        };
        getBloodRequestsData();
    }, [props.dataUrl, props.headers]);

    const columns = [
        { field : "name", headerName: "Name", width: 120},
        { field : "surname", headerName: "Surname", width: 120},
        { field : "city", headerName: "City", width: 120},
        { field : "district", headerName: "District", width: 120},
        { field : "blood_group", headerName: "Blood Group", width: 120},
        { field : "blood_product_type", headerName: "Blood Product Type", width: 130},
        { field : "unit", headerName: "Unit", width: 50},
        ...props.additionalColumns
    ]

    const rows = props.data.map((row) => ({
        _id: row._id,
        name: row.name,
        surname: row.surname,
        city: row.city,
        district: row.district,
        blood_group: row.blood_group,
        blood_product_type: row.blood_product_type,
        unit: row.unit,
    }));

    return (
        <DataGrid columns={columns} rows={rows} getRowId={(row) => row._id} pageSize={10} />
    )
}

export default BloodRequests;