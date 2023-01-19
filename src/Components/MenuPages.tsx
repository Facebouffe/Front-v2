import React from "react";
import {Divider, Stack} from "@mui/material";
import {common} from "@mui/material/colors";
import Router from "next/router"
import  { Home } from '@mui/icons-material'
import IconButton from "@mui/material/IconButton";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function handleClick() {
    Router.push('/commandes').then(r=>true);
}

export const MenuPages = (
) => {
    return (
        <Stack
        direction={"row"}
        divider={<Divider orientation={"vertical"} flexItem sx={{
            backgroundColor: common["white"],
        }}/>}
        spacing={{xs: 1, sm:2}}
        sx={{
        }}
        >
            <IconButton aria-label={"home"} href={"/"}>
                <Home fontSize={"large"}/>
            </IconButton>
            <IconButton onClick={handleClick} aria-label={"orders"}>
                <RestaurantMenuIcon fontSize={"large"}/>
            </IconButton>
        </Stack>
    );
}