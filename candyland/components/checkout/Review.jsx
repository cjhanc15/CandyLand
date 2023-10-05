import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

// Simulated data fetching functions
const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Chocolate Bar',
          desc: 'Delicious milk chocolate bar',
          price: '$2.99',
        },
        {
          name: 'Gummy Bears',
          desc: 'Fruity and chewy gummy bears',
          price: '$1.49',
        },
        {
          name: 'Caramel Taffy',
          desc: 'Sweet and chewy caramel taffy candies',
          price: '$4.99',
        },
        {
          name: 'Lollipop Assortment',
          desc: 'Assorted fruit-flavored lollipops',
          price: '$3.99',
        },
        { name: 'Shipping', desc: 'Standard Shipping', price: 'Free' },
      ]);
    }, 1000);
  });
};

const fetchAddresses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['1 Candy OD Drive', 'Reactville', 'Anytown', '3746', 'USA']);
    }, 1000);
  });
};

const fetchPayments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Card type', detail: 'Visa' },
        { name: 'Card holder', detail: 'Mr John Smith' },
        { name: 'Card number', detail: 'xxxx-xxxx-xxxx-4325' },
        { name: 'Expiry date', detail: '04/2024' },
      ]);
    }, 1000);
  });
};

const Review = () => {
  const [products, setProducts] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      const addressesData = await fetchAddresses();
      const paymentsData = await fetchPayments();

      setProducts(productsData);
      setAddresses(addressesData);
      setPayments(paymentsData);

      setTimeout(() => {
        setUserName('John Smith');
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Shipping
          </Typography>
          <Typography gutterBottom>{userName}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Payment Details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
