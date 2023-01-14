import React from 'react';
import {Box, Paper, styled, Typography} from "@mui/material";
import {Header} from "../src/Components/Header";
import CommandeEnCours from "../src/Components/CommandeEnCours";
import AnciennesCommandes from "../src/Components/AnciennesCommandes";
import {fontFamily} from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const Commandes = () => {
    return (
        <Box>
            <Header/>
            <Typography sx={{fontSize: {xs: 40, md: 70}}} variant={'h2'}>En cours</Typography>
            <CommandeEnCours/>
            <Typography sx={{fontSize: {xs: 40, md: 70}}} variant={'h2'}>Anciennes commandes</Typography>
            <AnciennesCommandes/>

        </Box>
    );
};

export default Commandes;