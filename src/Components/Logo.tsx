import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {flexCenter} from "../themes/commonThemes";
import {SvgIcon, SvgIconProps} from "@mui/material";
import {CiFacebook} from "react-icons/Ci";
import {common} from "@mui/material/colors";

export const Logo = (
) => {
    return (
        <Box sx={flexCenter}>
            <CiFacebook size={40} color={common["white"]}/>
            <Typography sx={{
                ml: 1,
                color: common["white"],
                fontSize: '20px',
                fontWeight: 'bold'
            }} component={"h3"}>
                FACEBOUFFE
            </Typography>
        </Box>
    )
}