import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './InfoCard.css';

const InfoCard = ({ type, value, amount }) => (
  <Card>
    <CardContent className="cardContent">
      <Typography className="title" color="textSecondary" gutterBottom>
        {type}
      </Typography>
      <Typography className="value">
        {value}
      </Typography>
      <div className="amountContainer">
        <Typography className="amount" color="textSecondary">
          {amount} BNB_BTC
                </Typography>
        <img src="https://coin.market/img/coins/bnb.svg" alt="logo" />
      </div>
    </CardContent>
  </Card>
);

InfoCard.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  amount: PropTypes.number
};

export default InfoCard;
