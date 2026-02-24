
const numberWords = [
  "ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN",
  "EIGHT","NINE","TEN","ELEVEN","TWELVE","THIRTEEN",
  "FOURTEEN","FIFTEEN","SIXTEEN","SEVENTEEN","EIGHTEEN",
  "NINETEEN","TWENTY"
];

function toWords(num) {
  return numberWords[num] || num.toString();
}

let ranked = [];                 // WORST → BEST
let remaining = [...episodes];   // insertion order preserved
let currentEpisode = null;
let compareIndex = 0;

// DOM ELEMENTS
const cardA = document.getElementById("card-a");
const cardB = document.getElementById("card-b");

startNextInsertion();

function startNextInsertion() {
  if (remaining.length === 0) {
    showResults();
    return;
  }

  currentEpisode = remaining.shift();

  if (ranked.length === 0) {
    ranked.push(currentEpisode);
    startNextInsertion();
    return;
  }

  compareIndex = 0;
  showComparison();
}

function showComparison() {
  const rankedEpisode = ranked[compareIndex];
  renderEpisode(cardA, currentEpisode);
  renderEpisode(cardB, rankedEpisode);
}

// RENDERING
function renderEpisode(card, episode) {
  const img = card.querySelector(".episode-image");
  const heading = card.querySelector(".episode-heading");
  const description = card.querySelector(".episode-description");

  img.src = episode.image;
  img.alt = episode.title;

  heading.innerHTML = `
    SEASON ${toWords(episode.season)}, CHAPTER ${toWords(episode.episode)}<br>
    <span class="episode-title">${episode.title}</span>
  `;

  description.textContent = episode.description;
}

function vote(choice) {
  if (choice === "a") {
    // current episode is WORSE
    ranked.splice(compareIndex, 0, currentEpisode);
    startNextInsertion();
  } else {
    // current episode is BETTER
    compareIndex++;

    if (compareIndex >= ranked.length) {
      ranked.push(currentEpisode);
      startNextInsertion();
    } else {
      showComparison();
    }
  }
}

// RESULTS
function showResults() {
  // 🔥 HIDE THE IMAGE + COMPARISON
  document.querySelector(".hero-card").style.display = "none";

  // 🔥 SHOW RESULTS
  document.getElementById("results-panel").style.display = "block";

  const container = document.getElementById("ranking-rows");
  container.innerHTML = "";

  ranked.forEach((ep, index) => {
    const row = document.createElement("div");
    row.className = "table-row";

    row.innerHTML = `
      <span class="rank">${index + 1}</span>   <!-- BEST = 1 -->
      <span class="name">${ep.title}</span>
      <span>${ep.season}</span>
      <span>${ep.episode}</span>
      <span>${ep.runtime}</span>
      <span>${formatDate(ep.airDate)}</span>
    `;

    container.appendChild(row);
  });
}


function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
