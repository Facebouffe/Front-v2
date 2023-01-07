import React from "react";
import Box from "@mui/material/Box";
import {Restaurants} from "../data/filter-data";
import Grid from "@mui/material/Grid";

export const RestaurantCard = () => {
    const [cards] = React.useState(Restaurants);
    if (!cards.length) {
        return null
    }
    return (
        <Box sx={{
            mx: 2,
        }}>
            <Grid container rowSpacing={3} columnSpacing={3}
            sx={{
                display: 'flex',
                alignItems:'center',
                justifyContent: 'center',
            }}>
                {
                    cards.map(restaurant => {
                    return (

                        <Grid item key={restaurant.id}>
                            <Box component={"img"} sx={{
                                height: 230,
                                display: 'block',
                                overflow: 'hidden',
                                width: 320,
                                borderRadius: 3,
                            }} src={restaurant.image}></Box>
                        </Grid>

                    )
                })}
            </Grid>
        </Box>
    )
}