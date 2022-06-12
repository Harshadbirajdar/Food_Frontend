import React from "react";
import Base from "../src/components/Base";
import CartItem from "../src/components/CartItem";
import { Grid, Paper, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const getTotal = () => {
    let qty = 0,
      amount = 0,
      item = 0;
    cartState.forEach((menu) => {
      if (!menu) return;
      qty += menu.qty;
      amount += menu.qty * menu.item.price;
      item += 1;
    });
    return { qty, amount, item };
  };

  return (
    <Base title="Cart">
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <CartItem />
        </Grid>
        <Grid my={2} item xs={3}>
          <Paper style={{ padding: "1em" }}>
            <h5> Item : {getTotal()?.item}</h5>
            <h5> Qty : {getTotal()?.qty}</h5>
            <h5>Total Amount : {getTotal()?.amount}</h5>
            <Grid justifyContent="space-evenly" display="flex">
              <Button variant="contained">Confirm Order</Button>
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Base>
  );
};

export default Cart;
