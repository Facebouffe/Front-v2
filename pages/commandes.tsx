import React from 'react';
import {Box, Paper, styled, Typography} from "@mui/material";
import {Header} from "../src/Components/Header";
import CommandeEnCours from "../src/Components/CommandeEnCours";
import AnciennesCommandes from "../src/Components/AnciennesCommandes";

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
            <Typography sx={{ml:4}} variant={'h2'}>En cours</Typography>
            <CommandeEnCours/>
            <Typography sx={{ml:4}} variant={'h2'}>Anciennes commandes</Typography>
            <AnciennesCommandes/>

        </Box>
    );
};

export default Commandes;