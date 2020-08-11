class TaskList {
    constructor(){
        this.titleInput = document.getElementById("messageTitle");
        this.messageInput = document.getElementById("messageBody");
        this.addScrapBtn = document.getElementById("addButton");
        this.scrapsField = document.getElementById("scrapsField");
        
        this.editTitleInput = document.getElementById("editMessageTitle");
        this.editMessageInput = document.getElementById("editMessageBody");
        this.scraps = [];

        this.registerAddScrapBtnEvent();
    }

    generateScrapID(){
        return this.scraps.length + 1; //pega a quantidade de scraps que a variavael possui e soma mais 1 pra gerar um numero
    }

    registerAddScrapBtnEvent(){
        this.addScrapBtn.onclick = () => this.addNewScrap(); //onclick realiza a função =>
    }

    setButtonEvents(){
        document.querySelectorAll(".delete-button").forEach((item) => { //executa a função (item) em cada elemento
            item.onclick = (event) => this.deleteScrap(event); //o item clicado gera um evento, a função deleta quando detectar o evento.
        });

        document.querySelectorAll(".edit-scrap").forEach((item) => {
            item.onclick = (event) => this.openEditModal(event);
        })
    }

    renderScraps() { //RENDERIZA O SCRAP
        this.scrapsField.innerHTML = ""; //deixa o campo em branco

        for (const scrap of this.scraps) { //pra cada scrap de scraps da classe
            const cardHtml = this.createScrapCard(scrap.id,scrap.title,scrap.message); //armazena o card do scrapbook

            this.insertHTML(cardHtml);//insere o card
        }

        this.setButtonEvents(); //adiciona a função acima ao card
    }

    addNewScrap(){
        const id = this.generateScrapID(); //gera o id lá de cima
        const title = this.titleInput.value; //pega o valor do titulo ao clicar no botão
        const message = this.messageInput.value; // pega o valor da mensagem ao clicar no botão

        this.titleInput.value = ""; //deixa o valor em branco
        this.messageInput.value = ""; // ||

        this.scraps.push({ id,title,message}); //adiciona os valores no array scraps
        this.renderScraps(); //renderiza
    }

    deleteScrap(event){ //deleta o scrap que recebeu o evento
        event.path[2].remove(); //pedir explicação dos paths pro professor(embora tu ja saiba um pouco) - remove.

        const scrapId = event.path[2].getAttribute("id-scrap"); //scrapID recebe o ID do scrap
        const scrapIndex = this.scraps.findIndex(item => { //encontrar o indice
            return item.id == scrapId;
        });

        this.scraps.splice(scrapIndex, 1); //deleta o scrap do array também
    }

    openEditModal(event){
        $("#editModal").modal("toggle");

        const scrapId = event.path[2].getAttribute("id-scrap");
        const scrapIndex = this.scraps.findIndex(item => { //encontrar o indice
            return item.id == scrapId;
        });

        this.editTitleInput.value = this.scraps[scrapIndex].title;
        this.editMessageInput.value = this.scraps[scrapIndex].message;
        
        document.getElementById("save").onclick = () => this.saveChanges(scrapIndex);
    }

    saveChanges(position){
        let title = this.editTitleInput.value;
        let message = this.editMessageInput.value

        this.scraps[position] = {position,title, message};
        this.renderScraps();
        $("#editModal").modal("hide");
    }

    insertHTML(html){
        this.scrapsField.innerHTML+= html; //insere o card no HTML
    }

    createScrapCard(id,title,message){
        return `
        <div class="message-cards card text-white bg-dark m-2 col-3" id-scrap="${id}">
            <div class="card-header font-weight-bold" id="titulo">${title}</div>
            <div class="card-body">
                <p class="card-text" id="mensagem">${message}</p>
            </div>
            <div class="w-100 d-flex justify-content-end pr-2 pb-2">
                <button class="btn btn-danger mr-1 delete-button">Deletar</button>
                <button class="btn btn-info edit-scrap">Editar</button>
            </div>
        </div>
        `;
    }
}
new TaskList();