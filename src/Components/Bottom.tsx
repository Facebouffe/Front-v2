import React from 'react';
import Box from "@mui/material/Box";
import {dFlex} from "../themes/commonThemes";
import {Card, CardContent, Typography} from "@mui/material";
import {useRouter} from "next/router";

export const Bottom = () => {
    const router = useRouter()

    return (
        <Box sx={{
            ...dFlex,
            minHeight: {xs: 830, md: 331},
            backgroundColor: 'primary.main',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}
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
                    <Typography onClick={() => router.push('/mentionlegale')} sx={{mt: 2, cursor: 'pointer'}}> Mentions
                        légales </Typography>
                    <Typography>Confidentialité</Typography>
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
                    <Typography onClick={() => router.push('/contact')} sx={{mt:2, cursor: 'pointer'}}>Nous
                        contacter</Typography>
                    <Typography onClick={() => router.push('/faq')} sx={{cursor: 'pointer'}}>FAQ</Typography>
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
                    <Box sx={{display: 'flex', flexDirection: 'column', m: 5}}>
                        <Box sx={{borderRadius: 3, width: 210, mb: 5, cursor: 'pointer'}} component={"img"}
                             src={'./apple.png'}></Box>
                        <Box sx={{borderRadius: 3, width: 210, cursor: 'pointer'}} component={"img"}
                             src={'./googleplay.png'}></Box>
                    </Box>
                </CardContent>
            </Card>


        </Box>
    )
}