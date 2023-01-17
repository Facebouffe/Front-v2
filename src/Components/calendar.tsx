import React, {useEffect, useState} from 'react';
// import {frFR, LocalizationProvider} from "@mui/x-date-pickers";
// import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
// import {DatePicker} from "@mui/x-date-pickers/DatePicker";
// import {Grid, TextField, Typography} from "@mui/material";
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
// import { DateR } from '@mui/x-date-pickers/';
import {ConfigProvider, DatePicker} from 'antd/lib';
import 'antd/dist/reset.css';
import 'dayjs/locale/fr';
import {frFR, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import moment from 'moment';
import {Box} from "@mui/material";

const {RangePicker} = DatePicker;
moment.locale('fr');


const Calendar = () => {
    const [dates, setDates] = useState<any>([])
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        fetch('../data/commandes.json')
            .then(response => response.json())
            .then(jsonData => {
                setCommandes(jsonData);
                setDates([moment(jsonData[0].date).format('AAAA-J-MM')])

            });
    }, []);

    // @ts-ignore
    return (
        <Grid sx={{display: 'flex', justifyContent: 'flex-end', mt: 5, mr: 5}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr"
                                  localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText}
            >

            </LocalizationProvider>
            <Typography variant={'h6'} sx={{mr: 4, ml: 2}}> Filtrer par date </Typography>
            <ConfigProvider>
                < RangePicker
                    onChange={(values) => {
                        // @ts-ignore
                        setDates([moment(values[0]).format('AAAA-J-MM'), moment(values[1]).format('AAAA-J-MM')]);
                    }}

                />
                {/*<Box>Dates sélectionnées: {dates.join(' - ')}</Box>*/}
            </ConfigProvider>
        </Grid>)

    // const [value, setValue] = useState<number | null>(null);
    //
    // return (
    //
    //     <Grid sx={{display: 'flex', justifyContent: 'flex-end', mt: 5, mr: 5}}>
    //         <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr"
    //                               localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText}
    //         >
    //             <Typography variant={'h6'} sx={{mr: 4, ml: 2}}> Filtrer par date </Typography>
    //             <DatePicker
    //                 views={['year', 'month']}
    //                 label="Anneé"
    //                 value={value}
    //                 onChange={(newValue) => {
    //                     setValue(newValue);
    //                 }}
    //                 renderInput={(params) => <TextField {...params} />}
    //             />
    //             {/*<FilterDate/>*/}
    //         </LocalizationProvider>
    //     </Grid>
    //
    //
    // );
};

export default Calendar;