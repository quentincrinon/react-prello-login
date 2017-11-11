import React from 'react';
import ReactDOM from 'react-dom';
import PrelloLogin from '../src/PrelloLogin';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <PrelloLogin clientId=""
    redirectUri=""
    onSuccess={onSuccess}
    onFailure={onFailure}
  />,
  document.getElementById('example')
);
