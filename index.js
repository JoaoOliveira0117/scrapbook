let titleInput = document.getElementById("titleInput");
let messageInput = document.getElementById("messageField");
let addScrapBtn = document.getElementById("addButton");
let scrapsField = document.getElementById("scrapsField");

let scraps = JSON.parse(localStorage.getItem("message_list")) || [];

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
  saveInStorage();
}

function createScrapCard(title, message, position) {
  return `
  <div class="message-cards card text-white bg-dark m-2 col-3">
    <div class="card-header font-weight-bold">${title}</div>
    <div class="card-body">
      <p class="card-text">
        ${message}
      </p>
    </div>
  </div>
  `;
}

function saveInStorage(){
    localStorage.setItem('message_list', JSON.stringify(scraps));
}

renderScraps();
addScrapBtn.onclick = addNewScrap;