import React from 'react';
import Box from "@mui/material/Box";
import {Logo} from "./Logo";
import {dFlex, displayOnDesktop, flexBetweenCenter} from '../themes/commonThemes';
import {Container} from "@mui/material";
import {MenuPages} from "./MenuPages";
import {ProfileMenu} from "./ProfileMenu";

export const Header = () => {
    return (
        <Box sx={{
            ...dFlex,
            minHeight: 70,
            backgroundColor: 'primary.main',
        }}>
            <Container maxWidth={"xl"}>
                <Box sx={{
                    ...flexBetweenCenter,
                    minHeight: 70,
                    px: 4,
                }}>
                    <Box sx={displayOnDesktop}>
                        <Logo/>
                    </Box>
                    <MenuPages/>
                    <ProfileMenu/>
                </Box>
            </Container>
        </Box>
    )
};