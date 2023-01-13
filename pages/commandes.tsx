import React from 'react';
import {Box, Paper, styled, Typography} from "@mui/material";
import {Header} from "../src/Components/Header";

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
            <Typography variant={'h2'}>En cours</Typography>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Typography variant={'h2'}>Anciennes commandes</Typography>
        </Box>
    );
};

export default Commandes;