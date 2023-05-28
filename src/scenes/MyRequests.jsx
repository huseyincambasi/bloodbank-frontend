import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import BaseBloodRequests from "components/BaseBloodRequests";
import { URL } from "App";

const MyRequests = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const access_token = useSelector((state) => state.access_token);
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  useEffect(() => {
    setHeaders({headers: {Authorization: 'Bearer ' + access_token}});
  }, [access_token]);

  const pull_data = (data) => {
    setData(data);
  }

  async function deleteBloodRequest(rowId) {
    await axios.delete(`${URL}/api/user/blood_requests/${rowId}/delete/`, headers).then((res) => {
      setData(data.filter((row) => row._id !== rowId));
    });
  };

  async function decreaseUnit(rowId) {
    await axios.patch(`${URL}/api/user/blood_requests/${rowId}/decrease/`, null, headers).then((res) => {
      setData((rows) => {return rows.map((row) => row._id === rowId ? { ...row, unit: row.unit - 1 } : row);});
    });    
  };

  async function increaseUnit(rowId) {
    await axios.patch(`${URL}/api/user/blood_requests/${rowId}/increase/`, null, headers).then((res) => {
      setData((rows) => {return rows.map((row) => row._id === rowId ? { ...row, unit: row.unit + 1 } : row);});
    });
  };

  const additionalColumns = [
    { field: "update", headerName: "", width: 80,
      renderCell: (cellValues) => {
          return (
              <Button variant="contained" color="info">
                  <Link style={{textDecoration: "none", color:'inherit'}} to={`/update-request/${cellValues.row._id}`}>
                    Update
                  </Link>
              </Button>
          );
      }
    },
    { field: "delete", headerName: "", width: 80,
      renderCell: (cellValues) => {
          return (
              <Button variant="contained" color="error" onClick={() => {deleteBloodRequest(cellValues.row._id)}}>
                Delete
              </Button>
          );
      }
    },
    { field: "increase", headerName: "", width: 120,
      renderCell: (cellValues) => {
          return (
              <Button variant="contained" color="success" onClick={() => {increaseUnit(cellValues.row._id)}}>
                Increase Unit
              </Button>
          );
      }
    }, 
    { field: "decrease", headerName: "", width: 120,
      renderCell: (cellValues) => {
          return (
              <Button variant="contained" color="warning" onClick={() => {decreaseUnit(cellValues.row._id)}}>
                Decrease Unit
              </Button>
          );
      }
    },  
  ]

  return (
      <Box>
          <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
              <Typography fontWeight="bold" fontSize="32px" color="primary">
                  MY BLOOD REQUESTS
              </Typography>
          </Box>
          <Box width={isNonMobileScreens ? "76%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
              <Box sx={{height:400, width:'100%'}}>
                  <BaseBloodRequests data={data} setData={pull_data} dataUrl={"/api/user/blood_requests"} headers={headers} additionalColumns={additionalColumns}/>
              </Box>
          </Box>
      </Box>
  );
};

export default MyRequests;