console.log("JS CONNECTED");
const series = [
    {
        title: "Prison Break",
        year: 2005,
        genre: "Action, Crime, Drama, Thriller",
        rating: 8.3,
        description: "A structural engineer, Michael Scofield, deliberately gets himself sent to Fox River Penitentiary to break out his innocent brother Lincoln Burrows, who is on death row.",
        poster: "pics/Prison Break.jpeg",
        video: "https://youtu.be/AL9zLctDJaU?si=KeSCkPs4oC77TC_W"
    },
    {
        title: "The Flash",
        year: 2014,
        genre: "Action, Adventure, Drama, Sci-Fi",
        rating: 7.5,
        description: "After being struck by lightning, CSI investigator Barry Allen awakens with superhuman speed and becomes the Flash, fighting crime and meta-humans in Central City.",
        poster: "pics/flash.jpeg",
        video: "https://www.youtube.com/watch?v=Yj0l7iGKh8g"
    },
    {
        title: "SEAL Team",
        year: 2017,
        genre: "Action, Drama, Military, War",
        rating: 7.8,
        description: "The series follows the lives of the elite Navy SEALs of Bravo Team as they plan and execute dangerous missions worldwide while balancing personal lives.",
        poster: "pics/Seal Team.jpeg",
        video: "https://www.youtube.com/watch?v=9P8aV0H4a8k"
    }
    ,{
     title: "Suits",
    year: 2011,
    genre: "Legal Drama, Comedy-Drama",
    rating: 8.4,
    description: "At a top Manhattan corporate law firm, brilliant college dropout Mike Ross starts working with Harvey Specter, one of New York City's best lawyers, despite never having attended law school.",
    poster: "pics/Suits.jpeg",
    video: "https://www.youtube.com/watch?v=85z53bAebs0"
     },
{
    title: "The Blacklist",
    year: 2013,
    genre: "Crime, Drama, Thriller",
    rating: 8.0,
    description: "An elusive criminal mastermind surrenders to the FBI and offers to help capture dangerous criminals, but only if he can work with a particular rookie profiler.",
    poster: "pics/The blacklist.jpeg",
    video: ""
},
{
    title: "Designated Survivor",
    year: 2016,
    genre: "Drama, Thriller, Political",
    rating: 7.5,
    description: "After a catastrophic attack kills the president and those ahead of him in succession, a low-level cabinet member unexpectedly becomes president and must uncover who was responsible.",
    poster: "pics/Designated Survivor.jpeg"
},
{
    title: "White Collar",
    year: 2009,
    genre: "Crime, Drama, Mystery",
    rating: 8.2,
    description: "A brilliant con artist forms an unlikely partnership with an FBI agent to help solve difficult cases while trying to earn his freedom.",
    poster: "pics/White Collar.jpeg"
},

{
        title: "Special Ops: Lioness",
        year: 2023,
        genre: "Action, Drama, Thriller",
        rating: 7.8,
        description: "CIA station chief Joe leads the Lioness program, training and managing female undercover operatives. Marine Cruz Manuelos is recruited to go undercover to bring down a terrorist organization from within.",
        poster: "pics/Lioness.jpeg",
        video: ""
    },
    {
        title: "The Punisher",
        year: 2017,
        genre: "Action, Crime, Drama",
        rating: 8.4,
        description: "After his family is murdered, Marine veteran Frank Castle becomes the vigilante known as The Punisher, seeking revenge and uncovering a larger conspiracy.",
        poster: "pics/Punisher.jpeg",
        video: ""
    },
    {
        title: "The Night Agent",
        year: 2023,
        genre: "Action, Drama, Thriller",
        rating: 7.5,
        description: "Low-level FBI agent Peter Sutherland works in the White House basement manning a phone that never rings — until one night it does, thrusting him into a fast-moving conspiracy reaching the Oval Office.",
        poster: "pics/The Night Agent.jpeg",
        video: ""
    },
    {
        title: "Motherland: Fort Salem",
        year: 2020,
        genre: "Drama, Fantasy, Sci-Fi, Thriller",
        rating: 7.3,
        description: "In an alternate America where witches ended persecution by agreeing to serve the government, three young women train in combat magic to fight terrorist threats.",
        poster: "pics/Motherland fort salem.jpeg",
        video: ""
    },
    {
        title: "Outer Banks",
        year: 2020,
        genre: "Action, Adventure, Mystery, Drama",
        rating: 7.5,
        description: "In the Outer Banks of North Carolina, a tight-knit group of teens called the Pogues hunt for a legendary treasure tied to the disappearance of the group's leader's father.",
        poster: "pics/Outer banks!!.jpeg",
        video: ""
    },
    {
        title: "Burn Notice",
        year: 2007,
        genre: "Action, Crime, Drama, Spy",
        rating: 8.0,
        description: "Blacklisted spy Michael Westen is burned and stranded in Miami, using his special ops training to help people in trouble while trying to find out who burned him and why.",
        poster: "pics/Burn Notice.jpeg",
        video: ""
    },
    {
        title: "Homeland",
        year: 2011,
        genre: "Espionage, Thriller, Drama, Crime",
        rating: 8.3,
        description: "CIA officer Carrie Mathison suspects Marine Sergeant Nicholas Brody, who was held captive by al-Qaeda, has been turned and poses a threat to national security.",
        poster: "pics/Homeland.jpeg",
        video: ""
    },
    {
        title: "Person of Interest",
        year: 2011,
        genre: "Action, Crime, Drama, Sci-Fi",
        rating: 8.5,
        description: "A former CIA operative and a reclusive billionaire use an advanced AI called The Machine that predicts violent crimes to prevent them, saving persons of interest before they become victims or perpetrators.",
        poster: "pics/person of intrest.jpeg",
        video: ""
    },

    {
        title: "Vikings",
        year: 2013,
        genre: "Action, Adventure, Drama, History",
        rating: 8.5,
        description: "Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age, as he rises to become King of the Viking tribes and raids distant shores.",
        poster: "pics/Vikings.jpeg",
        video: "videos/Vikings Season 1 Trailer.mp4"
    },
{
    title: "Blindspot",
    year: 2015,
    genre: "Crime, Drama, Action, Mystery, Thriller",
    rating: 7.4,
    description: "A beautiful woman is found naked in Times Square with her body covered in cryptic tattoos and no memory of who she is. The FBI discovers her tattoos contain clues to crimes they must solve.",
    poster: "pics/Blindspot.jpeg",
    video: "https://www.youtube.com/watch?v=AbP1b3gJ8vA"
}
]



    console.log("Series Vault JS connected!");
    
    const title = document.querySelector("#site-title");
    title.textContent = "My Series Vault";
    title.style.color = "white";
    

    const background = document.querySelector("#background");
    background.style.background = "black";
    
const btn = document.querySelector("#search-btn");
btn.style.color = "black";
btn.textContent = "Search series";
const searchInput = document.querySelector("#search-input");
btn.addEventListener("click", function() {

    const searchTerm = searchInput.value;

    const results = series.filter(function(show) {
        return show.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  

   displaySeries(results);

    

   
});
function displaySeries(seriesToDisplay) {

    const cards = seriesToDisplay.map(function(show) {
        return '<article class="series-card" data-title="' + show.title + '">' +
            '<img class="series-poster" src="' + show.poster + '" alt="' + show.title + ' poster">' +
            '<h2 class="series-title">' + show.title + '</h2>' +
            '<p class="series-meta">' + show.genre + '</p>' +
            '</article>';
    });

    const container = document.querySelector("#series-container");

    container.innerHTML = cards.join("");
}
displaySeries(series);
const player = document.querySelector("#player");
const articles = document.querySelectorAll(".series-card");

articles.forEach(function(article) {
    article.addEventListener("mouseenter", function() {
        const show = series.find(function(show) {
            return show.title === article.dataset.title;
        });

        if (show.video) {
            player.innerHTML =
                '<video src="' + show.video + '" autoplay muted controls playsinline></video>';
        } else {
            player.innerHTML = '<div class="player-empty">Preview unavailable</div>';
        }
    });
});
