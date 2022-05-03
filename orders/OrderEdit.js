import React from 'react';
import {
    AutocompleteInput,
    BooleanInput,
    DateInput,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import Basket from './Basket';

const OrderTitle = ({ record }) => {
    const translate = useTranslate();
    return (
        <span>
            {translate('resources.commands.title', {
                reference: record.reference,
            })}
        </span>
    );
};

const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const OrderEdit = props => {
    const classes = useEditStyles();

    return (
        <Edit
            title={<OrderTitle />}
            aside={<Basket />}
            classes={classes}
            {...props}
        >
            <SimpleForm>
                <DateInput source="date" />
                <ReferenceInput source="customer_id" reference="customers">
                    <AutocompleteInput
                        optionText={choice =>
                            `${choice.first_name} ${choice.last_name}`
                        }
                    />
                </ReferenceInput>
                <SelectInput
                    source="status"
                    choices={[
                        { id: "requested", name: "requested" },
                        { id: "verified", name: "verified" },
                        { id: "cancelled", name: "cancelled" },
                    ]}
                />
                <BooleanInput onClick={() => { if(Math.random() > 0.7) {alert("Connection error! Please click refresh button in the right upper corner of the page.")}}} label={'Offer accepted'} source="offeraccepted" />
            </SimpleForm>
        </Edit>
    );
};

export default OrderEdit;
