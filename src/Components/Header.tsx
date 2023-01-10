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
                    //...flexBetweenCenter,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: "space-between",
                    minHeight: 70,
                    //px: 4,
                }}>
                    <Box sx={{//...displayOnDesktop,
                        flex: 1,
                        justifyContent: "flex-start"
                    }}>
                        <Logo/>
                    </Box>
                    <Box sx={{
                        flex: 1,
                        justifyContent: "center",
                        display: "flex",
                    }}>
                        <MenuPages/>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        flex: 1
                    }}>
                        <ProfileMenu/>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};