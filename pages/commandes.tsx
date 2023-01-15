import React from 'react';
import {Box, Divider, Grid, TextField, Typography} from "@mui/material";
import {Header} from "../src/Components/Header";
import CommandeEnCours from "../src/Components/CommandeEnCours";
import AnciennesCommandes from "../src/Components/AnciennesCommandes";
import {Dayjs} from 'dayjs';

import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Calendar from "../src/Components/calendar";


const Commandes = () => {

    return (
        <Box>
            <Header/>
            <Calendar/>
            <Typography sx={{fontSize: {xs: 40, md: 70}, ml: 5}} variant={'h2'}>En cours</Typography>
            <CommandeEnCours/>
            <Divider sx={{fontWeight: 'bold'}} variant={'middle'} orientation="horizontal" flexItem/>
            <Typography sx={{fontSize: {xs: 40, md: 70}, ml: 5}} variant={'h2'}>Anciennes commandes</Typography>
            <AnciennesCommandes/>

        </Box>
    );
};

export default Commandes;