import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Axios from "axios";
import fileDownload from 'js-file-download';
import * as Components from './Components';
import Header from "./Header";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { fontSize } from '@mui/system';
import { FidgetSpinner } from 'react-loader-spinner';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const mystyle = {

    fontFamily: "Arial",
    fontSize: "30px"
};

const names = [
    'name', 'dob', 'city', 'province', 'gender', 'email', 'phone',
    'heart_rate', 'blood_pressure', 'respiration_rate', 'oxygen_saturation', 'temperature',
    'diagnose', 'medicine', 'treatment',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Paramedics = () => {
    const [ssn, setssn] = useState("")
    const [id, setid] = useState("")
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [data, setdata] = React.useState();
    const [value, setvalue] = React.useState(false);
    const url = "http://127.0.0.1:8000/pm/requestMOHForData/?ssn="
    function handleChange(event) {
        const {
            target: { value },
        } = event;
        var url_t = url;
        url_t += ssn;
        for (var i = 0; i < value.length; i++) {
            url_t += "&attributes=" + value[i];
        }
        Axios({
            url: url_t,
            method: "GET"
        }).then(res => {
            let example = {}
            for (var i = 0; i < value.length; i++) {
                if(res.data[value[i]]){
                example[value[i]]=res.data[value[i]]
                }else{
                    example[value[i]]="User doesn't allowed to share the data"
                }
            }
                console.log(example)
            setdata(example)
            setvalue(true)
        })
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

    };
    return (
        <div>
            <Header />

            <div className="col-sm-6 offset-sm-3" >

                <div>
                    <br />
                    <Components.Container >
                        <Components.Form >
                            <Components.Title>Get data based On Attributes    </Components.Title>
                            <Components.Input onChange={(e) => setssn(e.target.value)} type='text' placeholder='SSN' />
                            <br />

                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Attributes</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br />
                            {
                                value === true ? <>
                                    {
                                        personName.map(val => (
                                            <>
                                                <Form.Label style={mystyle}>{val}:{data[val] ? data[val] : <>
                                                    <>
                                                        <FidgetSpinner 
                                                          visible={true}
                                                          height="80"
                                                          width="80"
                                                          ariaLabel="dna-loading"
                                                          wrapperStyle={{}}
                                                          wrapperClass="dna-wrapper"
                                                          ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                                          backgroundColor="#F4442E"
                                                        />
                                                    </>

                                                </>}</Form.Label>
                                            </>
                                        ))
                                    }
                                </>
                                    : <>
                                    </>
                            }
                        </Components.Form>
                    </Components.Container>

                </div>
            </div>
        </div>);
};

export default Paramedics;