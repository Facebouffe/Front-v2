import React from "react";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {Restaurants} from "../data/filter-data"
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";

export const MenuRestaurant = ( ) => {
    const router = useRouter();
    const { id } = router.query;

    const selectedRestaurant = Restaurants.find(item => item.id.toString() === id)
    const menu = selectedRestaurant && selectedRestaurant.menu

    if (selectedRestaurant === undefined || menu === undefined) {
        return null
    }

    return (
        <Box>
            <Grid container rowSpacing={3} columnSpacing={3}
                  sx={{
                      display: 'flex',
                      alignItems:'center',
                      justifyContent: 'center',
                      px: 2
                  }}>
                {
                    menu.map((item, index) => (
                        <Grid key={index} item md={6} xs={12} >
                            <Paper elevation={5} sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                width: "100%",
                                justifyContent: "space-between"
                            }}>
                                <Box>
                                    <Typography color={"primary"}>
                                        {item.plat}
                                    </Typography>
                                    <Typography>
                                        {item.prix} €
                                    </Typography>
                                    <Typography>
                                        {item.description}
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}