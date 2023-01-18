import React, {useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Paper, Typography} from "@mui/material";
import commandes from "../data/commandes.json";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const AnciennesCommandes = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', padding: 1}}>
            {commandes.map((commande, index) => {
                if (commande.etat_commande === 'livré') {
                    return (
                        <Paper
                            key={index}
                            elevation={4}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 3,
                                marginBottom: 3,
                                ml: {xs:5,md:25},
                                mr: {xs:5,md:25},
                                borderRadius: 12
                            }}>
                            <Grid key={index} sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                justifyContent: {xs: 'none', md: 'space-between'}
                            }}>
                                <Grid key={index} sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography key={index} variant={'h5'} sx={{marginBottom: 1}}>{commande.nom_restaurant}</Typography>
                                    <Box key={index} sx={{marginBottom: 1}}>Prix :  {commande.total_commande} €</Box>
                                    <Box key={index}  sx={{marginBottom: 1}}>Date :  {commande.date}</Box>
                                </Grid>
                                <Divider key={index} sx={{fontWeight: 'bold'}} variant={'middle'} orientation="vertical" flexItem/>
                                <Grid>
                                    <Accordion key={index} expanded={expanded === commande.id} onChange={handleChange(commande.id)}>
                                        <AccordionSummary key={index} expandIcon={<ExpandMoreIcon/>}
                                                          id={commande.id}
                                                           sx={{marginBottom: 1}}
                                        >
                                            <Grid key={index} sx={{display:{xs:'flex',md:'flex'},flexDirection:{xs:'column',md:'row'}}}>
                                            <Typography
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    width: '33%',
                                                    flexShrink: 0
                                                }}
                                            >
                                                Détails de la commande
                                            </Typography>
                                            <Typography key={index} sx={{color: 'text.secondary'}}>Cliquez pour
                                                consulter
                                            </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails key={index} >
                                            <Typography key={index} sx={{display: "flex", flexDirection: "column"}}>
                                                {commande.plats_commandes.map((plat) => {
                                                    return <li>{plat}</li>;
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                                <Divider key={index} sx={{fontWeight: 'bold'}} variant={'middle'} orientation="vertical" flexItem/>                                <Grid sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Box key={index} sx={{mr:7,mt:4,fontWeight:'bold'}}> {commande.etat_commande}</Box>
                                </Grid>
                            </Grid>
                        </Paper>)
                }
            })}
        </Box>
    );
};

export default AnciennesCommandes;