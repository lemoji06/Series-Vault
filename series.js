console.log("JS CONNECTED");
const series = [
    {
        title: "Prison Break",
        year: 2005,
        genre: "Action, Crime, Drama, Thriller",
        rating: 8.3,
        description: "A structural engineer, Michael Scofield, deliberately gets himself sent to Fox River Penitentiary to break out his innocent brother Lincoln Burrows, who is on death row.",
        poster: "Prison Break.jpeg",
        video: "https://youtu.be/AL9zLctDJaU?si=KeSCkPs4oC77TC_W"
    },

    {
        title: "Vikings",
        year: 2013,
        genre: "Action, Adventure, Drama, History",
        rating: 8.5,
        description: "Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age, as he rises to become King of the Viking tribes and raids distant shores.",
        poster: "Vikings.jpeg",
        video: "https://www.youtube.com/watch?v=9GgxinPwAGc"
    },
    {
        title: "The Flash",
        year: 2014,
        genre: "Action, Adventure, Drama, Sci-Fi",
        rating: 7.5,
        description: "After being struck by lightning, CSI investigator Barry Allen awakens with superhuman speed and becomes the Flash, fighting crime and meta-humans in Central City.",
        poster: "flash.jpeg",
        video: "https://www.youtube.com/watch?v=Yj0l7iGKh8g"
    },
    {
        title: "SEAL Team",
        year: 2017,
        genre: "Action, Drama, Military, War",
        rating: 7.8,
        description: "The series follows the lives of the elite Navy SEALs of Bravo Team as they plan and execute dangerous missions worldwide while balancing personal lives.",
        poster: "Seal Team.jpeg",
        video: "https://www.youtube.com/watch?v=9P8aV0H4a8k"
    }
    ,{
     title: "Suits",
    year: 2011,
    genre: "Legal Drama, Comedy-Drama",
    rating: 8.4,
    description: "At a top Manhattan corporate law firm, brilliant college dropout Mike Ross starts working with Harvey Specter, one of New York City's best lawyers, despite never having attended law school.",
    poster: "Suits.jpeg",
    video: "https://www.youtube.com/watch?v=85z53bAebs0"
     }
];
    const titles = series.map(function(show) {
            return show.title + " (" + show.year + ")";
    });

  
        console.log(titles);
    const bestRatings = series.filter(function(show) {
        return show.rating >= 8.0;
    });
    console.log(bestRatings);
    const greatestRating = bestRatings.map(function(show) {
        return show.title;
    });
    console.log(greatestRating);
    const totalRating = bestRatings.reduce(function(total, show) {
        return total + show.rating;
    }, 0);
    console.log(totalRating);
   const averageRating = totalRating / bestRatings.length;
    console.log(averageRating);

    console.log("Series Vault JS connected!");
    
    const title = document.querySelector("#site-title");
    title.textContent = "My Series Vault";
    title.style.color = "white";
    

    const background = document.querySelector("#background");
    background.style.background = "black";
    
const btn = document.querySelector("#search-btn");
btn.style.color = "black";
btn.textContent = "Search series";
btn.addEventListener("click", function() {
    title.textContent = "Searching series...";
    title.classList.toggle("highlight");
    title.classList.add("clicked");
});

const cards = series.map(function(show) {
    return '<article class="series-card">' +
        '<img class="series-poster" src="' + show.poster + '" alt="' + show.title + ' poster">' +
        '<h2 class="series-title">' + show.title + '</h2>' +
        '<p class="series-meta">' + show.genre + '</p>' +
        '</article>';
});

console.log(cards);
const container = document.querySelector("#series-container");
container.innerHTML = cards.join("");


const seriesPrime = [
    {
        title: "Prison Break"
    },
    {
        title: "Vikings"
    },
    {
        title: "The Flash"
    },
    {
        title: "SEAL Team"
    },
    {
        title: "Suits"
    }
];

const seriesList = seriesPrime.map(function(show) {
    return '<h2 class="series-title">' + show.title + '</h2>';
});

const seriesContainer = document.getElementById("series-list");

seriesContainer.innerHTML = seriesList.join("");