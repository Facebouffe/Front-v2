import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {IoPersonOutline} from "react-icons/io5";
import {common} from "@mui/material/colors";
import {flexCenter} from "../themes/commonThemes";

export const ProfileMenu = () => {
  return (
      <Box sx={{
          flexCenter
      }}>
          <Button>
              <IoPersonOutline size={40} color={common["white"]}/>
          </Button>
      </Box>
  )
}