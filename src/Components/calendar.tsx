import React from 'react';
import {Box} from "@mui/system";
import {Dayjs} from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Grid, TextField} from "@mui/material";

const Calendar = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    return (

        <Grid sx={{display:'flex',justifyContent:'flex-end',mt:5,mr:5}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>


    );
};

export default Calendar;