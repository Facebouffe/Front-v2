import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import {Restaurants} from "../data/filter-data";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ButtonGroup, Paper} from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllRestaurants, selectRestaurant} from "../../slices/restaurantSlice";

function handleClickMenu(id: any) {
    Router.push(`/Restaurants/${id}`).then(r => true)
}


export const RestaurantCard = () => {

    const dispatch = useAppDispatch();
    const {
        data,
        pending,
        error,
    } = useAppSelector(selectRestaurant);

    useEffect(() => {
            dispatch(getAllRestaurants())
        }, [dispatch]
    )

    if (error) return <div>Failed to load user</div>
    if (pending) return <div>Loading</div>
    if (!data) return null

    /*const [cards] = React.useState(Restaurants);
    if (!cards.length) {
        return null
    }*/

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
                    data.map(restaurant => {
                    return (

                        <Grid item key={restaurant.id} >
                            <Paper elevation={5} sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                {/*<Box component={"img"} sx={{
                                    height: 230,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                    borderRadius: 3,
                                }} src={restaurant.image}>
                                </Box>*/}
                                <Box>
                                    <Typography>
                                        {restaurant.label}
                                    </Typography>
                                </Box>
                                <Typography>
                                    {restaurant.address}
                                </Typography>
                                <Box>
                                    <ButtonGroup>
                                        <Button>J'aime</Button>
                                        <Button>Commentaires</Button>
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