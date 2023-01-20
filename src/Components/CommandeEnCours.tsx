import React, {useState} from 'react';
import commandes from "../data/commandes.json";
import {Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Paper, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const CommandeEnCours = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [lesCommandes, setLesCommandes] = useState([]);



    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', padding: 1}}>
            {commandes.map((commande, index) => {
                if (commande.etat_commande === 'en cours de livraison') {
                    return (
                        <Paper
                            key={index}
                            elevation={4}
                            sx={{padding: 3, marginBottom: 3,ml: {xs:5,md:25},mr: {xs:5,md:25}, borderRadius: 12}}>
                            <Grid sx={{
                                display: 'flex', flexDirection: {xs: 'column', md: 'row'},
                                justifyContent: {xs: 'none', md: 'space-between'}
                            }}>
                                <Grid sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant={'h5'}  sx={{marginBottom: 1}}>{commande.nom_restaurant}</Typography>
                                    <Box sx={{marginBottom: 1}}>Prix : {commande.total_commande} €</Box>
                                    <Box  sx={{marginBottom: 1}}>Date :  {commande.date}</Box>
                                </Grid>
                                <Divider sx={{fontWeight: 'bold'}} variant={'middle'} orientation="vertical" flexItem/>
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
                                            <Divider sx={{fontWeight: 'bold'}} variant={'middle'} orientation="vertical"
                                                     flexItem/>
                                            <Typography sx={{display: "flex", flexDirection: "column"}}>
                                                {commande.plats_commandes.map((plat, index2) => {
                                                    return <li key={index2}>{plat}</li>;
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                                <Divider sx={{fontWeight: 'bold'}} variant={'middle'} orientation="vertical" flexItem/>
                                <Grid sx={{display: 'flex', flexDirection: 'column',}}>
                                    <Box sx={{marginBottom: 1,mr:7,mt:4,fontWeight:'bold'}}> {commande.etat_commande}</Box>

                                </Grid>
                            </Grid>
                        </Paper>)
                }
            })}
        </Box>
    );
};

export default CommandeEnCours;