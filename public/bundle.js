/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soma */ \"./src/soma.js\");\n// class TaskList {\n//     constructor(){\n//         this.titleInput = document.getElementById(\"messageTitle\");\n//         this.messageInput = document.getElementById(\"messageBody\");\n//         this.addScrapBtn = document.getElementById(\"addButton\");\n//         this.scrapsField = document.getElementById(\"scrapsField\");\n//         this.editTitleInput = document.getElementById(\"editMessageTitle\");\n//         this.editMessageInput = document.getElementById(\"editMessageBody\");\n//         this.scraps = [];\n//         this.registerAddScrapBtnEvent();\n//     }\n//     generateScrapID(){\n//         return this.scraps.length + 1; //pega a quantidade de scraps que a variavael possui e soma mais 1 pra gerar um numero\n//     }\n//     registerAddScrapBtnEvent(){\n//         this.addScrapBtn.onclick = () => this.addNewScrap(); //onclick realiza a função =>\n//     }\n//     setButtonEvents(){\n//         document.querySelectorAll(\".delete-button\").forEach((item) => { //executa a função (item) em cada elemento\n//             item.onclick = (event) => this.deleteScrap(event); //o item clicado gera um evento, a função deleta quando detectar o evento.\n//         });\n//         document.querySelectorAll(\".edit-scrap\").forEach((item) => {\n//             item.onclick = (event) => this.openEditModal(event);\n//         })\n//     }\n//     renderScraps() { //RENDERIZA O SCRAP\n//         this.scrapsField.innerHTML = \"\"; //deixa o campo em branco\n//         for (const scrap of this.scraps) { //pra cada scrap de scraps da classe\n//             const cardHtml = this.createScrapCard(scrap.id,scrap.title,scrap.message); //armazena o card do scrapbook\n//             this.insertHTML(cardHtml);//insere o card\n//         }\n//         this.setButtonEvents(); //adiciona a função acima ao card\n//     }\n//     addNewScrap(){\n//         const id = this.generateScrapID(); //gera o id lá de cima\n//         const title = this.titleInput.value; //pega o valor do titulo ao clicar no botão\n//         const message = this.messageInput.value; // pega o valor da mensagem ao clicar no botão\n//         this.titleInput.value = \"\"; //deixa o valor em branco\n//         this.messageInput.value = \"\"; // ||\n//         this.scraps.push({ id,title,message}); //adiciona os valores no array scraps\n//         this.renderScraps(); //renderiza\n//     }\n//     deleteScrap(event){ //deleta o scrap que recebeu o evento\n//         event.path[2].remove(); //pedir explicação dos paths pro professor(embora tu ja saiba um pouco) - remove.\n//         const scrapId = event.path[2].getAttribute(\"id-scrap\"); //scrapID recebe o ID do scrap\n//         const scrapIndex = this.scraps.findIndex(item => { //encontrar o indice\n//             return item.id == scrapId;\n//         });\n//         this.scraps.splice(scrapIndex, 1); //deleta o scrap do array também\n//     }\n//     openEditModal(event){\n//         $(\"#editModal\").modal(\"toggle\");\n//         const scrapId = event.path[2].getAttribute(\"id-scrap\");\n//         const scrapIndex = this.scraps.findIndex(item => { //encontrar o indice\n//             return item.id == scrapId;\n//         });\n//         this.editTitleInput.value = this.scraps[scrapIndex].title;\n//         this.editMessageInput.value = this.scraps[scrapIndex].message;\n//         document.getElementById(\"save\").onclick = () => this.saveChanges(scrapIndex);\n//     }\n//     saveChanges(position){\n//         let title = this.editTitleInput.value;\n//         let message = this.editMessageInput.value\n//         this.scraps[position] = {position,title, message};\n//         this.renderScraps();\n//         $(\"#editModal\").modal(\"hide\");\n//     }\n//     insertHTML(html){\n//         this.scrapsField.innerHTML+= html; //insere o card no HTML\n//     }\n//     createScrapCard(id,title,message){\n//         return `\n//         <div class=\"message-cards card text-white bg-dark m-2 col-3\" id-scrap=\"${id}\">\n//             <div class=\"card-header font-weight-bold\" id=\"titulo\">${title}</div>\n//             <div class=\"card-body\">\n//                 <p class=\"card-text\" id=\"mensagem\">${message}</p>\n//             </div>\n//             <div class=\"w-100 d-flex justify-content-end pr-2 pb-2\">\n//                 <button class=\"btn btn-danger mr-1 delete-button\">Deletar</button>\n//                 <button class=\"btn btn-info edit-scrap\">Editar</button>\n//             </div>\n//         </div>\n//         `;\n//     }\n// }\n// new TaskList();");

/***/ }),

/***/ "./src/soma.js":
/*!*********************!*\
  !*** ./src/soma.js ***!
  \*********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nvar soma = function soma(a, b) {\n  return a + b;\n};\n\n//# sourceURL=webpack:///./src/soma.js?");

/***/ })

/******/ });