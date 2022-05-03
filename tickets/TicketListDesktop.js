import React from 'react';
import { Datagrid, DateField, TextField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import rowStyle from './rowStyle';

const useListStyles = makeStyles({
    headerRow: {
        borderLeftColor: 'white',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    comment: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});

const TicketListDesktop = props => {
    const classes = useListStyles();
    return (
        <Datagrid
            rowClick="edit"
            rowStyle={rowStyle}
            classes={{ headerRow: classes.headerRow }}
            optimized
            {...props}
        >
            <DateField source="date" />
            <TextField source="from" />
            <TextField source="to" />
            <TextField source="type" />
            <TextField source="status" />
        </Datagrid>
    );
};

export default TicketListDesktop;
