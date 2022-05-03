import React from 'react';
import {
    useEditController,
    useTranslate,
    TextInput,
    SimpleForm,
    DateField,
    SelectInput,
} from 'react-admin';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import ProductReferenceField from '../products/ProductReferenceField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import TicketEditToolbar from './TicketEditToolbar';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 40,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1em',
    },
    form: {
        [theme.breakpoints.up('xs')]: {
            width: 400,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            marginTop: -30,
        },
    },
    inlineField: {
        display: 'inline-block',
        width: '50%',
    },
}));

const ReviewEdit = ({ onCancel, ...props }) => {
    const classes = useStyles();
    const controllerProps = useEditController(props);
    const translate = useTranslate();
    if (!controllerProps.record) {
        return null;
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h6">
                    {translate('resources.tickets.detail')}
                </Typography>
                <IconButton onClick={onCancel}>
                    <CloseIcon />
                </IconButton>
            </div>
            <SimpleForm
                className={classes.form}
                basePath={controllerProps.basePath}
                record={controllerProps.record}
                save={controllerProps.save}
                version={controllerProps.version}
                redirect="list"
                resource="tickets"
                toolbar={<TicketEditToolbar />}
            >
                <DateField source="date" formClassName={classes.inlineField} />
                <SelectInput
                    source="status"
                    choices={[
                        { id: "Submitted", name: "Submitted" },
                        { id: "Rejected", name: "Rejected" },
                        { id: "Pending", name: "Pending" },
                        { id: "Resolved", name: "Resolved" },
                        { id: "In progress", name: "In progress" },
                    ]}
                />
                <SelectInput
                    source="type"
                    choices={[
                        { id: "Product Query", name: "Product Query" },
                        { id: "Cancelation Process", name: "Cancelation Process" },
                        { id: "Acceptance Process", name: "Acceptance Process" },
                    ]}
                />
                <TextInput source="content" rowsMax={15} multiline fullWidth />
                <TextInput source="response" rowsMax={15} multiline fullWidth />
            </SimpleForm>
        </div>
    );
};

export default ReviewEdit;
