import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import React from "react";


export const InfoRestaurant = (selectedRestaurant: { image: string ; name: string; address: string; rating: number; }) => {

    return (
        <Box>
            <Box sx={{
                display: "flex",
                flexDirection: {xs: "column", md:"row"},
                mt: 2,
                ml: 2,
                mr: 2,
                pt: 2,
                pb: 2,
                px: 2,
                width: "auto",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Box sx={{
                    justifyContent: "center"
                }} >
                    <Box component={"img"} sx={{
                        height: 230,
                        display: 'block',
                        overflow: 'hidden',
                        borderRadius: 3,
                    }} src={selectedRestaurant.image}>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    px: {xs: 0, md:2},
                    flexDirection: "column",
                }}>
                    <Typography component={"h1"} fontSize={46} color={"primary"} >
                        {selectedRestaurant.name}
                    </Typography>
                    <Typography>
                        {selectedRestaurant.address}
                    </Typography>
                    <Box sx={{
                        display:"flex",
                        alignItems: "center"
                    }}>
                        <Rating name={"Rating restaurant"}  value={selectedRestaurant.rating} precision={0.5} size={"large"} readOnly/>
                        <Typography>
                            {Math.round(selectedRestaurant.rating * 100)/100}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
