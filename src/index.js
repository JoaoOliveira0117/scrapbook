import api from './services/api';
class TaskList {
    constructor(){
        this.titleInput = document.getElementById("messageTitle");
        this.messageInput = document.getElementById("messageBody");
        this.addScrapBtn = document.getElementById("addButton");
        this.scrapsField = document.getElementById("scrapsField");
        
        this.editTitleInput = document.getElementById("editMessageTitle");
        this.editMessageInput = document.getElementById("editMessageBody");
        this.scraps = [];

        this.getScraps();

        this.registerAddScrapBtnEvent();
    }

    async getScraps(){
        const {data: scraps} = await api.get('/scraps');

        this.scraps = scraps;
        this.renderScraps();
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
        console.log(this.scraps);
    }

    async addNewScrap(){
        const newTitle = this.titleInput.value; //pega o valor do titulo ao clicar no botão
        const newMessage = this.messageInput.value; // pega o valor da mensagem ao clicar no botão

        this.titleInput.value = ""; //deixa o valor em branco
        this.messageInput.value = ""; // ||

        const {data: {id,title,message}} = await api.post('/scraps',{title: newTitle, message: newMessage});

        this.scraps.push({ id,title,message}); //adiciona os valores no array scraps
        this.renderScraps(); //renderiza
    }

    async deleteScrap(event){ //deleta o scrap que recebeu o evento
        try {
            event.path[2].remove(); 

            const scrapId = event.path[2].getAttribute("id-scrap"); //scrapID recebe o ID do scrap

            await api.delete(`/scraps/${scrapId}`);

            const scrapIndex = this.scraps.findIndex(item => { //encontrar o indice
                return item.id == scrapId;
            });

            this.scraps.splice(scrapIndex, 1); //deleta o scrap do array também
        } catch (error){
            console.log(error);
        }
    }

    openEditModal(event){
        $("#editModal").modal("toggle");

        const scrapId = event.path[2].getAttribute("id-scrap");
        const scrapIndex = this.scraps.findIndex(item => { //encontrar o indice
            return item.id == scrapId;
        });

        this.editTitleInput.value = this.scraps[scrapIndex].title;
        this.editMessageInput.value = this.scraps[scrapIndex].message;
        
        document.getElementById("save").onclick = () => this.saveChanges(scrapId,scrapIndex);
    }

    async saveChanges(scrapId,scrapIndex){
        try {
            this.scraps[scrapIndex].id = scrapId;
            this.scraps[scrapIndex].title = this.editTitleInput.value;
            this.scraps[scrapIndex].message = this.editMessageInput.value

            await api.put(`/scraps/${scrapId}`,{title: this.editTitleInput.value, message: this.editMessageInput.value});

        this.renderScraps();
        $("#editModal").modal("hide");

        } catch (error) {
            console.log(error);
        }
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
