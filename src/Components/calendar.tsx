import React, {useState} from 'react';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Grid, TextField, Typography} from "@mui/material";

const Calendar = () => {
    const [value, setValue] = useState<number | null>(null);

    return (

        <Grid sx={{display: 'flex', justifyContent: 'flex-end', mt: 5, mr: 5}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography variant={'h6'} sx={{mr: 4, mt: 1}}> Filtrer par date </Typography>
                <DatePicker
                    views={['year']}
                    label="Anneé"
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