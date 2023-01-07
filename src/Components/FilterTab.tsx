import React from "react";
import Tabs, { tabsClasses} from "@mui/material/Tabs";
import Tab from '@mui/material/Tab';
import Container from "@mui/material/Container";
import {filterData} from "../data/filter-data";
import Box from "@mui/material/Box";

export const FilterTab = () => {
    const [value, setValue] = React.useState(0);

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
                    filterData.map(tab => {
                        return <Tab key={ tab.id} icon={ tab.icon} label={tab.label}/>;
                    })
                }
            </Tabs>
        </Box>
    </Container>
  )
}
