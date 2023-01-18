import React from "react";
import {Divider, Stack} from "@mui/material";
import {IoHomeOutline, IoRestaurantOutline} from "react-icons/all";
import {common} from "@mui/material/colors";
import Button from "@mui/material/Button";

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
            <Button href={"/"}>
                <IoHomeOutline size={40} color={common["white"]}/>
            </Button>
            <Button>
                <IoRestaurantOutline size={40} color={common["white"]}/>
            </Button>
        </Stack>
    );
}