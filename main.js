const animes = document.querySelectorAll(".anime");

const obServer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anime-visible");
        }
    });
}, {
    threshold: 0.5
});


animes.forEach(anime => obServer.observe(anime));


const animesImg = document.querySelectorAll(".anime-two");

const obServerNew = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anime-deg");
        }
    });
}, {
    threshold: 0.5
});

animesImg.forEach(anime => obServerNew.observe(anime));

const animesblock = document.querySelectorAll(".anime-three");

const obServerblock = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anime-left-top");
        }
    });
}, {
    threshold: 0.5 
});

animesblock.forEach(anime => obServerblock.observe(anime));

const animestelefon = document.querySelectorAll(".anime-telefon");

const obServertelefon = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anime-telefon-open");
        }
    });
}, {
    threshold: 0.5 
});

animesblock.forEach(anime => obServertelefon.observe(anime));

