import React from "react";
import Tabs, { tabsClasses} from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {Restaurants} from "../data/filter-data";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";

export const FilterMenu = () => {
    const [value, setValue] = React.useState(0);

    const router = useRouter();
    const { id } = router.query;
    const selectedRestaurant = Restaurants.find(item => item.id.toString() === id)
    const menu = selectedRestaurant && selectedRestaurant.menu

    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue)
    };

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                px: {xs: 0, md:2},
                alignItems:'center',
                justifyContent: 'center',
                mt:2,
                mb:2,
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant={"scrollable"}
                    scrollButtons

                    sx={{
                        [`&.${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': {opacity: 0.3},
                        },
                    }}>
                    {
                        selectedRestaurant && selectedRestaurant.menu.map(tab => {
                            return <Tab key={tab.type} label={tab.type}/>;
                        })
                    }
                </Tabs>
            </Box>
        </Container>
    )
}
