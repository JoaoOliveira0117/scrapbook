"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskList = /*#__PURE__*/function () {
  function TaskList() {
    _classCallCheck(this, TaskList);

    this.titleInput = document.getElementById("messageTitle");
    this.messageInput = document.getElementById("messageBody");
    this.addScrapBtn = document.getElementById("addButton");
    this.scrapsField = document.getElementById("scrapsField");
    this.editTitleInput = document.getElementById("editMessageTitle");
    this.editMessageInput = document.getElementById("editMessageBody");
    this.scraps = [];
    this.registerAddScrapBtnEvent();
  }

  _createClass(TaskList, [{
    key: "generateScrapID",
    value: function generateScrapID() {
      return this.scraps.length + 1; //pega a quantidade de scraps que a variavael possui e soma mais 1 pra gerar um numero
    }
  }, {
    key: "registerAddScrapBtnEvent",
    value: function registerAddScrapBtnEvent() {
      var _this = this;

      this.addScrapBtn.onclick = function () {
        return _this.addNewScrap();
      }; //onclick realiza a função =>

    }
  }, {
    key: "setButtonEvents",
    value: function setButtonEvents() {
      var _this2 = this;

      document.querySelectorAll(".delete-button").forEach(function (item) {
        //executa a função (item) em cada elemento
        item.onclick = function (event) {
          return _this2.deleteScrap(event);
        }; //o item clicado gera um evento, a função deleta quando detectar o evento.

      });
      document.querySelectorAll(".edit-scrap").forEach(function (item) {
        item.onclick = function (event) {
          return _this2.openEditModal(event);
        };
      });
    }
  }, {
    key: "renderScraps",
    value: function renderScraps() {
      //RENDERIZA O SCRAP
      this.scrapsField.innerHTML = ""; //deixa o campo em branco

      var _iterator = _createForOfIteratorHelper(this.scraps),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var scrap = _step.value;
          //pra cada scrap de scraps da classe
          var cardHtml = this.createScrapCard(scrap.id, scrap.title, scrap.message); //armazena o card do scrapbook

          this.insertHTML(cardHtml); //insere o card
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.setButtonEvents(); //adiciona a função acima ao card
    }
  }, {
    key: "addNewScrap",
    value: function addNewScrap() {
      var id = this.generateScrapID(); //gera o id lá de cima

      var title = this.titleInput.value; //pega o valor do titulo ao clicar no botão

      var message = this.messageInput.value; // pega o valor da mensagem ao clicar no botão

      this.titleInput.value = ""; //deixa o valor em branco

      this.messageInput.value = ""; // ||

      this.scraps.push({
        id: id,
        title: title,
        message: message
      }); //adiciona os valores no array scraps

      this.renderScraps(); //renderiza
    }
  }, {
    key: "deleteScrap",
    value: function deleteScrap(event) {
      //deleta o scrap que recebeu o evento
      event.path[2].remove(); //pedir explicação dos paths pro professor(embora tu ja saiba um pouco) - remove.

      var scrapId = event.path[2].getAttribute("id-scrap"); //scrapID recebe o ID do scrap

      var scrapIndex = this.scraps.findIndex(function (item) {
        //encontrar o indice
        return item.id == scrapId;
      });
      this.scraps.splice(scrapIndex, 1); //deleta o scrap do array também
    }
  }, {
    key: "openEditModal",
    value: function openEditModal(event) {
      var _this3 = this;

      $("#editModal").modal("toggle");
      var scrapId = event.path[2].getAttribute("id-scrap");
      var scrapIndex = this.scraps.findIndex(function (item) {
        //encontrar o indice
        return item.id == scrapId;
      });
      this.editTitleInput.value = this.scraps[scrapIndex].title;
      this.editMessageInput.value = this.scraps[scrapIndex].message;

      document.getElementById("save").onclick = function () {
        return _this3.saveChanges(scrapIndex);
      };
    }
  }, {
    key: "saveChanges",
    value: function saveChanges(position) {
      var title = this.editTitleInput.value;
      var message = this.editMessageInput.value;
      this.scraps[position] = {
        position: position,
        title: title,
        message: message
      };
      this.renderScraps();
      $("#editModal").modal("hide");
    }
  }, {
    key: "insertHTML",
    value: function insertHTML(html) {
      this.scrapsField.innerHTML += html; //insere o card no HTML
    }
  }, {
    key: "createScrapCard",
    value: function createScrapCard(id, title, message) {
      return "\n        <div class=\"message-cards card text-white bg-dark m-2 col-3\" id-scrap=\"".concat(id, "\">\n            <div class=\"card-header font-weight-bold\" id=\"titulo\">").concat(title, "</div>\n            <div class=\"card-body\">\n                <p class=\"card-text\" id=\"mensagem\">").concat(message, "</p>\n            </div>\n            <div class=\"w-100 d-flex justify-content-end pr-2 pb-2\">\n                <button class=\"btn btn-danger mr-1 delete-button\">Deletar</button>\n                <button class=\"btn btn-info edit-scrap\">Editar</button>\n            </div>\n        </div>\n        ");
    }
  }]);

  return TaskList;
}();

new TaskList();
