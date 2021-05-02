# Amazon clone

This is the frontend for my _amazon clone_ project

## Dependencies

- Node.js
- Firebase

## Tools

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension (consistent code formatting)

## Dev Environment

Create an `.env` file in your root directory and add theses entries to it:

```lang-none
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

Run the app in development mode.

```lang-none
yarn start
```

This will by default start the app at `localhost:3000`

Builds the app for production

```lang-none
yarn build
```

This will build the app for production to the `build` folder.

## Learn More

[create react app documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[react documentation](https://reactjs.org/).

React & TypeScript cheatsheets:

<https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example>
<https://github.com/typescript-cheatsheets/react>
