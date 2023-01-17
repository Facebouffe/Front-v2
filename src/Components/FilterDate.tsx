import React, { useState } from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
// import {makeStyles} from '@mui/styles';
import moment from "moment";
import commandes from "../data/commandes.json";

//
// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

const CommandesTable = () => {
    const [sort, setSort] = useState({ key: 'date', direction: 'asc' });

    const handleSort = (key: string) => {
        if (sort.key === key) {
            setSort({ key, direction: sort.direction === 'asc' ? 'desc' : 'asc' });
        } else {
            setSort({ key, direction: 'asc' });
        }
    };

    const sortedCommandes = commandes
        .sort((a:any, b:any) => {
            if (sort.direction === 'asc') {
                return moment(a[sort.key]).isBefore(moment(b[sort.key])) ? -1 : 1;
            }
            return moment(a[sort.key]).isAfter(moment(b[sort.key])) ? -1 : 1;
        });

    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Button onClick={() => handleSort('date')}>Date</Button>
                        </TableCell>
                        <TableCell align="right">Numéro de commande</TableCell>
                        <TableCell align="right">Prix</TableCell>
                        <TableCell align="right">Statut</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedCommandes.map((commande :any)=> (
                        <TableRow key={commande.id}>
                            <TableCell component="th" scope="row">
                                {commande.date}
                            </TableCell>
                            <TableCell align="right">{commande.orderNumber}</TableCell>
                            <TableCell align="right">{commande.price}</TableCell>
                            <TableCell align="right">{commande.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CommandesTable;
