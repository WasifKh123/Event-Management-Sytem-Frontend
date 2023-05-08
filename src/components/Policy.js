import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Axios from "axios";
import fileDownload from 'js-file-download';
import * as Components from './Components';
import Header from "./Header";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import React from 'react'
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Policy() {
    const [policy, setpolicy] = useState(
        {
            "ssn": 5432848471101054,
            "attributes": [
                {
                    "entity": "name",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "dob",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "city",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "province",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "gender",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "email",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "phone",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "heart_rate",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "blood_pressure",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "respiration_rate",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "oxygen_saturation",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "temperature",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "diagnose",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "medicine",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                },
                {
                    "entity": "treatment",
                    "sharing": "yes",
                    "duration": "10",
                    "sharing_entities": {
                        "moh": "yes",
                        "paramedics": "yes"
                    }
                }
            ]
        }
    )

    const Names = [
        "Name","Dob","City","Province", "Gender", "Email", "Phone", "Heart Rate", "Blood Pressure", "Respiration Rate", "Oxygen Saturation", "Temperature", "Diagnose", "Medicine", "Treatment",
    ]
    const setSSN = (evt) => {
        let data = policy
        data["ssn"] = Number(evt.target.value)
        // console.log(data["SSN"])
        console.log(data)
        setpolicy(data)
    }
    const setName = (evt, index) => {
        let data = policy
        data["attributes"][index]["sharing"] = evt.target.value
        console.log(data["attributes"][index]["sharing"])
        console.log()
        setpolicy(data)
    }
    const setNameDuration = (evt, index) => {
        let data = policy
        data["attributes"][index]["duration"] = evt.target.value
        console.log(data["attributes"][index]["duration"])
        console.log()
        setpolicy(data)
    }


    const setNameMoh = (evt, index) => {
        let data = policy
        data["attributes"][index]["sharing_entities"]["moh"] = evt.target.value
        console.log(data["attributes"][index]["sharing"])
        console.log()
        setpolicy(data)
    }

    const setNameParamedics = (evt, index) => {
        let data = policy
        data["attributes"][index]["sharing_entities"]["paramedics"] = evt.target.value
        console.log(data["attributes"][index]["sharing_entities"]["paramedics"])
        console.log()
        setpolicy(data)
    }
    async function onSubmit(){
        // console.log("hello")
        Axios({
            url:"http://127.0.0.1:8000/datadetails/personal/policies/",
            method:"POST",
            data:policy,
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then((Response)=>{
            console.log(Response+"sdasdasdas")
            toast.success(`Policy Updated (${policy["ssn"]})`,{
                autoClose:2000
            });
        })
        .catch(e=>{
            console.log(e)
            toast.error(e,{
                autoClose:2000
            });

        })
    }

    return (
        <div>
            <Header />
            <br />
            <div className="col-sm-6 offset-sm-3" >
                <Components.Container >
                    <Components.Form >
                        <Components.Title>Define Policies For Users</Components.Title>
                        <div className="row">
                            <div className='col-10'>
                                <Components.Input type='number' placeholder='5432848471101054' onChange={setSSN} />
                            </div>
                            <div className='col-2'>
                                <Button variant="outlined" onClick={onSubmit} size="small" style={{ position: "relative", right: "10px", top: "14px" }}>
                                    UPDATE
                                </Button>
                            </div>
                        </div>
                        <br />
                        {Names.map((value, index) => (<>

                            <Components.InnerContainer key={index}>
                                <div className='container'>
                                    <div className="row" >
                                        <div className="col-12">
                                            <FormLabel id="demo-row-radio-buttons-group-label" >{value}</FormLabel>
                                        </div>
                                        <br />
                                        <br />

                                        <div className="col-6">
                                            {/* hello */}
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className="col-12">
                                                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ position: "relative", right: "56px" }}>Sharing</FormLabel>
                                                    </div>
                                                    <div className="col-12">
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group"
                                                            onChange={(e) => setName(e, index)}
                                                        >
                                                            <FormControlLabel value="Yes" control={<Radio size='small' />} label="Yes" />
                                                            <FormControlLabel value="No" control={<Radio size='small' />} label="No" />
                                                        </RadioGroup>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6" style={{ position: "relative" }}>
                                            <TextField id="outlined-basic" label="Duration" variant="outlined" type='number' onChange={(evt) => setNameDuration(evt, index)} />
                                        </div>
                                        <br />
                                        <br />
                                        <br />

                                        <div className="col-12">
                                            <FormLabel id="demo-row-radio-buttons-group-label" >Sharing Entities</FormLabel>
                                        </div>
                                        <div className="col-6">
                                            {/* hello */}
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className="col-12">
                                                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ position: "relative", right: "61px" }}>Ministry Of Health</FormLabel>
                                                    </div>
                                                    <div className="col-12">
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group"
                                                            id="hello"
                                                            onChange={(evt) => setNameMoh(evt, index)}
                                                        >
                                                            <FormControlLabel value="Yes" control={<Radio size='small' />} label="Yes" id="1" />
                                                            <FormControlLabel value="No" control={<Radio size='small' />} label="No" />
                                                        </RadioGroup>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            {/* hello */}
                                            <div className='container'>
                                                <div className='row' style={{ position: "relative", left: "56px" }}>
                                                    <div className="col-12">
                                                        <FormLabel id="demo-row-radio-buttons-group-label" style={{ position: "relative", right: "56px" }}>Paramedics</FormLabel>
                                                    </div>
                                                    <div className="col-12" >
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group"
                                                            onChange={(evt) => setNameParamedics(evt, index)}
                                                        >
                                                            <FormControlLabel value="Yes" control={<Radio size='small' />} label="Yes" />
                                                            <FormControlLabel value="No" control={<Radio size='small' />} label="No" />
                                                        </RadioGroup>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </Components.InnerContainer>
                            <br />
                            <br />
                        </>))}

                        <br />
                        <br />
                    </Components.Form>

                </Components.Container>
            </div>
            <ToastContainer />
        </div>
    )
}
