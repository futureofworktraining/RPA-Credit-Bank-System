import React from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  Filter,
  List,
  NullableBooleanInput,
  NumberField,
  SearchInput,
  TextField
} from "react-admin";
import { useMediaQuery, makeStyles } from "@material-ui/core";


const ProductFilter = props => (
  <Filter {...props}>
    <SearchInput source="product_id" resettable alwaysOn />
    <NullableBooleanInput source="required" label="Is Required?"  />
  </Filter>
);

const useStyles = makeStyles({
  nb_commands: { color: "purple" }
});

const DocumentList = props => {
  const classes = useStyles();
  const isXsmall = useMediaQuery(theme => theme.breakpoints.down("xs"));
  return ( 
    <List
      {...props}
      filters={<ProductFilter />}
      sort={{ field: "id", order: "DESC" }}
      perPage={25}
    >
    <Datagrid optimized rowClick="edit">
        <TextField source="id"  label="Document ID" />
        <TextField source="product_id" />
        <TextField source="document" />
        <BooleanField source="required" label="Is Required?" />
    </Datagrid>
    </List>
  );
};

export default DocumentList;
