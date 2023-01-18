import React from 'react';
import {Box, Typography} from "@mui/material";
import {Header} from "../src/Components/Header";
import {Bottom} from "../src/Components/Bottom";

const Faq = () => {

    return (
        <Box>
            <Header/>
            <Box sx={{mt: 4, ml: 4, mr: 4}}>
                <Typography sx={{mb: 2, fontWeight: 'bold'}} variant={'h3'}>Pour vous, clients </Typography>
                <Typography sx={{mb: 2}} variant={'h4'}>Qui sommes-nous ? </Typography>
                <Typography>FaceBouffe s'est donné pour mission de révolutionner la manière dont vous commandez vos
                    plats. Nous nous sommes associés aux meilleurs restaurants, de la petite adresse locale aux
                    franchises cultes, afin de vous livrer vos plats préférés sur le pas de votre porte.
                    Choisissez parmi des milliers de suggestions !
                </Typography>

                <Typography sx={{mb: 2}} variant={'h4'}>Pour vous, livreurs partenaires </Typography>
                <Typography sx={{mb: 2}}>Vous avez une question et souhaitez contacter FaceBouffe ? Cliquez ici
                    pour entrer en contact
                    avec nos équipes </Typography>
                <Typography sx={{mb: 2}} variant={'h4'}>Pourquoi FaceBouffe ? </Typography>
                <Typography sx={{mb: 2}}>FaceBouffe est une success story à l'anglaise. Après avoir quitté New
                    York pour s'installer à Londres, notre fondateur a dû se rendre à l'évidence : il lui était
                    quasiment impossible de se faire livrer des plats de qualité. Il s’est donc donné pour mission de
                    créer un service permettant de rapprocher les clients et leurs restaurants préférés.
                    Nous sommes maintenant présents dans plus de 100 villes du Royaume-Uni, plus de 600 développeurs et
                    salariés travaillent dans notre siège à Londres et nous collaborons régulièrement avec plus 8 000
                    restaurants et 15 000 coursiers.
                </Typography>
                <Typography sx={{mb: 2, fontWeight: 'bold'}} variant={'h3'}>Commander sur FaceBouffe </Typography>

                <Typography variant={'h4'} sx={{mb: 2}}>Comment ça marche ?</Typography>
                <Typography sx={{mb: 2}}>Vous pouvez commander soit sur le site, soit via l'application mobile
                    FaceBouffe, disponible
                    sur iOS et Android. Saisissez simplement votre code postal pour trouver tous les restaurants
                    disponibles dans votre quartier, choisissez vos plats et passez votre commande.
                    Une fois que le restaurant aura reçu et accepté votre commande, celle-ci sera préparée et
                    soigneusement emballée. Une fois votre commande prête, un livreur partenaire viendra la chercher et
                    vous l'apporter.
                    Si vous voulez vous organiser de manière optimale, vous pouvez également passer votre commande
                    jusqu'à 24 heures à l'avance et planifier une livraison à l'heure de votre choix.
                </Typography>

                <Typography sx={{mb: 2}} variant={'h4'}>Qui est responsable de votre commande ?</Typography>
                <Typography sx={{mb: 2}}>En cas d’acceptation de votre commande par un partenaire, un contrat de vente
                    est formé
                    uniquement entre vous et le partenaire. FaceBouffe n'est pas partie à un tel contrat et n'assume
                    aucune responsabilité ayant pour origine un tel contrat ou découlant de ce contrat de vente.
                    FaceBouffe n’assume aucune responsabilité concernant les produits vendus par nos partenaires. Il
                    n’est ni l’acheteur, ni le vendeur des produits des partenaires.

                    Chaque partenaire est responsable de la vente des produits que vous commandez sur les applications.
                    Le partenaire doit garantir les produits qu’il propose sur les applications conformément aux
                    réglementations applicables.

                    Par ailleurs, en cas d’achat de produits non-périssables auprès d’un partenaire, celui-ci est
                    responsable de la fourniture des informations relatives à votre droit de rétractation, au retour des
                    produits ainsi que toute autre obligation incombant au vendeur.

                    Pour toute question, vous pouvez soumettre votre demande à hello@facebouffe.fr.
                </Typography>

                <Typography sx={{mb: 2}} variant={'h4'}>Quels types de restaurant sont présents sur FaceBouffe
                    ?</Typography>
                <Typography sx={{mb: 2}}>Nous sélectionnons avec attention les meilleurs restaurants de votre quartier.
                    De l'authentique restaurant thaï, aux burgers les plus gourmets, en passant par la pizzeria la plus
                    italienne du coin, FaceBouffe ne travaille qu'avec les meilleurs restaurants pour ravir les papilles
                    les plus exigeantes.
                </Typography>
            </Box>
            <Bottom/>
        </Box>
    );
};

export default Faq;