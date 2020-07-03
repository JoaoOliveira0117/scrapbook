let titleInput = document.getElementById("titleInput");
let messageInput = document.getElementById("messageField");
let addScrapBtn = document.getElementById("addButton");
let scrapsField = document.getElementById("scrapsField");

let scraps = [];

function renderScraps() {
  scrapsField.innerHTML = "";

  for (const scrap of scraps) {
    let position = scraps.indexOf(scrap);
    scrapsField.innerHTML += createScrapCard(
      scrap.title,
      scrap.message,
      position
    );
  }
}

function addNewScrap() {
  let title = titleInput.value;
  let message = messageInput.value;

  titleInput.value = "";
  messageInput.value = "";

  scraps.push({ title, message });

  renderScraps();
}

function createScrapCard(title, message, position) {
  return `
  <div class="message-card card text-white bg-dark m-2 col-3" id="card${position}">
    <div class="card-header font-weight-bold">${title}
        <input type="image" src="/img/icon.png" class="removeButton" onclick="removeScrapCard(${position})">
    </div>
    <div class="card-body">
      <p class="card-text">
        ${message}
      </p>
    </div>
  </div>
  `;
}

function removeScrapCard(index){
    let scrapcard = document.getElementById(`card${index}`);
    scrapcard.remove();
}

renderScraps();
addScrapBtn.onclick = addNewScrap;