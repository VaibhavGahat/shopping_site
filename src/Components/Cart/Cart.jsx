import React from 'react';
import  { Container, Typography, Button, Grid } from  '@material-ui/core';
import useStyles from './style';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart, onEmptyCart,onUpdateCartQty,onRemoveFromCart}) => {
    const classes = useStyles();
 
    console.log(cart)

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
          <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
      );
    
      if (!cart.line_items) return 'Loading';
    
      const renderCart = () => (
        <div>
          <Grid container spacing={3}>
            {cart.line_items.map((lineItem) => (
              <Grid item xs={12} sm={4} key={lineItem.id}>
                <CartItem item={lineItem}
                handleUpdate={onUpdateCartQty} 
                handleRemove={onRemoveFromCart}
                 />
              </Grid>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
              <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"onClick={()=>onEmptyCart()} >Empty cart</Button>
            </div>
          </div>
        </div>
      );
    
      return (
        <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
          { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </Container>
      );
    };
    
    export default Cart;
    