import self from "../img/self.jpeg";
import pokemonhunter from "../img/pokemonhunter.png";
import tokyovinyls from "../img/tokyovinyls.png";
import tofuture from "../img/tofuture.png";
import slack from "../img/slack.png";
import belatedbikes from "../img/belatedbikes.png";
import bluemovies from "../img/bluemovies.png";
import weather from '../img/screenshot1.png'

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
      "figma",
      "node.js",
      "PostgreSQL",
      "graphQL",
      "AWS",
      "Azure"

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
      live: "https://bicycles-shopify.vercel.app/",
      source: "https://github.com/jchapps/shopify-belated-bikes",
      software: "// Next.js, Typescript, Tailwind.",
      info: "Headless shopify store built in Next.js, Typescript and Tailwind",
      image: belatedbikes,
    },
    {
      title: "Blue Movies",
      live: "https://blue-movies.vercel.app/",
      source: "https://github.com/jchapps/typescript-next.js-blue-movies",
      software:
        "// Next.js, Typescript, Tailwind, MUI, Firebase, Vercel.",
      info: "Web app to find and watch movie trailers",
      image: bluemovies,
    },
    {
      title: "Tokyo Vinyls",
      live: "https://tokyo-vinyls.herokuapp.com/",
      source: "https://github.com/jchapps/tokyo-vinyls",
      image: tokyovinyls,
      software:
        "// Ruby on rails, Bootstrap, Figma, PostGreSQL.",
      info: "Web app built in 5days to connect vinyl collectors and vinyl fans.",
    },
    {
      title: "City Weather",
      live: "https://weather-city-forecaster.vercel.app/",
      source: "https://github.com/jchapps/react-weather-checker",
      software:
        "// React.js, RESTful API.",
      info: "Web app to find weather forecasts of cities around the world",
      image: weather,
    },
    {
      title: "toFuture",
      live: "https://www.tofuture.co/",
      source: "https://github.com/jchapps/tofuture",
      software:
        "// Ruby on rails, JavaScript, Heroku, Bootstrap, Figma, PostGreSQL.",
      info: "Web app built in 10days to connect conscious investors to sustainable products.",
      image: tofuture,
    },
    {
      title: "Slack Clone",
      live: "https://jchapps.github.io/react-clone-slack/",
      source: "https://github.com/jchapps/react-clone-slack",
      software: "// React, JavaScript.",
      info: "Slack clone built in Slack featuring DoTA2 heroes.",
      image: slack,
    },

    {
      title: "Pokemon Hunter",
      live: "https://jchapps.github.io/react-pokemon-hunter/",
      source: "https://github.com/jchapps/react-pokemon-hunter",
      image: pokemonhunter,
      software: "// React, JavaScript.",
      info: "Find GIFs of your favourite pokemon.",
    },
  ],
};
