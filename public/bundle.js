/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate)
/* harmony export */ });
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

/***/ }),

/***/ "./src/view/board-view.js":
/*!********************************!*\
  !*** ./src/view/board-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoardTemplate": () => (/* binding */ createBoardTemplate)
/* harmony export */ });
const createBoardTemplate = () => `<section class="board container">
    <div class="board__sort-list">
      <a href="#" class="board__sort-item">SORT BY DEFAULT</a>
      <a href="#" class="board__sort-item">SORT BY DATE up</a>
      <a href="#" class="board__sort-item">SORT BY DATE down</a>
    </div>
    <div class="board__tasks"></div>
  </section>`;

/***/ }),

/***/ "./src/view/filter-view.js":
/*!*********************************!*\
  !*** ./src/view/filter-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilterTemplate": () => (/* binding */ createFilterTemplate)
/* harmony export */ });
const createFilterTemplate = () => `<section class="main__filter filter container">
    <input
      type="radio"
      id="filter__all"
      class="filter__input visually-hidden"
      name="filter"
      checked
    />
    <label for="filter__all" class="filter__label">
      All <span class="filter__all-count">13</span></label
    >
    <input
      type="radio"
      id="filter__overdue"
      class="filter__input visually-hidden"
      name="filter"
      disabled
    />
    <label for="filter__overdue" class="filter__label"
      >Overdue <span class="filter__overdue-count">0</span></label
    >
    <input
      type="radio"
      id="filter__today"
      class="filter__input visually-hidden"
      name="filter"
      disabled
    />
    <label for="filter__today" class="filter__label"
      >Today <span class="filter__today-count">0</span></label
    >
    <input
      type="radio"
      id="filter__favorites"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__favorites" class="filter__label"
      >Favorites <span class="filter__favorites-count">1</span></label
    >
    <input
      type="radio"
      id="filter__repeating"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__repeating" class="filter__label"
      >Repeating <span class="filter__repeating-count">1</span></label
    >
    <input
      type="radio"
      id="filter__archive"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__archive" class="filter__label"
      >Archive <span class="filter__archive-count">115</span></label
    >
  </section>`;

/***/ }),

/***/ "./src/view/load-more-button-view.js":
/*!*******************************************!*\
  !*** ./src/view/load-more-button-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLoadMoreButtonTemplate": () => (/* binding */ createLoadMoreButtonTemplate)
/* harmony export */ });
const createLoadMoreButtonTemplate = () => '<button class="load-more" type="button">load more</button>';

/***/ }),

/***/ "./src/view/site-menu-view.js":
/*!************************************!*\
  !*** ./src/view/site-menu-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSiteMenuTemplate": () => (/* binding */ createSiteMenuTemplate)
/* harmony export */ });
const createSiteMenuTemplate = () => `<section class="control__btn-wrap">
    <input
      type="radio"
      name="control"
      id="control__new-task"
      class="control__input visually-hidden"
    />
    <label for="control__new-task" class="control__label control__label--new-task"
      >+ ADD NEW TASK</label
    >
    <input
      type="radio"
      name="control"
      id="control__task"
      class="control__input visually-hidden"
      checked
    />
    <label for="control__task" class="control__label">TASKS</label>
    <input
      type="radio"
      name="control"
      id="control__statistic"
      class="control__input visually-hidden"
    />
    <label for="control__statistic" class="control__label"
      >STATISTICS</label
    >
  </section>`;

/***/ }),

/***/ "./src/view/task-edit-view.js":
/*!************************************!*\
  !*** ./src/view/task-edit-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskEditTemplate": () => (/* binding */ createTaskEditTemplate)
/* harmony export */ });
const createTaskEditTemplate = () => `<article class="card card--edit card--yellow card--repeat">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >This is example of task edit. You can set date and chose repeating days and color.</textarea>
          </label>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">yes</span>
              </button>
              <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder=""
                    name="date"
                    value="23 September"
                  />
                </label>
              </fieldset>
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">yes</span>
              </button>
              <fieldset class="card__repeat-days">
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-4"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-4"
                    >mo</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-4"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-4"
                    >tu</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-4"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-4"
                    >we</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-4"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-4"
                    >th</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-4"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-4"
                    >fr</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-4"
                  />
                  <label class="card__repeat-day" for="repeat-sa-4"
                    >sa</label
                  >
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-4"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-4"
                    >su</label
                  >
                </div>
              </fieldset>
            </div>
          </div>
          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-4"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
              />
              <label
                for="color-black-4"
                class="card__color card__color--black"
                >black</label
              >
              <input
                type="radio"
                id="color-yellow-4"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
                checked
              />
              <label
                for="color-yellow-4"
                class="card__color card__color--yellow"
                >yellow</label
              >
              <input
                type="radio"
                id="color-blue-4"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label
                for="color-blue-4"
                class="card__color card__color--blue"
                >blue</label
              >
              <input
                type="radio"
                id="color-green-4"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label
                for="color-green-4"
                class="card__color card__color--green"
                >green</label
              >
              <input
                type="radio"
                id="color-pink-4"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label
                for="color-pink-4"
                class="card__color card__color--pink"
                >pink</label
              >
            </div>
          </div>
        </div>
        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;

/***/ }),

/***/ "./src/view/task-view.js":
/*!*******************************!*\
  !*** ./src/view/task-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskTemplate": () => (/* binding */ createTaskTemplate)
/* harmony export */ });
const createTaskTemplate = () => `<article class="card card--black">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <p class="card__text">Example default task with default color.</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">23 September</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu-view.js */ "./src/view/site-menu-view.js");
/* harmony import */ var _view_filter_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filter-view.js */ "./src/view/filter-view.js");
/* harmony import */ var _view_task_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/task-view.js */ "./src/view/task-view.js");
/* harmony import */ var _view_task_edit_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/task-edit-view.js */ "./src/view/task-edit-view.js");
/* harmony import */ var _view_load_more_button_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/load-more-button-view.js */ "./src/view/load-more-button-view.js");
/* harmony import */ var _view_board_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/board-view.js */ "./src/view/board-view.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render.js */ "./src/render.js");







const TASK_COUNT = 3;
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');
(0,_render_js__WEBPACK_IMPORTED_MODULE_6__.renderTemplate)(siteHeaderElement, (0,_view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_0__.createSiteMenuTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_6__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_6__.renderTemplate)(siteMainElement, (0,_view_filter_view_js__WEBPACK_IMPORTED_MODULE_1__.createFilterTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_6__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_6__.renderTemplate)(siteMainElement, (0,_view_board_view_js__WEBPACK_IMPORTED_MODULE_5__.createBoardTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_6__.RenderPosition.BEFOREEND);
const boardElement = siteMainElement.querySelector('.board');
const taskListElement = boardElement.querySelector('.board__tasks');
(0,_render_js__WEBPACK_IMPORTED_MODULE_6__.renderTemplate)(taskListElement, (0,_view_task_edit_view_js__WEBPACK_IMPORTED_MODULE_3__.createTaskEditTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_6__.RenderPosition.BEFOREEND);

for (let i = 0; i < TASK_COUNT; i++) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_6__.renderTemplate)(taskListElement, (0,_view_task_view_js__WEBPACK_IMPORTED_MODULE_2__.createTaskTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_6__.RenderPosition.BEFOREEND);
}

(0,_render_js__WEBPACK_IMPORTED_MODULE_6__.renderTemplate)(boardElement, (0,_view_load_more_button_view_js__WEBPACK_IMPORTED_MODULE_4__.createLoadMoreButtonTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_6__.RenderPosition.BEFOREEND);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map