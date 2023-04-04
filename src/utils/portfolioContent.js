import projectImageDND from "../assets/project-newdnd.png";
import projectImageMovie from "../assets/project-moviemoodboard.png";
import projectJATE from "../assets/project-jate.png";
import projectCodeOnion from "../assets/project-codeonion.png";
import projectNoteTaker from "../assets/project-notetaker.png";
import projectScheduler from "../assets/project-scheduler.png";

const portfolioContent = [
  // Project 2
  {
    id: 1,
    title: "Group Project 2 (New DND)",
    date: "January 2023",
    description: "Dungeon crawler game, which is deployed on Heroku. Please note that the app requires you to create an account to play the game.",
    deployedUrl: "https://new-dnd7.herokuapp.com/",
    githubUrl: "https://github.com/deafboi6/newDND",
    image: projectImageDND,
  },
  // Project 1
  {
    id: 2,
    title: "Group Project 1 (Movie Moodboard)",
    date: "November 2022",
    description: "Web app to search for Movies or TV shows based on genre, using the TMDB and OMDB APIs.",
    deployedUrl: "https://abbeydoyle.github.io/movie-moodboard/",
    githubUrl: "https://github.com/abbeydoyle/movie-moodboard",
    image: projectImageMovie,
  },
  // PWA Text Editor
  {
    id: 3,
    title: "PWA: Text Editor",
    date: "February 2023",
    description: "Progressive web app text editor.",
    deployedUrl: "https://pwa-text-editor-markerpathis.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/progressive-webapp-text-editor",
    image: projectJATE,
  },
  // MVC Tech Blog
  {
    id: 4,
    title: "MVC Tech Blog (Code Onion)",
    date: "January 2023",
    description:
      "Blog site where visitors can create accounts, write blog posts for all users to see, and add comments to any blog post. Users also have access to the Dashboard page, where they can edit or delete their previous blog posts.",
    deployedUrl: "https://code-onion.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/mvc-tech-blog",
    image: projectCodeOnion,
  },
  // Express JS Note Taker
  {
    id: 5,
    title: "Express JS Note Taker",
    date: "December 2022",
    description: "Web app that lets the user write notes and save them in a database. This application uses Express.js for the back end and retrieves the the saved data from a json file.",
    deployedUrl: "https://note-taker-markerpathis.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/express-js-note-taker",
    image: projectNoteTaker,
  },
  // Work Day Scheduler
  {
    id: 6,
    title: "Work Day Scheduler",
    date: "October 2022",
    description:
      "Calendar app that can be used for scheduling your work day and saves entries to local storage. The textareas also have different background colors depending on how the current time is compared to each time block.",
    deployedUrl: "https://markerpathis.github.io/work-day-scheduler/",
    githubUrl: "https://github.com/markerpathis/work-day-scheduler",
    image: projectScheduler,
  },
];

export default portfolioContent;
