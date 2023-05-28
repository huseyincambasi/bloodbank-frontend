import { useState } from "react";
import { Link } from 'react-router-dom';
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import DonateDialog from "components/DonateDialog";
import BloodRequests from "components/BloodRequests";

const ViewRequests = () => {
    const [selectedRow, setSelectedRow] = useState([]);
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const [data, setData] = useState([]);

    const pull_data = (data) => {
        setData(data);
    }

    const additionalColumns = [
        { field : "donate_blood", headerName: "", width: 150,
        renderCell: (cellValues) => {
          return (
            <Button variant="contained" color="info" onClick={() => setSelectedRow(cellValues.row._id)}>                    
                Donate Blood
            </Button>
          );
        }
      },
      { field: "Route", headerName: "", width: 150,
        renderCell: (cellValues) => {
            return (
                <Button variant="contained" color="warning">
                    <Link style={{textDecoration: "none", color:'inherit'}} to={`/view-request/${cellValues.row._id}`}>
                        View Details
                    </Link>
                </Button>
            );
        }
      }, 
    ]

    return (
        <Box>
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    BLOOD REQUESTS
                </Typography>
            </Box>
            <Box width={isNonMobileScreens ? "70%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
                <Box sx={{height:400, width:'100%'}}>
                    <BloodRequests data={data} setData={pull_data} dataUrl={"/api/blood_requests"} header={null} additionalColumns={additionalColumns}/>
                    <DonateDialog selectedRow={selectedRow}/>
                </Box>
            </Box>
        </Box>
    );
};

export default ViewRequests;