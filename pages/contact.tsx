import React from 'react';
import {Box, Typography} from "@mui/material";
import {Header} from "../src/Components/Header";

const Contact = () => {

    return (
        <Box>
            <Header/>
            <Box sx={{mt:4,ml:4,mr:4}}>
            <Typography sx={{mb:2}} variant={'h4'}>Pour vous, clients </Typography>
            <Typography sx={{mb:1,mt:3}} variant={'h5'}>Des questions à propos de votre commande ? </Typography>
            <Typography>Nous sommes là pour vous aider ! Écrivez-nous à hello@facebouffe.fr.
                Veuillez noter que nous ne pouvons accepter les commandes par téléphone. Si vous souhaitez passer
                commande, merci de bien vouloir le faire en ligne. </Typography>

            <Typography sx={{mb:2,mt:3}} variant={'h4'}>Pour vous, livreurs partenaires </Typography>
            <Typography sx={{mb:1,mt:3}}>Vous avez une question et souhaitez contacter FaceBouffe ? Cliquez ici pour entrer en contact
                avec nos équipes </Typography>

            <Typography sx={{mb:2,mt:3}}variant={'h4'}>Pour vous, restaurants ou épiceries partenaires </Typography>
            <Typography sx={{mb:1,mt:3}}>Pour toute question ou demande, veuillez nous contacter via la rubrique "Aide" de votre portail
                Hub.
                Si vous n'êtes pas encore partenaire, nous vous invitons à vous rendre sur cette page. </Typography>

            <Typography variant={'h4'}>Pour vous, médias </Typography>
            <Typography>Pour toutes information, interview ou demande presse, veuillez nous écrire à
                presse@facebouffe.fr.
                Le service presse n'a malheureusement pas accès aux informations relatives aux comptes clients ni les
                comptes livreurs. Pour toutes les demandes des clients et livreurs, veuillez voir
                ci-dessus. </Typography>

        </Box>
        </Box>
    );
};

export default Contact;