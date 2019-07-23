<h1 align="center">Welcome to React-Router-Movies 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ShelbyDiamond/React-Router-Movies">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/LambdaSchool/SPA-Routing-React/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/LambdaSchool/SPA-Routing-React/blob/master/LICENSE">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/ShelbyN_Diamond">
    <img alt="Twitter: ShelbyN_Diamond" src="https://img.shields.io/twitter/follow/ShelbyN_Diamond.svg?style=social" target="_blank" />
  </a>
</p>

# Client Side Routing w/ React Router v. 4

Topics:

- React Router
- Using Link and NavLink to navigate to specific routes
- Passing Route Parameters
- Passing props to components rendered by the Router

## Instructions

**NOTE ⚠️ - You will NOT need to finish this project after React Router I. Start working on it now, then you can finish it up after the next module - React Router II.**

- **Fork** this repository, then clone your fork.
- **NOTE** You have 2 servers that you will be running here so read these instructions carefully.
- **In the root of this directory**: Run `yarn install` to download dependencies.
- Run the server using `yarn start` or `node server.js`. (Don't worry too much about this process, you'll get used to doing this and it will be explained more in the future).
- In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- Still inside the `client` folder run `yarn start` to run the client application.

- Once your application is up and running on the client, you should see a browser window that looks like this at `localhost:3000`
  ![Movies Home](https://ibin.co/3xhmmHVl9BKF.png)

### Part 1:

- Wrap your app with the router.
- Inside your App file add two routes.
  - one route for `/` that loads the `MovieList` component.
  - one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.

### Part 2:

- Make it so that the card in `MovieList` is a link, this should direct the user to the `/movies/{id of movie here}` URL, where `:id` is the id of the individual movie.
- When a user clicks on a movie card they should be taken to `/movies/{id of movie here}` to see the details for the selected movie.
- You will need to modify line 13 of `Movie.js` in order to accept the correct id for the movie selected.
- Add functionality so the `Home` button on the `SavedList` component navigates back to home.
- You should now be able to navigate back and forth between the individual movies and the home screen.

## Stretch Goals.

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

### Refactor so that our code is DRY.

You may notice that we are using essentially the same exact JSX code in the `Movie` component and the `MovieDetails` component in `MovieList.js` create a new component in `MovieCard.js` that returns this JSX code. Then remove the old code from `Movie` and `MovieDetails` and instead return the new `MovieCard` component.

### Add `Save Movie` functionality.

You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button.

### Turn your Saved Movie list into `Link`s.

You will need to uncomment lines 25-28 in `Movie.js` to complete this. Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.

### Turn your Saved Movie `Link`s into `NavLink`s.

## Install

```sh
yarn install
```

## Author

👤 **Shelby Diamond**

- Twitter: [@ShelbyN_Diamond](https://twitter.com/ShelbyN_Diamond)
- Github: [@https://github.com/ShelbyDiamond](https://github.com/https://github.com/ShelbyDiamond)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/LambdaSchool/SPA-Routing-React/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Shelby Diamond](https://github.com/https://github.com/ShelbyDiamond).<br />
This project is [ISC](https://github.com/LambdaSchool/SPA-Routing-React/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
