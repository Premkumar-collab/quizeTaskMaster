import gaming from "../assets/game.png";
import animals from "../assets/animals.png";
import cup from "../assets/cup.png";
import pen from "../assets/pen.png";
import headphone from "../assets/headphone.png";
import space from "../assets/rocket.png";

export const categoryData = {
  gaming: {
    id: "gaming",
    name: "Gaming",
    image: gaming,
    description: "Test your gaming knowledge with exciting trivia questions!",
    longDescription: "Dive into the world of gaming with questions covering classic arcade games, modern AAA titles, indie gems, gaming history, famous characters, and epic storylines. Challenge yourself and prove you're a true gaming expert!",
    color: "from-purple-500 to-pink-600",
    totalQuestions: 10,
    difficulty: "Medium",
    topics: [
      "Classic Games",
      "Modern Gaming",
      "Game Characters",
      "Gaming History",
      "Console Wars"
    ],
    funFact: "The first video game ever created was 'Tennis for Two' in 1958!"
  },
  music: {
    id: "music",
    name: "Music",
    image: headphone,
    description: "Challenge your music knowledge across all genres!",
    longDescription: "From classical symphonies to modern pop hits, test your knowledge of artists, albums, lyrics, and music history. Whether you're into rock, jazz, hip-hop, or electronic, there's something for every music lover!",
    color: "from-blue-500 to-cyan-600",
    totalQuestions: 15,
    difficulty: "Easy",
    topics: [
      "Pop Music",
      "Rock Legends",
      "Classical Music",
      "Hip Hop Culture",
      "Music Theory"
    ],
    funFact: "The most expensive musical instrument ever sold was a Stradivarius violin for $15.9 million!"
  },
  animals: {
    id: "animals",
    name: "Animals",
    image: animals,
    description: "Explore the fascinating world of wildlife!",
    longDescription: "Discover amazing facts about creatures from around the globe. From the deepest oceans to the highest mountains, learn about animal behavior, habitats, adaptations, and the incredible diversity of life on Earth!",
    color: "from-green-500 to-emerald-600",
    totalQuestions: 10,
    difficulty: "Easy",
    topics: [
      "Mammals",
      "Marine Life",
      "Birds",
      "Reptiles & Amphibians",
      "Endangered Species"
    ],
    funFact: "Octopuses have three hearts and blue blood!"
  },
  design: {
    id: "design",
    name: "Design",
    image: pen,
    description: "Test your knowledge of design principles and history!",
    longDescription: "Explore the world of visual design, from graphic design and typography to UX/UI principles and famous designers. Learn about design movements, color theory, and the evolution of design throughout history!",
    color: "from-orange-500 to-red-600",
    totalQuestions: 10,
    difficulty: "Hard",
    topics: [
      "Graphic Design",
      "Typography",
      "UX/UI Design",
      "Design History",
      "Color Theory"
    ],
    funFact: "The Coca-Cola logo has remained virtually unchanged since 1886!"
  },
  sports: {
    id: "sports",
    name: "Sports",
    image: cup,
    description: "Challenge yourself with sports trivia from around the world!",
    longDescription: "From football to Formula 1, basketball to boxing, test your knowledge of sporting legends, historic moments, records, and rules. Cover major tournaments, Olympic games, and unforgettable sporting achievements!",
    color: "from-yellow-500 to-orange-600",
    totalQuestions: 15,
    difficulty: "Medium",
    topics: [
      "Football/Soccer",
      "Basketball",
      "Olympics",
      "Motor Racing",
      "Records & Stats"
    ],
    funFact: "The longest tennis match in history lasted 11 hours and 5 minutes!"
  },
  space: {
    id: "space",
    name: "Space",
    image: space,
    description: "Journey through the cosmos with space trivia!",
    longDescription: "Explore the mysteries of the universe! Test your knowledge of planets, stars, galaxies, space exploration, famous astronauts, and groundbreaking discoveries. From the Big Bang to black holes, challenge yourself with cosmic questions!",
    color: "from-indigo-500 to-purple-600",
    totalQuestions: 15,
    difficulty: "Hard",
    topics: [
      "Solar System",
      "Space Exploration",
      "Astronomy",
      "Famous Astronauts",
      "Cosmic Phenomena"
    ],
    funFact: "One day on Venus is longer than one year on Venus!"
  }
};