# Anime Web App with Nextjs.
An Ad Free Anime Streaming web app to give you a better experience. Check it live here: [vegenta.vercel.app](https://vegenta.vercel.app)

## Api Reference

- [API REPO](https://github.com/vegenta/vegenta-api)
  This api is being used in this project.

## Getting Started
These instructions will get you a copy of the project up and running for development and testing purposes.

### Prerequisites
First you need to clone the [API REPO](https://github.com/vegenta/vegenta-api) and run it.
Go to next.config.js file on the root of the project and put your NGROK url inside the env object

```
 env: {
    key: process.env.COUNT_API_KEY,
    URL: "https://API_URL/api/",
  }
```

### Installing
Clone the Repository and run

```
npm install
npm run dev
```


## Built With

- Front End
  - [React JS](https://reactjs.org/)
  - [Next JS](https://nextjs.org/)
- Styling Utilities
  - [Tailwindcss](https://tailwindcss.com/)
  - [Styled Components](https://www.styled-components.com)
  - [Twin Macro](https://www.npmjs.com/package/twin.macro)
- State Management
  - [Redux](https://redux.js.org/)
  - [React-Redux](https://react-redux.js.org/)
  - [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
  - [Redux-Persist](https://github.com/rt2zz/redux-persist#readme)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
