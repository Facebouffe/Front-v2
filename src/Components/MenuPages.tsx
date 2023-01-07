import React from "react";
import {Divider, Paper, Stack} from "@mui/material";
import {IoHomeOutline, IoRestaurantOutline} from "react-icons/io5";
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
        >
            <Button>
                <IoHomeOutline size={30} color={common["white"]}/>
            </Button>
            <Button>
                <IoRestaurantOutline size={30} color={common["white"]}/>
            </Button>
        </Stack>
    );
}