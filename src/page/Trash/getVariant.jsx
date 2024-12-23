import React from 'react'

const getVariant = (now) => {
    if (now < 30) return { variant: 'info', striped: true };
    if (now >= 30 && now < 50) return { variant: 'success', striped: true };
    if (now >= 50 && now < 80) return { variant: 'warning', striped: true };
    return { variant: 'danger', striped: true };
  };

export default getVariant