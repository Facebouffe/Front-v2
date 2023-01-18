import React, {useEffect, useState} from 'react';
import commandes from "../data/commandes.json";
import moment from 'moment';

 const FilterDate = (commandes:any) => {

    const [dates, setDates] = useState([]);

    useEffect(() => {
        // @ts-ignore
        setDates([moment(commandes[0].date).format('AAAA-J-MM')]);
    }, [commandes]);

    return [dates, (values:any) => {    // @ts-ignore
        setDates([moment(values[0]).format('AAAA-J-MM'), moment(values[1]).format('AAAA-J-MM')]);
    }];
}

export default FilterDate;