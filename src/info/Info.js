import self from "../img/self.jpeg";
import pokemonhunter from "../img/pokemonhunter.png";
import tokyovinyls from "../img/tokyovinyls.png";
import tofuture from "../img/tofuture.png";
import slack from "../img/slack.png";
import shopifypokemon from "../img/shopifypokemon.png";
import belatedbicycles from "../img/belatedbicycles.png";
import bluemovies from "../img/bluemovies.png";

export let colors = ["#f0ead6", "#548C2F"];

export const info = {
  firstName: "Josh",
  lastName: "Chappelow",
  initials: "J",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🌎",
      text: "Based in Tokyo",
    },
    {
      emoji: "📧",
      text: "jdchappelow@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/jchapps",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/jdchappelow/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],

  skills: {
    proficientWith: [
      "react",
      "javascript",
      "next.js",
      "typescript",
      "ruby on rails",
      "git",
      "github",
      "bootstrap",
      "tailwind",
      "html",
      "css",
      "figma",
      "heroku",
      "vercel",
      "PostgreSQL",
      "graphQL",
      "SASS",

    ],
    exposedTo: [""],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    {
      title: "Belated Bicycles",
      live: "https://shopify-store-ten.vercel.app/",
      source: "https://github.com/jchapps/shopify-store",
      software: "// Next.js, JavaScript, Tailwind, HTML5, Github, Vercel.",
      info: "Headless shopify store built in Next.js and Tailwind",
      image: belatedbicycles,
    },
    {
      title: "Blue Movies",
      live: "https://blue-movies.vercel.app/",
      source: "https://github.com/jchapps/typescript-next.js-blue-movies",
      software:
        "// Next.js, Typescript, Tailwind, MUI, Firebase, HTML5, Github, Vercel.",
      info: "Web app to find and watch movie trailers",
      image: bluemovies,
    },
    {
      title: "Tokyo Vinyls",
      live: "https://tokyo-vinyls.herokuapp.com/",
      source: "https://github.com/jchapps/tokyo-vinyls",
      image: tokyovinyls,
      software:
        "// Ruby on rails, CSS3, HTML5, Heroku, Bootstrap, Figma, PostGreSQL.",
      info: "Web app built in 5days to connect vinyl collectors and vinyl fans.",
    },
    {
      title: "City Weather",
      live: "https://weather-city-forecaster.vercel.app/",
      source: "https://github.com/jchapps/react-weather-checker",
      software:
        "// React.js, RESTful API, HTML5, Github, Vercel.",
      info: "Web app to find weather forecasts of cities around the world",
      image: screenshot1,
    },
    {
      title: "toFuture",
      live: "https://www.tofuture.co/",
      source: "https://github.com/jchapps/tofuture",
      software:
        "// Ruby on rails, JavaScript, CSS3, HTML5, Heroku, Bootstrap, Figma, PostGreSQL.",
      info: "Web app built in 10days to connect conscious investors to sustainable products.",
      image: tofuture,
    },
    {
      title: "Slack Clone",
      live: "https://jchapps.github.io/react-clone-slack/",
      source: "https://github.com/jchapps/react-clone-slack",
      software: "// React, JavaScript, CSS3, HTML5, Github.",
      info: "Slack clone built in Slack featuring DoTA2 heroes.",
      image: slack,
    },

    {
      title: "Pokemon Hunter",
      live: "https://jchapps.github.io/react-pokemon-hunter/",
      source: "https://github.com/jchapps/react-pokemon-hunter",
      image: pokemonhunter,
      software: "// React, JavaScript, CSS3, HTML5 Github.",
      info: "Find GIFs of your favourite pokemon.",
    },

    {
      title: "Shopify Pokemon Cards - IN PROGESS",
      source: "https://github.com/billcookie/shopify-pokemon",
      software: "// Frontend React, Ruby on Rails backend, Shopify integrated.",
      info: "Web App for pokemon card collectors to buy their favourite cards.",
      image: shopifypokemon,
    },
  ],
};
