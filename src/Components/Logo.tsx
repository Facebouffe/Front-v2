import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {displayOnDesktop, flexCenter} from "../themes/commonThemes";
import {common} from "@mui/material/colors";

export const Logo = (
) => {
    return (
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
        }}>
            <Typography sx={{
                ml: 1,
                color: common["black"],
                fontSize: '20px',
                fontWeight: 'bold',
                ...displayOnDesktop
            }} component={"h3"}>
                FACEBOUFFE
            </Typography>
        </Box>
    )
}