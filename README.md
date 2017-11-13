# React Prello Login

React component for [Prello login](https://theprello-ci.igpolytech.fr).

## Usage

`npm install --save https://github.com/quentincrinon/react-theprello-login`


```js
import React from 'react';
import ReactDOM from 'react-dom';
import ThePrelloLogin from 'react-theprello-login/dist/PrelloLogin';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <ThePrelloLogin clientId="ac56fad434a3a3c1561e"
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);
```

### Props

#### `clientId`

`{string}` _required_

Client ID for Prello OAuth application.

#### `redirectUri`

`{string}`

Registered redirect URI for Prello OAuth application.

#### `scope`

`{string}`

Scope for Prello OAuth application.

#### `className`

`{string}`

CSS class for the login button.

#### `buttonText`

`{string}`

Text content for the login button.

#### `onRequest`

`{function}`

Callback for every request.

#### `onSuccess`

`{function}`

Callback for successful login. An object will be passed as an argument to the callback, e.g. `{ "code": "..." }`.

#### `onFailure`

`{function}`

Callback for errors raised during login.
