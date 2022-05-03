import React from "react";
import classnames from "classnames";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link, useTranslate, useQueryWithStore } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: { minWidth: "35em", marginLeft: "1em" },
  rightAlignedCell: { textAlign: "right" },
  boldCell: { fontWeight: "bold" },
});

const Basket = ({ record }) => {
  const classes = useStyles();
  const translate = useTranslate();

  const { loaded, data: products } = useQueryWithStore(
    {
      type: "getMany",
      resource: "products",
      payload: {
        ids: record ? record.basket.map((item) => item.product_id) : [],
      },
    },
    {},
    (state) => {
      const productIds = record
        ? record.basket.map((item) => item.product_id)
        : [];
      return productIds
        .map((productId) => state.admin.resources.products.data[productId])
        .filter((r) => typeof r !== "undefined")
        .reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {});
    }
  );

  if (!loaded || !record) return null;

  return (
    <Paper className={classes.container} elevation={2}>

      <Table>
        <TableHead>
        <Typography
        variant="h6"
        id="tableTitle"
        component="div"
        style={{marginLeft: 12, marginTop: 10}}
      >
        Offer details:
      </Typography>
          <TableRow>
            <TableCell>
                Product name
            </TableCell>
            <TableCell className={classes.rightAlignedCell}>EIR</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {translate("resources.commands.fields.basket.quantity")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record.basket.map(
            (item) =>
              products[item.product_id] && (
                <TableRow key={item.product_id}>
                  <TableCell>
                    <Link to={`/products/${item.product_id}/details`}>
                      {products[item.product_id].reference}
                    </Link>
                  </TableCell>
                  <TableCell className={classes.rightAlignedCell}>
                    {products[item.product_id].EIR.toLocaleString(
                      undefined,
                      {}
                    )}
                    %
                  </TableCell>
                  <TableCell className={classes.rightAlignedCell}>
                    {item.quantity}
                  </TableCell>
                </TableRow>
              )
          )}
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>Estimated income</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {record.tax_rate.toLocaleString(undefined, {
                style: "percent",
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell className={classes.boldCell}>
              Total amounth requested
            </TableCell>
            <TableCell
              className={classnames(classes.boldCell, classes.rightAlignedCell)}
            >
              {record.total.toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Basket;
