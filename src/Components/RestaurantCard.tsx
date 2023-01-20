import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ButtonGroup, Paper} from "@mui/material";
import Router from "next/router";

function handleClickMenu(id: any) {
    Router.push(`/Restaurants/${id}`).then(r => true)
}


export const RestaurantCard = (props: { isOpen: any; setOpen: any; }) => {
    const {isOpen, setOpen} = props;

    /*const dispatch = useAppDispatch();
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
    */
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
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                {
                    isOpen && isOpen.map((restaurant: { id: string; label: string, address: string, picture: string }) => {
                        return (

                            <Grid item key={restaurant.id}>
                                <Paper elevation={5} sx={{
                                    padding: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    {restaurant.picture && <Box component={"img"} sx={{
                                    height: 230,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                    borderRadius: 3,
                                }} src={restaurant.picture}>
                                </Box>}
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