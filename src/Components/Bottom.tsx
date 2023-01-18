import React from 'react';
import Box from "@mui/material/Box";
import {dFlex} from "../themes/commonThemes";
import {Card, CardContent, Typography} from "@mui/material";

export const Bottom = () => {
    return (
        <Box sx={{
            ...dFlex,
            minHeight: 331,
            backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center'
        }}>
            <Card elevation={6} sx={{
                backgroundColor: 'primary.main',
                minWidth: 275,
                maxHeight: 300,
                mt: 2,
                ml: 2,
                mr: 2,
                color: 'white'
            }}>
                <CardContent>
                    <Typography variant={'h6'} sx={{fontWeight: 'bold'}}> Découvrir FaceBouffe</Typography>
                    <Typography sx={{mt: 2}}>A Propos</Typography>
                    <Typography>Nous rejoindre </Typography>
                    <Typography>Espace Press</Typography>
                    <Typography>Inscription restaurant</Typography>
                </CardContent>
            </Card>
            <Card elevation={6} sx={{
                backgroundColor: 'primary.main',
                minWidth: 275,
                maxHeight: 300,
                mt: 2,
                ml: 2,
                mr: 2,
                color: 'white'
            }}>
                <CardContent>
                    <Typography variant={'h6'} sx={{fontWeight: 'bold'}}> Mentions légales</Typography>
                    <Typography> Mentions légales </Typography>
                    <Typography>Confidentialité</Typography>
                    <Typography>Cookies</Typography>
                    <Typography>Speak Up</Typography>
                </CardContent>
            </Card>
            <Card elevation={6} sx={{
                backgroundColor: 'primary.main',
                minWidth: 275,
                maxHeight: 300,
                mt: 2,
                ml: 2,
                mr: 2,
                color: 'white'
            }}>
                <CardContent>
                    <Typography variant={'h6'} sx={{fontWeight: 'bold'}}> Aide</Typography>
                    <Typography>Nous contacter</Typography>
                    <Typography>FAQ</Typography>
                    <Typography>Types de cuisine</Typography>
                </CardContent>
            </Card>
            <Card elevation={6} sx={{
                backgroundColor: 'primary.main',
                minWidth: 275,
                maxHeight: 300,
                mt: 2,
                ml: 2,
                mr: 2,
                color: 'white'
            }}>
                <CardContent>
                    <Typography variant={'h6'} sx={{fontWeight: 'bold'}}> Gardez FaceBouffe dans votre
                        poche</Typography>
                    <Box sx={{display:'flex', flexDirection:'column',m:5}}>
                        <Box sx={{borderRadius: 3, width: 210,mb:5}} component={"img"} src={'./apple.png'}></Box>
                        <Box sx={{borderRadius: 3, width: 210}} component={"img"} src={'./googleplay.png'}></Box>
                    </Box>
                </CardContent>
            </Card>


        </Box>
    )
}