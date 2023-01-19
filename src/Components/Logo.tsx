import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {displayOnDesktop, flexCenter} from "../themes/commonThemes";
import {common} from "@mui/material/colors";
import Image from "next/image";

export const Logo = (
) => {
    return (
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
        }}>
            <Image src={"/logo-facebouffe.png"}
                   alt={"FaceBouffe"}
                   width={60}
                   height={50}
            />
            <Typography sx={{
                ml: 1,
                color: common["white"],
                fontSize: '20px',
                fontWeight: 'bold',
                ...displayOnDesktop
            }} component={"h3"}>
                FACEBOUFFE
            </Typography>
        </Box>
    )
}