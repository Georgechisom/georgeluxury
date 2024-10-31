import React from 'react'

const FormattedPrice = ({amount} = {amount: Number}) => {
    const formattedAmount = new Number(amount).toLocaleString("en-us", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
    });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice