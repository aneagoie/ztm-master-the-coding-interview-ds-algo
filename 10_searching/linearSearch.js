const beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];


beasts.indexOf("Godzilla");

beasts.findIndex((item) => {
    return item === "Godzilla";
});

beasts.find((item) => {
    return item === "Godzilla";
});

beasts.includes("Godzilla");