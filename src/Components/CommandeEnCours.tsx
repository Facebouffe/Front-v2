import React, {useState} from 'react';
import commandes from "../data/commandes.json";
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const CommandeEnCours = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', padding: 1}}>
            {commandes.map(commande => {
                if (commande.etat_commande === 'en cours de livraison') {
                    return (
                        <Paper
                            elevation={4}
                            sx={{padding: 3, marginBottom: 3,ml: {xs:5,md:25},mr: {xs:5,md:25}, borderRadius: 12}}>
                            <Grid sx={{
                                display: 'flex', flexDirection: {xs: 'column', md: 'row'},
                                justifyContent: {xs: 'none', md: 'space-between'}
                            }}>
                                <Grid sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant={'h5'}  sx={{marginBottom: 1}}>{commande.nom_restaurant}</Typography>
                                    <Box sx={{marginBottom: 1}}>Prix : {commande.total_commande} €</Box>
                                </Grid>
                                <Grid sx={{
                                    display: 'flex', flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Accordion expanded={expanded === commande.id} onChange={handleChange(commande.id)}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                                          id={commande.id}
                                                          sx={{marginBottom: 1}}
                                        >
                                            <Grid sx={{
                                                display: {xs: 'flex', md: 'flex'},
                                                flexDirection: {xs: 'column', md: 'row'}
                                            }}>
                                                <Typography
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        width: '33%',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    Détails de la commande
                                                </Typography>

                                                <Typography sx={{color: 'text.secondary'}}>Cliquez pour
                                                    consulter</Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography sx={{display: "flex", flexDirection: "column"}}>
                                                {commande.plats_commandes.map((plat) => {
                                                    return <li>{plat}</li>;
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                                <Grid sx={{display: 'flex', flexDirection: 'column',}}>
                                    <Box sx={{marginBottom: 1}}>Etat de la commande : {commande.etat_commande}</Box>

                                </Grid>
                            </Grid>
                        </Paper>)
                }
            })}
        </Box>
    );
};

export default CommandeEnCours;