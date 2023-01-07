import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Box from "@mui/material/Box";
import {Logo} from "./Logo";
import {dFlex,  flexBetweenCenter} from '../themes/commonThemes';
import {Container} from "@mui/material";
import {MenuPages} from "./MenuPages";

export const Header = () => {
    return (
        <Box sx={{
            ...dFlex,
            minHeight: 70,
            borderBottom: '1px solid black',
            backgroundColor: 'primary.main',
        }}>
            <Container maxWidth={"xl"}>
                <Box sx={{
                    ...flexBetweenCenter,
                    minHeight: 70,
                    px: 4,
                }}>
                    <Logo/>
                    <MenuPages/>
                </Box>
            </Container>
        </Box>
    )
};