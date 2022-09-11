import self from "../img/self.jpeg";
import pokemonhunter from "../img/pokemonhunter.png";
import tokyovinyls from "../img/tokyovinyls.png";
import tofuture from "../img/tofuture.png";
import slack from "../img/slack.png";
import mock5 from "../img/mock5.png";

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
  bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "ruby on rails",
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html",
      "css",
      "figma",
      "heroku",
      "PostgreSQL",
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
      title: "Pokemon Hunter",
      live: "jchapps.github.io/react-pokemon-hunter/",
      source: "https://github.com/jchapps/react-pokemon-hunter",
      image: pokemonhunter,
    },
    {
      title: "Tokyo Vinyls",
      live: "https://tokyo-vinyls.herokuapp.com/",
      source: "https://github.com/jchapps/tokyo-vinyls",
      image: tokyovinyls,
    },
    {
      title: "toFuture",
      live: "tofuture.co",
      source: "https://www.tofuture.co/",
      image: tofuture,
    },
    {
      title: "Slack Clone",
      live: "https://jchapps.github.io/react-slack-clone/",
      source: "https://github.com/jchapps/react-slack-clone",
      image: slack,
    },
  ],
};
