import React from 'react';
import ReactDOM from 'react-dom';
import PrelloLogin from '../src/PrelloLogin';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <PrelloLogin clientId="e8a49d489ce39e9f1db0"
    redirectUri="http://localhost:3000"
    onSuccess={onSuccess}
    onFailure={onFailure}
  />,
  document.getElementById('example')
);
