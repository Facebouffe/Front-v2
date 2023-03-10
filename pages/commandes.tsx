import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import {Header} from "../src/Components/Header";
import CommandeEnCours from "../src/Components/CommandeEnCours";
import AnciennesCommandes from "../src/Components/AnciennesCommandes";


const Commandes = () => {


    return (
        <Box>
            <Header/>
            <Typography sx={{fontSize: {xs: 40, md: 70}, ml: 5}} variant={'h2'}>En cours</Typography>
            <CommandeEnCours/>
            <Divider sx={{fontWeight: 'bold'}} variant={'middle'} orientation="horizontal" flexItem/>
            <Typography sx={{fontSize: {xs: 40, md: 70}, ml: 5}} variant={'h2'}>Anciennes commandes</Typography>
            <AnciennesCommandes/>
        </Box>
    );
};

export default Commandes;