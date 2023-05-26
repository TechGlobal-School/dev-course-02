// Get DOM elements
const form = document.getElementById("form");
const searchInput = document.getElementById("search");
const resultContainer = document.getElementById("container");

// https://api.lyrics.ovh/suggest/{whatever-user-types-on-input}
// https://api.lyrics.ovh/v1/${artist}/${songTitle}
const BASE_API = "https://api.lyrics.ovh";

const showData = (resData) => {
  const { data, total } = resData;

  if (total === 0) {
    resultContainer.innerHTML = `<p>No results found!</p>`;
    return;
  }

  resultContainer.innerHTML = `
   <div style="color: darkgreen" >Total songs: ${total}</div>
    <ul class="songs">
      ${data
        .map(
          (song) => `<li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
            </li>`
        )
        .join("")}
    </ul>
    <p>Next 15 songs</p>
  `;
};

async function searchSongs(term) {
  const res = await fetch(`${BASE_API}/suggest/${term}`);
  const resData = await res.json();

  // Show result
  showData(resData);
}

async function getLyrics(artist, title) {
  const res = await fetch(`${BASE_API}/v1/${artist}/${title}`);
  const resData = await res.json();

  // Show result
  // API is broken
  if (resData.error) {
    resultContainer.innerHTML = `<p>${resData.error}</p>`;
  }
}

// Submit form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchInput.value === "") {
    alert("Input can not be empty!");
  } else {
    searchSongs(searchInput.value);
  }
});

resultContainer.addEventListener("click", (event) => {
  const targetEl = event.target;
  if (targetEl.tagName === "BUTTON") {
    // search lyrics
    const artist = targetEl.getAttribute("data-artist");
    const songTitle = targetEl.getAttribute("song-songtitle");

    getLyrics(artist, songTitle);
  }
});
