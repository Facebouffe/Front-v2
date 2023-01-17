import React from 'react';
import Box from "@mui/material/Box";
import {dFlex} from "../themes/commonThemes";
import {Card, CardContent} from "@mui/material";


export const Bottom = () => {
    return (
        <Box sx={{
            ...dFlex,
            minHeight: 411,
            backgroundColor: 'primary.main',display:'flex',justifyContent:'center'
        }}>
            <Card sx={{background: 'red', minWidth: 275,maxHeight:380,mt:2,ml :2,mr:2}}>
                <CardContent>
                    hola
                </CardContent>
            </Card>
            <Card sx={{background: 'red', minWidth: 275,maxHeight:380,mt:2,ml :2,mr:2}}>
                <CardContent>
                    hola
                </CardContent>
            </Card>
            <Card sx={{background: 'red', minWidth: 275,maxHeight:380,mt:2,ml :2,mr:2}}>
                <CardContent>
                    hola
                </CardContent>
            </Card>
            <Card sx={{background: 'red', minWidth: 275,maxHeight:380,mt:2,ml :2,mr:2}}>
                <CardContent>
                    hola
                </CardContent>
            </Card>


        </Box>
    )
}