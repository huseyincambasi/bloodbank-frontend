import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    useTheme,
    Stepper, Step, StepLabel, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from '@mui/material'
import axios from "axios";
import { URL } from "App";

const DonateDialog = (props) => {
    const theme = useTheme();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [dialogInputs, setDialogInputs] = useState({
        _id: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    const access_token = useSelector((state) => state.access_token);
    const isAuth = Boolean(access_token);
    const user = useSelector((state) => state.user);

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (dialogOpen && isAuth) {
            setDialogInputs((prevState) =>  ({
                ...prevState,
                ["firstName"] : user.firstName,
                ["lastName"] : user.lastName,
                ["address"] : `${user.city} - ${user.district}`,
                ["phoneNumber"] : user.phoneNumber,
                ["email"] : user.email,
            }));
        }
    }, [dialogOpen, isAuth])

    useEffect(() => {
        if (props.selectedRow) {
            setDialogOpen(true);
            setDialogInputs((prevState) =>  ({
                ...prevState,
                ["_id"] : props.selectedRow
            }));
        }
    }, [props.selectedRow]);

    useEffect(() => {
        async function fetchQuestions() {
            await axios.get(
                `${URL}/api/blood_request/${props.selectedRow}/questions/`,
                {headers: {Authorization: 'Bearer ' + access_token}}
            ).then(
                (response)=> {
                    const data = response.data;
                    setQuestions(data);

                    let answer_array = [];
                    for (let i = 0; i < data.length; i++) {
                        answer_array[i] = ({["answer_" + i]: ""});
                    }
                    setAnswers(answer_array);
                }
            )
        };
        if (dialogOpen) {
            fetchQuestions();
        }
    }, [dialogOpen]);

    const closeDialog = () => {
        setDialogOpen(false);
        props.selectedRowChanged(null);
        setDialogInputs({
            _id: "",
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            email: "",    
        });
        setActiveStep(0);
        setAnswers([]);
    };

    const handleNext = () => {
        if (activeStep === 1) {
            sendEmail();
        }
        else {
            axios.post(
                `${URL}/api/blood_request/${props.selectedRow}/validate`, {answers},
                {headers: {Authorization: 'Bearer ' + access_token}}
            ).then(
                (response)=> {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                }
            ).catch(
                (error) => {
                    if (error.response.status === 409) {
                        window.alert("You don't fit requirements.");
                        closeDialog();
                    }
                }
            )
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (e) => {
        setDialogInputs((prevState) =>  ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };

    const handleAnswer = (questionIndex, answer) => {

        const updated_answers = [
            ...answers.slice(0, questionIndex),
            {["answer_" + questionIndex]: answer.target.value},
            ...answers.slice(questionIndex + 1)
        ];
        setAnswers(updated_answers);

    };

    const sendEmail = () => {
        axios.post(`${URL}/api/blood_requests/${dialogInputs._id}/donate`, dialogInputs)
        closeDialog();
    }

    return (
        <Box sx={{height:400, width:'100%'}}>
            <Dialog open={dialogOpen} onClose={closeDialog}>
                <DialogTitle>Donate Blood</DialogTitle>
                <DialogContent>
                    <Stepper activeStep={activeStep}>
                        <Step>
                            <StepLabel>Questionnaire</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Input Form</StepLabel>
                        </Step>
                    </Stepper>
                    <div>
                        {activeStep === 0 ? (
                            <div>
                                <Typography variant="h6">Pick Yes or No</Typography>
                                {questions.map((question, index) => (
                                    <div key={index}>
                                        <FormControl>
                                            <FormLabel
                                                id="validation_questions">{`Question ${index + 1}: ${question["question_" + index]}`}</FormLabel>
                                            <
                                                RadioGroup
                                                name="controlled-radio-buttons-group"
                                                value={answers["answer_" + index]}
                                                onChange={(event) => handleAnswer(index, event)}
                                            >
                                                <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                                                <FormControlLabel value="no" control={<Radio/>} label="No"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <Typography variant="h6">Input Form</Typography>
                                <TextField
                                    disabled={isAuth}
                                    required
                                    margin="dense"
                                    name="firstName"
                                    value={dialogInputs.firstName}
                                    onChange={handleChange}
                                    label="First Name"
                                    variant="standard"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    disabled={isAuth}
                                    required
                                    margin="dense"
                                    name="lastName"
                                    value={dialogInputs.lastName}
                                    onChange={handleChange}
                                    label="Last Name"
                                    variant="standard"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    disabled={isAuth}
                                    required
                                    margin="dense"
                                    name="address"
                                    value={dialogInputs.address}
                                    onChange={handleChange}
                                    label="Address"
                                    variant="standard"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    disabled={isAuth}
                                    required
                                    margin="dense"
                                    name="phoneNumber"
                                    value={dialogInputs.phoneNumber}
                                    onChange={handleChange}
                                    label="Phone Number"
                                    variant="standard"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    disabled={isAuth}
                                    required
                                    margin="dense"
                                    name="email"
                                    value={dialogInputs.email}
                                    onChange={handleChange}
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    fullWidth
                                    sx={{ mb: 3 }}
                                />
                            </div>
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} sx={{m: "2rem 0", p: "1rem", backgroundColor: theme.palette.primary.main, color: theme.palette.background.alt, "&:hover": { color: theme.palette.primary.main }}}>
                        Cancel
                    </Button>
                    <Button disabled={activeStep === 0} onClick={handleBack} sx={{m: "2rem 0", p: "1rem", backgroundColor: theme.palette.primary.main, color: theme.palette.background.alt, "&:hover": { color: theme.palette.primary.main }}}>
                        Back
                    </Button>
                    <Button onClick={handleNext} sx={{m: "2rem 0", p: "1rem", backgroundColor: theme.palette.primary.main, color: theme.palette.background.alt, "&:hover": { color: theme.palette.primary.main }}}>
                        {activeStep === 1 ? 'Finish' : 'Next'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default DonateDialog;