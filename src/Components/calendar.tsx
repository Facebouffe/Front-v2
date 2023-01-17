import React, {useState} from 'react';
import {frFR, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Grid, TextField, Typography} from "@mui/material";
import 'dayjs/locale/fr';


const Calendar = () => {
    const [value, setValue] = useState<number | null>(null);

    return (

        <Grid sx={{display: 'flex', justifyContent: 'flex-end', mt: 5, mr: 5}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="fr"
                                  localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText}
            >
                <Typography variant={'h6'} sx={{mr: 4, ml: 2}}> Filtrer par date </Typography>
                <DatePicker
                    views={['year', 'month']}
                    label="Anneé"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                {/*<FilterDate/>*/}
            </LocalizationProvider>
        </Grid>


    );
};

export default Calendar;