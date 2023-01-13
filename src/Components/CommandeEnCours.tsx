import React from 'react';
import commandes from "../data/commandes.json";
import {Box, Grid, Paper} from "@mui/material";

const CommandeEnCours = () => {
    return (
        <Box>
            {commandes.map(commande => {
                if (commande.etat_commande === 'en cours de livraison') {
                    return (
                        <Paper elevation={4} sx={{display: 'flex', flexDirection: 'column', padding: 1,marginBottom: 1}}>
                            <Box  sx={{}}>{commande.nom_restaurant}</Box>
                            <Box  sx={{marginBottom: 1}}>Etat de la commande : {commande.etat_commande}</Box>
                            <Box sx={{marginBottom: 1}}>{commande.plats_commandes}</Box>
                            <Box  sx={{marginBottom: 1}}>{commande.total_commande}</Box>
                        </Paper>)
                }
            })}
        </Box>
    );
};

export default CommandeEnCours;