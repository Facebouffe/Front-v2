import React, {useState} from "react";
import {Box, Button, Modal, Paper} from "@mui/material";
import commandes from "../data/commandes.json";

const style = {
    position: "absolute" as "absolute",
    top: "40%",
    left: "30%",
    transform: "translate (-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 20,
    pt: 2,
    px: 4,
    pb: 3,
};



const AnciennesCommandes = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', padding: 1}}>
            {commandes.map(commande => {
                if (commande.etat_commande === 'livré') {
                    return (
                        <Paper onClick={handleOpen}
                               elevation={4}
                               sx={{display: 'flex', flexDirection: 'column', padding: 1, marginBottom: 1}}>
                            <Box sx={{}}>{commande.nom_restaurant}</Box>
                            <Box sx={{marginBottom: 1}}>Etat de la commande : {commande.etat_commande}</Box>
                            <Box sx={{marginBottom: 1}}>{commande.plats_commandes}</Box>
                            <Box sx={{marginBottom: 1}}>{commande.total_commande}</Box>
                            <Box sx={{ marginBottom: 1 }}>
                                {commande.plats_commandes.map((plat) => {
                                    console.log("commande.plats_commandes" + plat);
                                    return <li>{plat}</li>;
                                })}
                            </Box>
                            <Box>
                                Cliquez pour afficher la totalité de la commande
                                <Modal
                                    open={open}
                                    hideBackdrop
                                    onClose={handleClose}
                                    sx={{ marginBottom: 1 }}
                                >
                                    <Box
                                        sx={{ display: "flex", flexDirection: "column", ...style }}
                                    >
                                        La commandes passées est:
                                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                                            {commande.plats_commandes.map((plat) => {
                                                return <li>{plat}</li>;
                                            })}
                                        </Box>
                                        <Button onClick={handleClose}>Fermer</Button>
                                    </Box>
                                </Modal>
                            </Box>
                        </Paper>)
                }
            })}
        </Box>
    );
};

export default AnciennesCommandes;