import React from "react";
import Box from "@mui/material/Box";
import {Restaurants} from "../data/filter-data";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ButtonGroup, Paper} from "@mui/material";
import Router, {useRouter} from "next/router";

import Comment from "../../pages/comment";



export const RestaurantCard = () => {
    const router = useRouter()
    function handleClickMenu(id: any) {
        Router.push(`/Restaurants/${id}`).then(r => true)
    }
    function handleClickComment(id: any) {
        Router.push(`/Comments/${id}`).then(r => true)
    }
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

                        <Grid item key={restaurant.id} >
                            <Paper elevation={5} sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Box component={"img"} sx={{
                                    height: 230,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                    borderRadius: 3,
                                }} src={restaurant.image}>
                                </Box>
                                <Box>
                                    <Typography>
                                        {restaurant.name}
                                    </Typography>
                                </Box>
                                <Typography>
                                    {restaurant.address}
                                </Typography>
                                <Box>
                                    <ButtonGroup>
                                        <Button>J'aime</Button>
                                        <Button onClick={() => handleClickComment(restaurant.id)}>Commentaire</Button>
                                        <Button onClick={() => handleClickMenu(restaurant.id)}>Commander</Button>
                                    </ButtonGroup>
                                    </Box>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}