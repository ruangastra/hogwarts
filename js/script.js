// =====================
// Floating Candles
// =====================

const candleContainer = document.getElementById("candles-container");

for(let i = 0; i < 50; i++){
    const candle = document.createElement("div");

    candle.classList.add("candle");
    
    const side = Math.random() < 0.5;

    if(side){
        candle.style.left = (Math.random() * 7) + "%";
    }
    else{
        candle.style.left = (93 + Math.random() * 7) + "%";
    }

    const size = 0.7 + Math.random() * 0.8;
    candle.style.transform = `scale(${size})`;
    
    candle.style.top = (Math.random() * window.innerHeight) + "px";
    candle.style.animationDuration = (10 + Math.random() * 10) + "s";
    candleContainer.appendChild(candle);
}

// =====================
// Magic Particles
// =====================

const particles = document.getElementById("magic-particles");

for(let i = 0; i < 80; i++){
    const star = document.createElement("span");

    star.classList.add("particle");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    particles.appendChild(star);
}

// =====================
// Ambient Music
// =====================

const music = document.getElementById("bgMusic");
window.addEventListener("load", () => {
    music.volume = 0.4;
    const playPromise = music.play();

    if(playPromise !== undefined){
        playPromise.catch(() => {
            document.addEventListener("click", () => music.play(), { once:true });
        });
    }
});

// =====================
// House Selection
// =====================

function selectHouse(house){
    localStorage.setItem(
        "hogwartsHouse",
        house
    );
    applyHouseTheme(house);
}

function applyHouseTheme(house){
    const banner = document.getElementById("house-banner");

    banner.innerHTML = `⚜ ${house} House ⚜`;

    const root = document.documentElement;

    switch(house){
        case "Gryffindor":
            root.style.setProperty(
                "--accent",
                "#ae0001"
            );
            break;

        case "Slytherin":
            root.style.setProperty(
                "--accent",
                "#1a472a"
            );
            break;

        case "Ravenclaw":
            root.style.setProperty(
                "--accent",
                "#0e1a40"
            );
            break;

        case "Hufflepuff":
            root.style.setProperty(
                "--accent",
                "#ecb939"
            );
            break;
    }
}

// =====================
// Restore House
// =====================

const savedHouse = localStorage.getItem("hogwartsHouse");

if(savedHouse){
    applyHouseTheme(savedHouse);
}

// =====================
// Spell Spark Effect
// =====================

document.addEventListener("click", (e) => {
    const spark = document.createElement("div");

    spark.classList.add("spark");
    spark.style.left = e.pageX + "px";
    spark.style.top = e.pageY + "px";

    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 1000);
});