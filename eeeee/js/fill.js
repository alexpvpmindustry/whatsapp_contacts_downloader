/*! For license information please see choices.min.js.LICENSE.txt */
!function(){var e={282:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChoices=t.activateChoices=t.filterChoices=t.addChoice=void 0;var n=i(883);t.addChoice=function(e){var t=e.value,i=e.label,o=e.id,r=e.groupId,s=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,u=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:o,groupId:r,disabled:s,elementId:a,customProperties:c,placeholder:l,keyCode:u}},t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}},t.activateChoices=function(e){return void 0===e&&(e=!0),{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}},t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},783:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addGroup=void 0;var n=i(883);t.addGroup=function(e){var t=e.value,i=e.id,o=e.active,r=e.disabled;return{type:n.ACTION_TYPES.ADD_GROUP,value:t,id:i,active:o,disabled:r}}},464:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightItem=t.removeItem=t.addItem=void 0;var n=i(883);t.addItem=function(e){var t=e.value,i=e.label,o=e.id,r=e.choiceId,s=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:o,choiceId:r,groupId:s,customProperties:a,placeholder:c,keyCode:l}},t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},137:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setIsLoading=t.resetTo=t.clearAll=void 0;var n=i(883);t.clearAll=function(){return{type:n.ACTION_TYPES.CLEAR_ALL}},t.resetTo=function(e){return{type:n.ACTION_TYPES.RESET_TO,state:e}},t.setIsLoading=function(e){return{type:n.ACTION_TYPES.SET_IS_LOADING,isLoading:e}}},373:function(e,t,i){"use strict";var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,o=0,r=t.length;o<r;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(i(996)),s=o(i(70)),a=i(282),c=i(783),l=i(464),u=i(137),h=i(520),d=i(883),p=i(789),f=i(799),m=i(655),v=o(i(744)),_=o(i(686)),g="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,y={},E=function(){function e(t,i){var o=this;void 0===t&&(t="[data-choice]"),void 0===i&&(i={}),void 0===i.allowHTML&&console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."),this.config=r.default.all([p.DEFAULT_CONFIG,e.defaults.options,i],{arrayMerge:function(e,t){return n([],t,!0)}});var s=(0,f.diff)(this.config,p.DEFAULT_CONFIG);s.length&&console.warn("Unknown config option(s) passed",s.join(", "));var a="string"==typeof t?document.querySelector(t):t;if(!(a instanceof HTMLInputElement||a instanceof HTMLSelectElement))throw TypeError("Expected one of the following types text|select-one|select-multiple");if(this._isTextElement=a.type===d.TEXT_TYPE,this._isSelectOneElement=a.type===d.SELECT_ONE_TYPE,this._isSelectMultipleElement=a.type===d.SELECT_MULTIPLE_TYPE,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this.config.searchEnabled=this._isSelectMultipleElement||this.config.searchEnabled,["auto","always"].includes("".concat(this.config.renderSelectedChoices))||(this.config.renderSelectedChoices="auto"),i.addItemFilter&&"function"!=typeof i.addItemFilter){var c=i.addItemFilter instanceof RegExp?i.addItemFilter:new RegExp(i.addItemFilter);this.config.addItemFilter=c.test.bind(c)}if(this._isTextElement?this.passedElement=new h.WrappedInput({element:a,classNames:this.config.classNames,delimiter:this.config.delimiter}):this.passedElement=new h.WrappedSelect({element:a,classNames:this.config.classNames,template:function(e){return o._templates.option(e)}}),this.initialised=!1,this._store=new v.default,this._initialState=m.defaultState,this._currentState=m.defaultState,this._prevState=m.defaultState,this._currentValue="",this._canSearch=!!this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=(0,f.generateId)(this.passedElement.element,"choices-"),this._direction=this.passedElement.dir,!this._direction){var l=window.getComputedStyle(this.passedElement.element).direction;l!==window.getComputedStyle(document.documentElement).direction&&(this._direction=l)}if(this._idNames={itemChoice:"item-choice"},this._isSelectElement&&(this._presetGroups=this.passedElement.optionGroups,this._presetOptions=this.passedElement.options),this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&this._isTextElement){var u=this.passedElement.value.split(this.config.delimiter);this._presetItems=this._presetItems.concat(u)}if(this.passedElement.options&&this.passedElement.options.forEach((function(e){o._presetChoices.push({value:e.value,label:e.innerHTML,selected:!!e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:""===e.value||e.hasAttribute("placeholder"),customProperties:e.dataset["custom-properties"]})})),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive)return this.config.silent||console.warn("Trying to initialise Choices on element already initialised",{element:t}),void(this.initialised=!0);this.init()}return Object.defineProperty(e,"defaults",{get:function(){return Object.preventExtensions({get options(){return y},get templates(){return _.default}})},enumerable:!1,configurable:!0}),e.prototype.init=function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&"function"==typeof e&&e.call(this)}},e.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this.clearStore(),this._isSelectElement&&(this.passedElement.options=this._presetOptions),this._templates=_.default,this.initialised=!1)},e.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},e.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},e.prototype.highlightItem=function(e,t){if(void 0===t&&(t=!0),!e||!e.id)return this;var i=e.id,n=e.groupId,o=void 0===n?-1:n,r=e.value,s=void 0===r?"":r,a=e.label,c=void 0===a?"":a,u=o>=0?this._store.getGroupById(o):null;return this._store.dispatch((0,l.highlightItem)(i,!0)),t&&this.passedElement.triggerEvent(d.EVENTS.highlightItem,{id:i,value:s,label:c,groupValue:u&&u.value?u.value:null}),this},e.prototype.unhighlightItem=function(e){if(!e||!e.id)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,o=e.value,r=void 0===o?"":o,s=e.label,a=void 0===s?"":s,c=n>=0?this._store.getGroupById(n):null;return this._store.dispatch((0,l.highlightItem)(t,!1)),this.passedElement.triggerEvent(d.EVENTS.highlightItem,{id:t,value:r,label:a,groupValue:c&&c.value?c.value:null}),this},e.prototype.highlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.highlightItem(t)})),this},e.prototype.unhighlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.unhighlightItem(t)})),this},e.prototype.removeActiveItemsByValue=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.value===e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeActiveItems=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.id!==e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeHighlightedItems=function(e){var t=this;return void 0===e&&(e=!1),this._store.highlightedActiveItems.forEach((function(i){t._removeItem(i),e&&t._triggerChange(i.value)})),this},e.prototype.showDropdown=function(e){var t=this;return this.dropdown.isActive||requestAnimationFrame((function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(d.EVENTS.showDropdown,{})})),this},e.prototype.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame((function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(d.EVENTS.hideDropdown,{})})),this):this},e.prototype.getValue=function(e){void 0===e&&(e=!1);var t=this._store.activeItems.reduce((function(t,i){var n=e?i.value:i;return t.push(n),t}),[]);return this._isSelectOneElement?t[0]:t},e.prototype.setValue=function(e){var t=this;return this.initialised?(e.forEach((function(e){return t._setChoiceOrItem(e)})),this):this},e.prototype.setChoiceByValue=function(e){var t=this;return!this.initialised||this._isTextElement||(Array.isArray(e)?e:[e]).forEach((function(e){return t._findAndSelectChoiceByValue(e)})),this},e.prototype.setChoices=function(e,t,i,n){var o=this;if(void 0===e&&(e=[]),void 0===t&&(t="value"),void 0===i&&(i="label"),void 0===n&&(n=!1),!this.initialised)throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if("string"!=typeof t||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(n&&this.clearChoices(),"function"==typeof e){var r=e(this);if("function"==typeof Promise&&r instanceof Promise)return new Promise((function(e){return requestAnimationFrame(e)})).then((function(){return o._handleLoadingState(!0)})).then((function(){return r})).then((function(e){return o.setChoices(e,t,i,n)})).catch((function(e){o.config.silent||console.error(e)})).then((function(){return o._handleLoadingState(!1)})).then((function(){return o}));if(!Array.isArray(r))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof r));return this.setChoices(r,t,i,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._startLoading(),e.forEach((function(e){if(e.choices)o._addGroup({id:e.id?parseInt("".concat(e.id),10):null,group:e,valueKey:t,labelKey:i});else{var n=e;o._addChoice({value:n[t],label:n[i],isSelected:!!n.selected,isDisabled:!!n.disabled,placeholder:!!n.placeholder,customProperties:n.customProperties})}})),this._stopLoading(),this},e.prototype.clearChoices=function(){return this._store.dispatch((0,a.clearChoices)()),this},e.prototype.clearStore=function(){return this._store.dispatch((0,u.clearAll)()),this},e.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0))),this},e.prototype._render=function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}},e.prototype._renderChoices=function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,o=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame((function(){return e.choiceList.scrollToTop()})),i.length>=1&&!this._isSearching){var r=n.filter((function(e){return!0===e.placeholder&&-1===e.groupId}));r.length>=1&&(o=this._createChoicesFragment(r,o)),o=this._createGroupsFragment(i,n,o)}else n.length>=1&&(o=this._createChoicesFragment(n,o));if(o.childNodes&&o.childNodes.length>0){var s=this._store.activeItems,a=this._canAddItem(s,this.input.value);if(a.response)this.choiceList.append(o),this._highlightChoice();else{var c=this._getTemplate("notice",a.notice);this.choiceList.append(c)}}else{var l=void 0;c=void 0,this._isSearching?(c="function"==typeof this.config.noResultsText?this.config.noResultsText():this.config.noResultsText,l=this._getTemplate("notice",c,"no-results")):(c="function"==typeof this.config.noChoicesText?this.config.noChoicesText():this.config.noChoicesText,l=this._getTemplate("notice",c,"no-choices")),this.choiceList.append(l)}},e.prototype._renderItems=function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)},e.prototype._createGroupsFragment=function(e,t,i){var n=this;return void 0===i&&(i=document.createDocumentFragment()),this.config.shouldSort&&e.sort(this.config.sorter),e.forEach((function(e){var o=function(e){return t.filter((function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)}))}(e);if(o.length>=1){var r=n._getTemplate("choiceGroup",e);i.appendChild(r),n._createChoicesFragment(o,i,!0)}})),i},e.prototype._createChoicesFragment=function(e,t,i){var o=this;void 0===t&&(t=document.createDocumentFragment()),void 0===i&&(i=!1);var r=this.config,s=r.renderSelectedChoices,a=r.searchResultLimit,c=r.renderChoiceLimit,l=this._isSearching?f.sortByScore:this.config.sorter,u=function(e){if("auto"!==s||o._isSelectOneElement||!e.selected){var i=o._getTemplate("choice",e,o.config.itemSelectText);t.appendChild(i)}},h=e;"auto"!==s||this._isSelectOneElement||(h=e.filter((function(e){return!e.selected})));var d=h.reduce((function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e}),{placeholderChoices:[],normalChoices:[]}),p=d.placeholderChoices,m=d.normalChoices;(this.config.shouldSort||this._isSearching)&&m.sort(l);var v=h.length,_=this._isSelectOneElement?n(n([],p,!0),m,!0):m;this._isSearching?v=a:c&&c>0&&!i&&(v=c);for(var g=0;g<v;g+=1)_[g]&&u(_[g]);return t},e.prototype._createItemsFragment=function(e,t){var i=this;void 0===t&&(t=document.createDocumentFragment());var n=this.config,o=n.shouldSortItems,r=n.sorter,s=n.removeItemButton;return o&&!this._isSelectOneElement&&e.sort(r),this._isTextElement?this.passedElement.value=e.map((function(e){return e.value})).join(this.config.delimiter):this.passedElement.options=e,e.forEach((function(e){var n=i._getTemplate("item",e,s);t.appendChild(n)})),t},e.prototype._triggerChange=function(e){null!=e&&this.passedElement.triggerEvent(d.EVENTS.change,{value:e})},e.prototype._selectPlaceholderChoice=function(e){this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value)},e.prototype._handleButtonAction=function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode&&t.parentNode.dataset.id,n=i&&e.find((function(e){return e.id===parseInt(i,10)}));n&&(this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._store.placeholderChoice&&this._selectPlaceholderChoice(this._store.placeholderChoice))}},e.prototype._handleItemAction=function(e,t,i){var n=this;if(void 0===i&&(i=!1),e&&t&&this.config.removeItems&&!this._isSelectOneElement){var o=t.dataset.id;e.forEach((function(e){e.id!==parseInt("".concat(o),10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)})),this.input.focus()}},e.prototype._handleChoiceAction=function(e,t){if(e&&t){var i=t.dataset.id,n=i&&this._store.getChoiceById(i);if(n){var o=e[0]&&e[0].keyCode?e[0].keyCode:void 0,r=this.dropdown.isActive;n.keyCode=o,this.passedElement.triggerEvent(d.EVENTS.choice,{choice:n}),n.selected||n.disabled||this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value)),this.clearInput(),r&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},e.prototype._handleBackspace=function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some((function(e){return e.highlighted}));this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}},e.prototype._startLoading=function(){this._store.dispatch((0,u.setIsLoading)(!0))},e.prototype._stopLoading=function(){this._store.dispatch((0,u.setIsLoading)(!1))},e.prototype._handleLoadingState=function(e){void 0===e&&(e=!0);var t=this.itemList.getChild(".".concat(this.config.classNames.placeholder));e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText))&&this.itemList.append(t):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t&&(t.innerHTML=this._placeholderValue||""):this.input.placeholder=this._placeholderValue||"")},e.prototype._handleSearch=function(e){if(e&&this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,o=i.searchChoices,r=t.some((function(e){return!e.active}));if(e&&e.length>=n){var s=o?this._searchChoices(e):0;this.passedElement.triggerEvent(d.EVENTS.search,{value:e,resultCount:s})}else r&&(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0)))}},e.prototype._canAddItem=function(e,t){var i=!0,n="function"==typeof this.config.addItemText?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var o=(0,f.existsInArray)(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n="function"==typeof this.config.maxItemText?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&o&&i&&(i=!1,n="function"==typeof this.config.uniqueItemText?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&"function"==typeof this.config.addItemFilter&&!this.config.addItemFilter(t)&&(i=!1,n="function"==typeof this.config.customAddItemText?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}},e.prototype._searchChoices=function(e){var t="string"==typeof e?e.trim():e,i="string"==typeof this._currentValue?this._currentValue.trim():this._currentValue;if(t.length<1&&t==="".concat(i," "))return 0;var o=this._store.searchableChoices,r=t,c=n([],this.config.searchFields,!0),l=Object.assign(this.config.fuseOptions,{keys:c,includeMatches:!0}),u=new s.default(o,l).search(r);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch((0,a.filterChoices)(u)),u.length},e.prototype._addEventListeners=function(){var e=document.documentElement;e.addEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.addEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus,{passive:!0}),this.containerOuter.element.addEventListener("blur",this._onBlur,{passive:!0})),this.input.element.addEventListener("keyup",this._onKeyUp,{passive:!0}),this.input.element.addEventListener("focus",this._onFocus,{passive:!0}),this.input.element.addEventListener("blur",this._onBlur,{passive:!0}),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},e.prototype._removeEventListeners=function(){var e=document.documentElement;e.removeEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.removeEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("keyup",this._onKeyUp),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},e.prototype._onKeyDown=function(e){var t=e.keyCode,i=this._store.activeItems,n=this.input.isFocussed,o=this.dropdown.isActive,r=this.itemList.hasChildren(),s=String.fromCharCode(t),a=/[a-zA-Z0-9-_ ]/.test(s),c=d.KEY_CODES.BACK_KEY,l=d.KEY_CODES.DELETE_KEY,u=d.KEY_CODES.ENTER_KEY,h=d.KEY_CODES.A_KEY,p=d.KEY_CODES.ESC_KEY,f=d.KEY_CODES.UP_KEY,m=d.KEY_CODES.DOWN_KEY,v=d.KEY_CODES.PAGE_UP_KEY,_=d.KEY_CODES.PAGE_DOWN_KEY;switch(this._isTextElement||o||!a||(this.showDropdown(),this.input.isFocussed||(this.input.value+=s.toLowerCase())),t){case h:return this._onSelectKey(e,r);case u:return this._onEnterKey(e,i,o);case p:return this._onEscapeKey(o);case f:case v:case m:case _:return this._onDirectionKey(e,o);case l:case c:return this._onDeleteKey(e,i,n)}},e.prototype._onKeyUp=function(e){var t=e.target,i=e.keyCode,n=this.input.value,o=this._store.activeItems,r=this._canAddItem(o,n),s=d.KEY_CODES.BACK_KEY,c=d.KEY_CODES.DELETE_KEY;if(this._isTextElement)if(r.notice&&n){var l=this._getTemplate("notice",r.notice);this.dropdown.element.innerHTML=l.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0);else{var u=(i===s||i===c)&&t&&!t.value,h=!this._isTextElement&&this._isSearching,p=this._canSearch&&r.response;u&&h?(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0))):p&&this._handleSearch(this.input.value)}this._canSearch=this.config.searchEnabled},e.prototype._onSelectKey=function(e,t){var i=e.ctrlKey,n=e.metaKey;(i||n)&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())},e.prototype._onEnterKey=function(e,t,i){var n=e.target,o=d.KEY_CODES.ENTER_KEY,r=n&&n.hasAttribute("data-button");if(this._isTextElement&&n&&n.value){var s=this.input.value;this._canAddItem(t,s).response&&(this.hideDropdown(!0),this._addItem({value:s}),this._triggerChange(s),this.clearInput())}if(r&&(this._handleButtonAction(t,n),e.preventDefault()),i){var a=this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));a&&(t[0]&&(t[0].keyCode=o),this._handleChoiceAction(t,a)),e.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),e.preventDefault())},e.prototype._onEscapeKey=function(e){e&&(this.hideDropdown(!0),this.containerOuter.focus())},e.prototype._onDirectionKey=function(e,t){var i=e.keyCode,n=e.metaKey,o=d.KEY_CODES.DOWN_KEY,r=d.KEY_CODES.PAGE_UP_KEY,s=d.KEY_CODES.PAGE_DOWN_KEY;if(t||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var a=i===o||i===s?1:-1,c="[data-choice-selectable]",l=void 0;if(n||i===s||i===r)l=a>0?this.dropdown.element.querySelector("".concat(c,":last-of-type")):this.dropdown.element.querySelector(c);else{var u=this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));l=u?(0,f.getAdjacentEl)(u,c,a):this.dropdown.element.querySelector(c)}l&&((0,f.isScrolledIntoView)(l,this.choiceList.element,a)||this.choiceList.scrollToChildElement(l,a),this._highlightChoice(l)),e.preventDefault()}},e.prototype._onDeleteKey=function(e,t,i){var n=e.target;this._isSelectOneElement||n.value||!i||(this._handleBackspace(t),e.preventDefault())},e.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},e.prototype._onTouchEnd=function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation()),this._wasTap=!0},e.prototype._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(g&&this.choiceList.element.contains(t)){var i=this.choiceList.element.firstElementChild,n="ltr"===this._direction?e.offsetX>=i.offsetWidth:e.offsetX<i.offsetLeft;this._isScrollingOnIe=n}if(t!==this.input.element){var o=t.closest("[data-button],[data-item],[data-choice]");if(o instanceof HTMLElement){var r=e.shiftKey,s=this._store.activeItems,a=o.dataset;"button"in a?this._handleButtonAction(s,o):"item"in a?this._handleItemAction(s,o,r):"choice"in a&&this._handleChoiceAction(s,o)}e.preventDefault()}}},e.prototype._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},e.prototype._onClick=function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems.length>0&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))},e.prototype._onFocus=function(e){var t,i=this,n=e.target;n&&this.containerOuter.element.contains(n)&&((t={})[d.TEXT_TYPE]=function(){n===i.input.element&&i.containerOuter.addFocusState()},t[d.SELECT_ONE_TYPE]=function(){i.containerOuter.addFocusState(),n===i.input.element&&i.showDropdown(!0)},t[d.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.showDropdown(!0),i.containerOuter.addFocusState())},t)[this.passedElement.element.type]()},e.prototype._onBlur=function(e){var t,i=this,n=e.target;if(n&&this.containerOuter.element.contains(n)&&!this._isScrollingOnIe){var o=this._store.activeItems.some((function(e){return e.highlighted}));((t={})[d.TEXT_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),o&&i.unhighlightAll(),i.hideDropdown(!0))},t[d.SELECT_ONE_TYPE]=function(){i.containerOuter.removeFocusState(),(n===i.input.element||n===i.containerOuter.element&&!i._canSearch)&&i.hideDropdown(!0)},t[d.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),i.hideDropdown(!0),o&&i.unhighlightAll())},t)[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()},e.prototype._onFormReset=function(){this._store.dispatch((0,u.resetTo)(this._initialState))},e.prototype._highlightChoice=function(e){var t=this;void 0===e&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=e;Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach((function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")})),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(d.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}},e.prototype._addItem=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,o=e.choiceId,r=void 0===o?-1:o,s=e.groupId,a=void 0===s?-1:s,c=e.customProperties,u=void 0===c?{}:c,h=e.placeholder,p=void 0!==h&&h,f=e.keyCode,m=void 0===f?-1:f,v="string"==typeof t?t.trim():t,_=this._store.items,g=n||v,y=r||-1,E=a>=0?this._store.getGroupById(a):null,b=_?_.length+1:1;this.config.prependValue&&(v=this.config.prependValue+v.toString()),this.config.appendValue&&(v+=this.config.appendValue.toString()),this._store.dispatch((0,l.addItem)({value:v,label:g,id:b,choiceId:y,groupId:a,customProperties:u,placeholder:p,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(b),this.passedElement.triggerEvent(d.EVENTS.addItem,{id:b,value:v,label:g,customProperties:u,groupValue:E&&E.value?E.value:null,keyCode:m})},e.prototype._removeItem=function(e){var t=e.id,i=e.value,n=e.label,o=e.customProperties,r=e.choiceId,s=e.groupId,a=s&&s>=0?this._store.getGroupById(s):null;t&&r&&(this._store.dispatch((0,l.removeItem)(t,r)),this.passedElement.triggerEvent(d.EVENTS.removeItem,{id:t,value:i,label:n,customProperties:o,groupValue:a&&a.value?a.value:null}))},e.prototype._addChoice=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,o=e.isSelected,r=void 0!==o&&o,s=e.isDisabled,c=void 0!==s&&s,l=e.groupId,u=void 0===l?-1:l,h=e.customProperties,d=void 0===h?{}:h,p=e.placeholder,f=void 0!==p&&p,m=e.keyCode,v=void 0===m?-1:m;if(null!=t){var _=this._store.choices,g=n||t,y=_?_.length+1:1,E="".concat(this._baseId,"-").concat(this._idNames.itemChoice,"-").concat(y);this._store.dispatch((0,a.addChoice)({id:y,groupId:u,elementId:E,value:t,label:g,disabled:c,customProperties:d,placeholder:f,keyCode:v})),r&&this._addItem({value:t,label:g,choiceId:y,customProperties:d,placeholder:f,keyCode:v})}},e.prototype._addGroup=function(e){var t=this,i=e.group,n=e.id,o=e.valueKey,r=void 0===o?"value":o,s=e.labelKey,a=void 0===s?"label":s,l=(0,f.isType)("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),u=n||Math.floor((new Date).valueOf()*Math.random()),h=!!i.disabled&&i.disabled;l?(this._store.dispatch((0,c.addGroup)({value:i.label,id:u,active:!0,disabled:h})),l.forEach((function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[r],label:(0,f.isType)("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:u,customProperties:e.customProperties,placeholder:e.placeholder})}))):this._store.dispatch((0,c.addGroup)({value:i.label,id:i.id,active:!1,disabled:i.disabled}))},e.prototype._getTemplate=function(e){for(var t,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return(t=this._templates[e]).call.apply(t,n([this,this.config],i,!1))},e.prototype._createTemplates=function(){var e=this.config.callbackOnCreateTemplates,t={};e&&"function"==typeof e&&(t=e.call(this,f.strToEl)),this._templates=(0,r.default)(_.default,t)},e.prototype._createElements=function(){this.containerOuter=new h.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new h.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new h.Input({element:this._getTemplate("input",this._placeholderValue),classNames:this.config.classNames,type:this.passedElement.element.type,preventPaste:!this.config.paste}),this.choiceList=new h.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new h.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new h.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})},e.prototype._createStructure=function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth()),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement&&(this._highlightPosition=0,this._isSearching=!1,this._startLoading(),this._presetGroups.length?this._addPredefinedGroups(this._presetGroups):this._addPredefinedChoices(this._presetChoices),this._stopLoading()),this._isTextElement&&this._addPredefinedItems(this._presetItems)},e.prototype._addPredefinedGroups=function(e){var t=this,i=this.passedElement.placeholderOption;i&&i.parentNode&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),e.forEach((function(e){return t._addGroup({group:e,id:e.id||null})}))},e.prototype._addPredefinedChoices=function(e){var t=this;this.config.shouldSort&&e.sort(this.config.sorter);var i=e.some((function(e){return e.selected})),n=e.findIndex((function(e){return void 0===e.disabled||!e.disabled}));e.forEach((function(e,o){var r=e.value,s=void 0===r?"":r,a=e.label,c=e.customProperties,l=e.placeholder;if(t._isSelectElement)if(e.choices)t._addGroup({group:e,id:e.id||null});else{var u=!(!t._isSelectOneElement||i||o!==n)||e.selected,h=e.disabled;t._addChoice({value:s,label:a,isSelected:!!u,isDisabled:!!h,placeholder:!!l,customProperties:c})}else t._addChoice({value:s,label:a,isSelected:!!e.selected,isDisabled:!!e.disabled,placeholder:!!e.placeholder,customProperties:c})}))},e.prototype._addPredefinedItems=function(e){var t=this;e.forEach((function(e){"object"==typeof e&&e.value&&t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}),"string"==typeof e&&t._addItem({value:e})}))},e.prototype._setChoiceOrItem=function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[(0,f.getType)(e).toLowerCase()]()},e.prototype._findAndSelectChoiceByValue=function(e){var t=this,i=this._store.choices.find((function(i){return t.config.valueComparer(i.value,e)}));i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})},e.prototype._generatePlaceholderValue=function(){if(this._isSelectElement&&this.passedElement.placeholderOption){var e=this.passedElement.placeholderOption;return e?e.text:null}var t=this.config,i=t.placeholder,n=t.placeholderValue,o=this.passedElement.element.dataset;if(i){if(n)return n;if(o.placeholder)return o.placeholder}return null},e}();t.default=E},613:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),o=i(883),r=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,o=e.position;this.element=t,this.classNames=n,this.type=i,this.position=o,this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return e.prototype.addEventListeners=function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)},e.prototype.removeEventListeners=function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.shouldFlip=function(e){if("number"!=typeof e)return!1;var t=!1;return"auto"===this.position?t=!window.matchMedia("(min-height: ".concat(e+1,"px)")).matches:"top"===this.position&&(t=!0),t},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype.open=function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)},e.prototype.close=function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.addFocusState=function(){this.element.classList.add(this.classNames.focusState)},e.prototype.removeFocusState=function(){this.element.classList.remove(this.classNames.focusState)},e.prototype.enable=function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===o.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},e.prototype.disable=function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===o.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},e.prototype.wrap=function(e){(0,n.wrap)(e,this.element)},e.prototype.unwrap=function(e){this.element.parentNode&&(this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element))},e.prototype.addLoadingState=function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},e.prototype.removeLoadingState=function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=r},217:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){var t=e.element,i=e.type,n=e.classNames;this.element=t,this.classNames=n,this.type=i,this.isActive=!1}return Object.defineProperty(e.prototype,"distanceFromTopWindow",{get:function(){return this.element.getBoundingClientRect().bottom},enumerable:!1,configurable:!0}),e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.show=function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},e.prototype.hide=function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},e}();t.default=i},520:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WrappedSelect=t.WrappedInput=t.List=t.Input=t.Container=t.Dropdown=void 0;var o=n(i(217));t.Dropdown=o.default;var r=n(i(613));t.Container=r.default;var s=n(i(11));t.Input=s.default;var a=n(i(624));t.List=a.default;var c=n(i(541));t.WrappedInput=c.default;var l=n(i(982));t.WrappedSelect=l.default},11:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),o=i(883),r=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,o=e.preventPaste;this.element=t,this.type=i,this.classNames=n,this.preventPaste=o,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(e.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return(0,n.sanitise)(this.element.value)},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),e.prototype.addEventListeners=function(){this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("input",this._onInput,{passive:!0}),this.element.addEventListener("focus",this._onFocus,{passive:!0}),this.element.addEventListener("blur",this._onBlur,{passive:!0})},e.prototype.removeEventListeners=function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.isDisabled=!0},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.blur=function(){this.isFocussed&&this.element.blur()},e.prototype.clear=function(e){return void 0===e&&(e=!0),this.element.value&&(this.element.value=""),e&&this.setWidth(),this},e.prototype.setWidth=function(){var e=this.element,t=e.style,i=e.value,n=e.placeholder;t.minWidth="".concat(n.length+1,"ch"),t.width="".concat(i.length+1,"ch")},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype._onInput=function(){this.type!==o.SELECT_ONE_TYPE&&this.setWidth()},e.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=r},624:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(883),o=function(){function e(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return e.prototype.clear=function(){this.element.innerHTML=""},e.prototype.append=function(e){this.element.appendChild(e)},e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.hasChildren=function(){return this.element.hasChildNodes()},e.prototype.scrollToTop=function(){this.element.scrollTop=0},e.prototype.scrollToChildElement=function(e,t){var i=this;if(e){var n=this.element.offsetHeight,o=this.element.scrollTop+n,r=e.offsetHeight,s=e.offsetTop+r,a=t>0?this.element.scrollTop+s-o:e.offsetTop;requestAnimationFrame((function(){i._animateScroll(a,t)}))}},e.prototype._scrollDown=function(e,t,i){var n=(i-e)/t,o=n>1?n:1;this.element.scrollTop=e+o},e.prototype._scrollUp=function(e,t,i){var n=(e-i)/t,o=n>1?n:1;this.element.scrollTop=e-o},e.prototype._animateScroll=function(e,t){var i=this,o=n.SCROLLING_SPEED,r=this.element.scrollTop,s=!1;t>0?(this._scrollDown(r,o,e),r<e&&(s=!0)):(this._scrollUp(r,o,e),r>e&&(s=!0)),s&&requestAnimationFrame((function(){i._animateScroll(e,t)}))},e}();t.default=o},730:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),o=function(){function e(e){var t=e.element,i=e.classNames;if(this.element=t,this.classNames=i,!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new TypeError("Invalid element passed");this.isDisabled=!1}return Object.defineProperty(e.prototype,"isActive",{get:function(){return"active"===this.element.dataset.choice},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dir",{get:function(){return this.element.dir},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),e.prototype.conceal=function(){this.element.classList.add(this.classNames.input),this.element.hidden=!0,this.element.tabIndex=-1;var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("data-choice","active")},e.prototype.reveal=function(){this.element.classList.remove(this.classNames.input),this.element.hidden=!1,this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},e.prototype.triggerEvent=function(e,t){(0,n.dispatchEvent)(this.element,e,t)},e}();t.default=o},541:function(e,t,i){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,o=t.delimiter,r=e.call(this,{element:i,classNames:n})||this;return r.delimiter=o,r}return o(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!1,configurable:!0}),t}(r(i(730)).default);t.default=s},982:function(e,t,i){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,o=t.template,r=e.call(this,{element:i,classNames:n})||this;return r.template=o,r}return o(t,e),Object.defineProperty(t.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"optionGroups",{get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return Array.from(this.element.options)},set:function(e){var t=this,i=document.createDocumentFragment();e.forEach((function(e){return n=e,o=t.template(n),void i.appendChild(o);var n,o})),this.appendDocFragment(i)},enumerable:!1,configurable:!0}),t.prototype.appendDocFragment=function(e){this.element.innerHTML="",this.element.appendChild(e)},t}(r(i(730)).default);t.default=s},883:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SCROLLING_SPEED=t.SELECT_MULTIPLE_TYPE=t.SELECT_ONE_TYPE=t.TEXT_TYPE=t.KEY_CODES=t.ACTION_TYPES=t.EVENTS=void 0,t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL",RESET_TO:"RESET_TO",SET_IS_LOADING:"SET_IS_LOADING"},t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},t.TEXT_TYPE="text",t.SELECT_ONE_TYPE="select-one",t.SELECT_MULTIPLE_TYPE="select-multiple",t.SCROLLING_SPEED=4},789:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CONFIG=t.DEFAULT_CLASSNAMES=void 0;var n=i(799);t.DEFAULT_CLASSNAMES={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",selectedState:"is-selected",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},t.DEFAULT_CONFIG={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilter:null,removeItems:!0,removeItemButton:!1,editItems:!1,allowHTML:!0,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'.concat((0,n.sanitise)(e),'"</b>')},maxItemText:function(e){return"Only ".concat(e," values can be added")},valueComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:t.DEFAULT_CLASSNAMES}},18:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},948:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},359:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},285:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},533:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},187:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(i(18),t),o(i(978),t),o(i(948),t),o(i(359),t),o(i(285),t),o(i(533),t),o(i(287),t),o(i(132),t),o(i(837),t),o(i(598),t),o(i(369),t),o(i(37),t),o(i(47),t),o(i(923),t),o(i(876),t)},287:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},132:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},837:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},598:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},37:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},369:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},47:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},923:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},876:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},799:function(e,t){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.diff=t.cloneObject=t.existsInArray=t.dispatchEvent=t.sortByScore=t.sortByAlpha=t.strToEl=t.sanitise=t.isScrolledIntoView=t.getAdjacentEl=t.wrap=t.isType=t.getType=t.generateId=t.generateChars=t.getRandomNumber=void 0,t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.generateChars=function(e){return Array.from({length:e},(function(){return(0,t.getRandomNumber)(0,36).toString(36)})).join("")},t.generateId=function(e,i){var n=e.id||e.name&&"".concat(e.name,"-").concat((0,t.generateChars)(2))||(0,t.generateChars)(4);return n=n.replace(/(:|\.|\[|\]|,)/g,""),"".concat(i,"-").concat(n)},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isType=function(e,i){return null!=i&&(0,t.getType)(i)===e},t.wrap=function(e,t){return void 0===t&&(t=document.createElement("div")),e.parentNode&&(e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)),t.appendChild(e)},t.getAdjacentEl=function(e,t,i){void 0===i&&(i=1);for(var n="".concat(i>0?"next":"previous","ElementSibling"),o=e[n];o;){if(o.matches(t))return o;o=o[n]}return o},t.isScrolledIntoView=function(e,t,i){return void 0===i&&(i=1),!!e&&(i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop)},t.sanitise=function(e){return"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},t.strToEl=(i=document.createElement("div"),function(e){var t=e.trim();i.innerHTML=t;for(var n=i.children[0];i.firstChild;)i.removeChild(i.firstChild);return n}),t.sortByAlpha=function(e,t){var i=e.value,n=e.label,o=void 0===n?i:n,r=t.value,s=t.label,a=void 0===s?r:s;return o.localeCompare(a,[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},t.sortByScore=function(e,t){var i=e.score,n=void 0===i?0:i,o=t.score;return n-(void 0===o?0:o)},t.dispatchEvent=function(e,t,i){void 0===i&&(i=null);var n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)},t.existsInArray=function(e,t,i){return void 0===i&&(i="value"),e.some((function(e){return"string"==typeof t?e[i]===t.trim():e[i]===t}))},t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))},t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter((function(e){return n.indexOf(e)<0}))}},273:function(e,t){"use strict";var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,o=0,r=t.length;o<r;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_CHOICE":var o=n,r={id:o.id,elementId:o.elementId,groupId:o.groupId,value:o.value,label:o.label||o.value,disabled:o.disabled||!1,selected:!1,active:!0,score:9999,customProperties:o.customProperties,placeholder:o.placeholder||!1};return i(i([],e,!0),[r],!1);case"ADD_ITEM":var s=n;return s.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt("".concat(s.choiceId),10)&&(t.selected=!0),t})):e;case"REMOVE_ITEM":var a=n;return a.choiceId&&a.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt("".concat(a.choiceId),10)&&(t.selected=!1),t})):e;case"FILTER_CHOICES":var c=n;return e.map((function(e){var t=e;return t.active=c.results.some((function(e){var i=e.item,n=e.score;return i.id===t.id&&(t.score=n,!0)})),t}));case"ACTIVATE_CHOICES":var l=n;return e.map((function(e){var t=e;return t.active=l.active,t}));case"CLEAR_CHOICES":return t.defaultState;default:return e}}},871:function(e,t){"use strict";var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,o=0,r=t.length;o<r;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_GROUP":var o=n;return i(i([],e,!0),[{id:o.id,value:o.value,active:o.active,disabled:o.disabled}],!1);case"CLEAR_CHOICES":return[];default:return e}}},655:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0;var o=i(857),r=n(i(52)),s=n(i(871)),a=n(i(273)),c=n(i(502)),l=i(799);t.defaultState={groups:[],items:[],choices:[],loading:!1};var u=(0,o.combineReducers)({items:r.default,groups:s.default,choices:a.default,loading:c.default});t.default=function(e,i){var n=e;if("CLEAR_ALL"===i.type)n=t.defaultState;else if("RESET_TO"===i.type)return(0,l.cloneObject)(i.state);return u(n,i)}},52:function(e,t){"use strict";var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,o=0,r=t.length;o<r;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_ITEM":var o=n;return i(i([],e,!0),[{id:o.id,choiceId:o.choiceId,groupId:o.groupId,value:o.value,label:o.label,active:!0,highlighted:!1,customProperties:o.customProperties,placeholder:o.placeholder||!1,keyCode:null}],!1).map((function(e){var t=e;return t.highlighted=!1,t}));case"REMOVE_ITEM":return e.map((function(e){var t=e;return t.id===n.id&&(t.active=!1),t}));case"HIGHLIGHT_ITEM":var r=n;return e.map((function(e){var t=e;return t.id===r.id&&(t.highlighted=r.highlighted),t}));default:return e}}},502:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=!1,t.default=function(e,i){return void 0===e&&(e=t.defaultState),void 0===i&&(i={}),"SET_IS_LOADING"===i.type?i.isLoading:e}},744:function(e,t,i){"use strict";var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,o=0,r=t.length;o<r;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(857),s=o(i(655)),a=function(){function e(){this._store=(0,r.createStore)(s.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}return e.prototype.subscribe=function(e){this._store.subscribe(e)},e.prototype.dispatch=function(e){this._store.dispatch(e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._store.getState()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.state.items},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeItems",{get:function(){return this.items.filter((function(e){return!0===e.active}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"highlightedActiveItems",{get:function(){return this.items.filter((function(e){return e.active&&e.highlighted}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"choices",{get:function(){return this.state.choices},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeChoices",{get:function(){return this.choices.filter((function(e){return!0===e.active}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectableChoices",{get:function(){return this.choices.filter((function(e){return!0!==e.disabled}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"searchableChoices",{get:function(){return this.selectableChoices.filter((function(e){return!0!==e.placeholder}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"placeholderChoice",{get:function(){return n([],this.choices,!0).reverse().find((function(e){return!0===e.placeholder}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"groups",{get:function(){return this.state.groups},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeGroups",{get:function(){var e=this.groups,t=this.choices;return e.filter((function(e){var i=!0===e.active&&!1===e.disabled,n=t.some((function(e){return!0===e.active&&!1===e.disabled}));return i&&n}),[])},enumerable:!1,configurable:!0}),e.prototype.isLoading=function(){return this.state.loading},e.prototype.getChoiceById=function(e){return this.activeChoices.find((function(t){return t.id===parseInt(e,10)}))},e.prototype.getGroupById=function(e){return this.groups.find((function(t){return t.id===e}))},e}();t.default=a},686:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={containerOuter:function(e,t,i,n,o,r){var s=e.classNames.containerOuter,a=Object.assign(document.createElement("div"),{className:s});return a.dataset.type=r,t&&(a.dir=t),n&&(a.tabIndex=0),i&&(a.setAttribute("role",o?"combobox":"listbox"),o&&a.setAttribute("aria-autocomplete","list")),a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false"),a},containerInner:function(e){var t=e.classNames.containerInner;return Object.assign(document.createElement("div"),{className:t})},itemList:function(e,t){var i=e.classNames,n=i.list,o=i.listSingle,r=i.listItems;return Object.assign(document.createElement("div"),{className:"".concat(n," ").concat(t?o:r)})},placeholder:function(e,t){var i,n=e.allowHTML,o=e.classNames.placeholder;return Object.assign(document.createElement("div"),((i={className:o})[n?"innerHTML":"innerText"]=t,i))},item:function(e,t,i){var n,o,r=e.allowHTML,s=e.classNames,a=s.item,c=s.button,l=s.highlightedState,u=s.itemSelectable,h=s.placeholder,d=t.id,p=t.value,f=t.label,m=t.customProperties,v=t.active,_=t.disabled,g=t.highlighted,y=t.placeholder,E=Object.assign(document.createElement("div"),((n={className:a})[r?"innerHTML":"innerText"]=f,n));if(Object.assign(E.dataset,{item:"",id:d,value:p,customProperties:m}),v&&E.setAttribute("aria-selected","true"),_&&E.setAttribute("aria-disabled","true"),y&&E.classList.add(h),E.classList.add(g?l:u),i){_&&E.classList.remove(u),E.dataset.deletable="";var b="Remove item",S=Object.assign(document.createElement("button"),((o={type:"button",className:c})[r?"innerHTML":"innerText"]=b,o));S.setAttribute("aria-label","".concat(b,": '").concat(p,"'")),S.dataset.button="",E.appendChild(S)}return E},choiceList:function(e,t){var i=e.classNames.list,n=Object.assign(document.createElement("div"),{className:i});return t||n.setAttribute("aria-multiselectable","true"),n.setAttribute("role","listbox"),n},choiceGroup:function(e,t){var i,n=e.allowHTML,o=e.classNames,r=o.group,s=o.groupHeading,a=o.itemDisabled,c=t.id,l=t.value,u=t.disabled,h=Object.assign(document.createElement("div"),{className:"".concat(r," ").concat(u?a:"")});return h.setAttribute("role","group"),Object.assign(h.dataset,{group:"",id:c,value:l}),u&&h.setAttribute("aria-disabled","true"),h.appendChild(Object.assign(document.createElement("div"),((i={className:s})[n?"innerHTML":"innerText"]=l,i))),h},choice:function(e,t,i){var n,o=e.allowHTML,r=e.classNames,s=r.item,a=r.itemChoice,c=r.itemSelectable,l=r.selectedState,u=r.itemDisabled,h=r.placeholder,d=t.id,p=t.value,f=t.label,m=t.groupId,v=t.elementId,_=t.disabled,g=t.selected,y=t.placeholder,E=Object.assign(document.createElement("div"),((n={id:v})[o?"innerHTML":"innerText"]=f,n.className="".concat(s," ").concat(a),n));return g&&E.classList.add(l),y&&E.classList.add(h),E.setAttribute("role",m&&m>0?"treeitem":"option"),Object.assign(E.dataset,{choice:"",id:d,value:p,selectText:i}),_?(E.classList.add(u),E.dataset.choiceDisabled="",E.setAttribute("aria-disabled","true")):(E.classList.add(c),E.dataset.choiceSelectable=""),E},input:function(e,t){var i=e.classNames,n=i.input,o=i.inputCloned,r=Object.assign(document.createElement("input"),{type:"search",name:"search_terms",className:"".concat(n," ").concat(o),autocomplete:"off",autocapitalize:"off",spellcheck:!1});return r.setAttribute("role","textbox"),r.setAttribute("aria-autocomplete","list"),r.setAttribute("aria-label",t),r},dropdown:function(e){var t=e.classNames,i=t.list,n=t.listDropdown,o=document.createElement("div");return o.classList.add(i,n),o.setAttribute("aria-expanded","false"),o},notice:function(e,t,i){var n,o=e.allowHTML,r=e.classNames,s=r.item,a=r.itemChoice,c=r.noResults,l=r.noChoices;void 0===i&&(i="");var u=[s,a];return"no-choices"===i?u.push(l):"no-results"===i&&u.push(c),Object.assign(document.createElement("div"),((n={})[o?"innerHTML":"innerText"]=t,n.className=u.join(" "),n))},option:function(e){var t=e.label,i=e.value,n=e.customProperties,o=e.active,r=e.disabled,s=new Option(t,i,!1,o);return n&&(s.dataset.customProperties="".concat(n)),s.disabled=!!r,s}};t.default=i},996:function(e){"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===i}(e)}(e)},i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function o(e,t,i){return e.concat(t).map((function(e){return n(e,i)}))}function r(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function s(e,t){try{return t in e}catch(e){return!1}}function a(e,i,c){(c=c||{}).arrayMerge=c.arrayMerge||o,c.isMergeableObject=c.isMergeableObject||t,c.cloneUnlessOtherwiseSpecified=n;var l=Array.isArray(i);return l===Array.isArray(e)?l?c.arrayMerge(e,i,c):function(e,t,i){var o={};return i.isMergeableObject(e)&&r(e).forEach((function(t){o[t]=n(e[t],i)})),r(t).forEach((function(r){(function(e,t){return s(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(s(e,r)&&i.isMergeableObject(t[r])?o[r]=function(e,t){if(!t.customMerge)return a;var i=t.customMerge(e);return"function"==typeof i?i:a}(r,i)(e[r],t[r],i):o[r]=n(t[r],i))})),o}(e,i,c):n(i,c)}a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return a(e,i,t)}),{})};var c=a;e.exports=c},70:function(e){e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=i(2),s=i(8),a=i(0),c=function(){function e(t,i){var n=i.location,o=void 0===n?0:n,r=i.distance,a=void 0===r?100:r,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.caseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g,E=i.id,b=void 0===E?null:E,S=i.keys,O=void 0===S?[]:S,I=i.shouldSort,T=void 0===I||I,C=i.getFn,A=void 0===C?s:C,L=i.sortFn,w=void 0===L?function(e,t){return e.score-t.score}:L,P=i.tokenize,M=void 0!==P&&P,D=i.matchAllTokens,N=void 0!==D&&D,x=i.includeMatches,j=void 0!==x&&x,F=i.includeScore,k=void 0!==F&&F,K=i.verbose,Y=void 0!==K&&K;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y,id:b,keys:O,includeMatches:j,includeScore:k,shouldSort:T,getFn:A,sortFn:w,verbose:Y,tokenize:M,matchAllTokens:N},this.setCollection(t)}var t,i;return t=e,(i=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,o=i.fullSearcher,r=this._search(n,o),s=r.weights,a=r.results;return this._computeScore(s,a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,o=i.length;n<o;n+=1)t.push(new r(i[n],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},o=[];if("string"==typeof i[0]){for(var r=0,s=i.length;r<s;r+=1)this._analyze({key:"",value:i[r],record:r,index:r},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var a={},c=0,l=i.length;c<l;c+=1)for(var u=i[c],h=0,d=this.options.keys.length;h<d;h+=1){var p=this.options.keys[h];if("string"!=typeof p){if(a[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else a[p]={weight:1};this._analyze({key:p,value:this.options.getFn(u,p),record:u,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:o}}},{key:"_analyze",value:function(e,t){var i=e.key,n=e.arrayIndex,o=void 0===n?-1:n,r=e.value,s=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,p=t.resultMap,f=void 0===p?{}:p,m=t.results,v=void 0===m?[]:m;if(null!=r){var _=!1,g=-1,y=0;if("string"==typeof r){this._log("\nKey: ".concat(""===i?"-":i));var E=d.search(r);if(this._log('Full text: "'.concat(r,'", score: ').concat(E.score)),this.options.tokenize){for(var b=r.split(this.options.tokenSeparator),S=[],O=0;O<u.length;O+=1){var I=u[O];this._log('\nPattern: "'.concat(I.pattern,'"'));for(var T=!1,C=0;C<b.length;C+=1){var A=b[C],L=I.search(A),w={};L.isMatch?(w[A]=L.score,_=!0,T=!0,S.push(L.score)):(w[A]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(w[A]))}T&&(y+=1)}g=S[0];for(var P=S.length,M=1;M<P;M+=1)g+=S[M];g/=P,this._log("Token score average:",g)}var D=E.score;g>-1&&(D=(D+g)/2),this._log("Score average:",D);var N=!this.options.tokenize||!this.options.matchAllTokens||y>=u.length;if(this._log("\nCheck Matches: ".concat(N)),(_||E.isMatch)&&N){var x=f[c];x?x.output.push({key:i,arrayIndex:o,value:r,score:D,matchedIndices:E.matchedIndices}):(f[c]={item:s,output:[{key:i,arrayIndex:o,value:r,score:D,matchedIndices:E.matchedIndices}]},v.push(f[c]))}}else if(a(r))for(var j=0,F=r.length;j<F;j+=1)this._analyze({key:i,arrayIndex:j,value:r[j],record:s,index:c},{resultMap:f,results:v,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var i=0,n=t.length;i<n;i+=1){for(var o=t[i].output,r=o.length,s=1,a=1,c=0;c<r;c+=1){var l=e?e[o[c].key].weight:1,u=(1===l?o[c].score:o[c].score||.001)*l;1!==l?a=Math.min(a,u):(o[c].nScore=u,s*=u)}t[i].score=1===a?s:a,this._log(t[i])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t}))),i=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var i=e.output;t.matches=[];for(var n=0,o=i.length;n<o;n+=1){var r=i[n];if(0!==r.matchedIndices.length){var s={indices:r.matchedIndices,value:r.value};r.key&&(s.key=r.key),r.hasOwnProperty("arrayIndex")&&r.arrayIndex>-1&&(s.arrayIndex=r.arrayIndex),t.matches.push(s)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var r=0,s=e.length;r<s;r+=1){var a=e[r];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),o.length){for(var c={item:a.item},l=0,u=o.length;l<u;l+=1)o[l](a,c);t.push(c)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,i),e}();e.exports=c},function(e,t,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=i(3),r=i(4),s=i(7),a=function(){function e(t,i){var n=i.location,o=void 0===n?0:n,r=i.distance,a=void 0===r?100:r,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.isCaseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t,i;return t=e,(i=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,i=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>i)return o(e,this.pattern,n);var s=this.options,a=s.location,c=s.distance,l=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&n(t.prototype,i),e}();e.exports=a},function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(i,"\\$&").replace(n,"|")),r=e.match(o),s=!!r,a=[];if(s)for(var c=0,l=r.length;c<l;c+=1){var u=r[c];a.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},function(e,t,i){var n=i(5),o=i(6);e.exports=function(e,t,i,r){for(var s=r.location,a=void 0===s?0:s,c=r.distance,l=void 0===c?100:c,u=r.threshold,h=void 0===u?.6:u,d=r.findAllMatches,p=void 0!==d&&d,f=r.minMatchCharLength,m=void 0===f?1:f,v=a,_=e.length,g=h,y=e.indexOf(t,v),E=t.length,b=[],S=0;S<_;S+=1)b[S]=0;if(-1!==y){var O=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});if(g=Math.min(O,g),-1!==(y=e.lastIndexOf(t,v+E))){var I=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});g=Math.min(I,g)}}y=-1;for(var T=[],C=1,A=E+_,L=1<<(E<=31?E-1:30),w=0;w<E;w+=1){for(var P=0,M=A;P<M;)n(t,{errors:w,currentLocation:v+M,expectedLocation:v,distance:l})<=g?P=M:A=M,M=Math.floor((A-P)/2+P);A=M;var D=Math.max(1,v-M+1),N=p?_:Math.min(v+M,_)+E,x=Array(N+2);x[N+1]=(1<<w)-1;for(var j=N;j>=D;j-=1){var F=j-1,k=i[e.charAt(F)];if(k&&(b[F]=1),x[j]=(x[j+1]<<1|1)&k,0!==w&&(x[j]|=(T[j+1]|T[j])<<1|1|T[j+1]),x[j]&L&&(C=n(t,{errors:w,currentLocation:F,expectedLocation:v,distance:l}))<=g){if(g=C,(y=F)<=v)break;D=Math.max(1,2*v-y)}}if(n(t,{errors:w+1,currentLocation:v,expectedLocation:v,distance:l})>g)break;T=x}return{isMatch:y>=0,score:0===C?.001:C,matchedIndices:o(b,m)}}},function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,o=t.currentLocation,r=void 0===o?0:o,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,l=void 0===c?100:c,u=n/e.length,h=Math.abs(a-r);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,o=-1,r=0,s=e.length;r<s;r+=1){var a=e[r];a&&-1===n?n=r:a||-1===n||((o=r-1)-n+1>=t&&i.push([n,o]),n=-1)}return e[r-1]&&r-n>=t&&i.push([n,r-1]),i}},function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var o=0;o<i;o+=1)t[e.charAt(o)]|=1<<i-o-1;return t}},function(e,t,i){var n=i(0);e.exports=function(e,t){return function e(t,i,o){if(i){var r=i.indexOf("."),s=i,a=null;-1!==r&&(s=i.slice(0,r),a=i.slice(r+1));var c=t[s];if(null!=c)if(a||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],a,o);else a&&e(c,a,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])},857:function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}i.r(t),i.d(t,{__DO_NOT_USE__ActionTypes:function(){return l},applyMiddleware:function(){return v},bindActionCreators:function(){return f},combineReducers:function(){return d},compose:function(){return m},createStore:function(){return h}});var a="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function h(e,t,i){var n;if("function"==typeof t&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error(s(0));if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error(s(1));return i(h)(e,t)}if("function"!=typeof e)throw new Error(s(2));var o=e,r=t,c=[],d=c,p=!1;function f(){d===c&&(d=c.slice())}function m(){if(p)throw new Error(s(3));return r}function v(e){if("function"!=typeof e)throw new Error(s(4));if(p)throw new Error(s(5));var t=!0;return f(),d.push(e),function(){if(t){if(p)throw new Error(s(6));t=!1,f();var i=d.indexOf(e);d.splice(i,1),c=null}}}function _(e){if(!u(e))throw new Error(s(7));if(void 0===e.type)throw new Error(s(8));if(p)throw new Error(s(9));try{p=!0,r=o(r,e)}finally{p=!1}for(var t=c=d,i=0;i<t.length;i++)(0,t[i])();return e}function g(e){if("function"!=typeof e)throw new Error(s(10));o=e,_({type:l.REPLACE})}function y(){var e,t=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(s(11));function i(){e.next&&e.next(m())}return i(),{unsubscribe:t(i)}}})[a]=function(){return this},e}return _({type:l.INIT}),(n={dispatch:_,subscribe:v,getState:m,replaceReducer:g})[a]=y,n}function d(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(i[o]=e[o])}var r,a=Object.keys(i);try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:l.INIT}))throw new Error(s(12));if(void 0===i(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error(s(13))}))}(i)}catch(e){r=e}return function(e,t){if(void 0===e&&(e={}),r)throw r;for(var n=!1,o={},c=0;c<a.length;c++){var l=a[c],u=i[l],h=e[l],d=u(h,t);if(void 0===d)throw t&&t.type,new Error(s(14));o[l]=d,n=n||d!==h}return(n=n||a.length!==Object.keys(e).length)?o:e}}function p(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"==typeof e)return p(e,t);if("object"!=typeof e||null===e)throw new Error(s(16));var i={};for(var n in e){var o=e[n];"function"==typeof o&&(i[n]=p(o,t))}return i}function m(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),n=function(){throw new Error(s(15))},o={getState:i.getState,dispatch:function(){return n.apply(void 0,arguments)}},a=t.map((function(e){return e(o)}));return n=m.apply(void 0,a)(i.dispatch),r(r({},i),{},{dispatch:n})}}}}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){"use strict";var e=i(373),t=i.n(e);i(187),i(883),i(789),i(686),n.default=t()}(),window.Choices=n.default}();

var swal_dwndif_li_imagesrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABO+SURBVHja7J15lNxVlcc/971fVVf1nqST7hBCSEjIQEgCEWFkcRg9LuM4elBxxmU87o4jekZ0kBHPLJojHA6gIgoiiqIjwSM6zBwVnWGHqIEgBDCEQMi+dNLpvavrV7/37vzRnZyEVHX/qrfqCr+b89KV6l+9ern3++76FlFVXk4LH/gBZZOACz1qLOoVFQcSIDUhmYFBBk0WFSEVCB3PHCCYmSHT1sSBzhpamwfAG5ACikG9IEYREbwO/WzvqmNOcy9EgFckbWmXvcx2LagV6npr8VbJZQdTolIP1DuRBhE5yXhdpGirIDOAWQr1gtaCpgAdGj0RIp2iuh9Mh+J223Rqe+fzXdvTDUFXdk5tv3f0pX0UinfkUzWIKiZTjx/sAyyCojgyhTz5VAYRjydA8DgnGOvxqlhJoV5paSzQ0S+kjVCXho5eiwSO9u4Gmlv6CfIKKhgBYwT1DjWe3v40vbkGEF+WiPSSS455L6CKyeMBAlEWRIE/EdGlwJnA6cByqzqTYYDLEAuOeH30q0O/VmT4OYMLHU2LGlHVTnX6LMhGFfmjitkE7AS2IZKvZh5WKwAM8Jp6bVgF8mpR86p8Jn86gKhM6BepV4AZwAWCXhCJQa1FVJ8HntBC/imQJ4BHgf4EAJNEqgLKcqy8DeFCVV3RQONcL35Ih0+w4Ee2dgpwKnCqFvJ/h0gX+CeBdcDdgq5NADBxlEH5m1kN/R8EWQnMw8iRJqCyJALQDHqRwkUgH8wHNc8BPwLWAH0JAMZGs4B3CVwGenIq8Gmdwlk+DprjxcwBzvNqvmiEG4GfAHunqy2dbjQP+JQq61T15mFVWy3CP2pyCSxU9dep6uPAF4DFCQBKUz3IR0H/S4zeKMIijhuSecbo1cBvBfkcMCcBwKFQTg2gF6v4uxT5LsjZHK+kslCQa1X9XYp/j5FXOABEdO7MuoHvqfJD0DfyiiG9QES/19kvd6ryZ684AIgREZF3GvxDNenow0ADrziSbBiZd6s39wIfUsW+IgDgQtfctLj56uyc2jXqdHEVOncTGkGKcEI+ku93DZhbjGH2cQ0AUU7zxtzhjb0cre409MS7B/phFf8LUTnXT+GkMFMjeAV4kwo/A958KCef0DF0vsJdDdnwfchxAgBBCVPpj6vITxgq0iQ0Sh6kITP43VRBr6x+AAj4yF4ZkboBmJnINmZo7CUrni8L3ACkqhUAVry/DsdqlJpErOXLRoRPG8MPJjNKMpM08a2iX1XxlyVyHLd7+F7gW0DtZPQ+KZ64Gv2yIJcnwpswL/rvdWgt1CeB/LTWAKr+C4r/YiK1iearfkhFrp0aDaBlhGlD9XBEQY18UvGrE3FNGl0qSg9w5aQCYMcF74kn+6hAyyN3YCVAxL/FI6shSfBMqjUw5nJrzEtG/K2IHp6AEwoAl8rEHIw9lNJZqnBNEupNSYgY1GYK/5HNRJuMl4elrm5cIBifDzBkKjIK1yuyLBHPlNEJoF8Haa2oE6hBGiPm3xB9SyKTKTYFsEqMvw4ROx4NMGZ73fTiOtJd7W8Wkc8n4qiQORB9nwwOPCSBvYVUpjznfbwaoKZ7X0tm30vXJ05fJWNDUF/4Mt6fyhirR0WFl+7vHOV7Be90tQ/SpyVSqDi1eueuN95drGhhQgCw4OH/HMn2kBf7l6FNvVNtMvmnhTfg3etcrucDaoPvTQgA8qkRazdNHvkCSEvC/GmDgSwin8X7exB2jdsHCMWM1N7ukddLwvZphQBRlon3HxXvKdViA8B6U6q1WeVTieM3TWEg8jERs1SMoViLDQAp+Ye3KpyTsHra0jzgQ+MPA70c25RmL+7TCY+neWSo+hEfyQIfCS9v8TVAqnBMU9G3gqxIWDztY4IWET4oBl7e4vsA0nNUM6lB45PVPVXkC/hPiNVmscqRLXYYuOdV7z3q383PPvymINe5XI1NuFsdNFedXiKh/+7Y8gB1c17mEqQ/jmri+VeTFlA+gtNbGWUTRlGhzrvv1mGPAlRkMWLOTrJ+VecMLKXWXKiqD5UdBdSFg9SFg9SHA6TUv0ORuQlHqw4Bzer1Yh9FHGqxNUDohx82QeCMea2gifGvvoAQQS4Ua2cAnWWZgN2vGTpQsLZ96xn1259ZTpBO+FmNZMwSE3Eukd5TqlpcvBYwaz7hrPlEdc3n4t38hJNVqwUaUf4cp+DKCANPfOR2VDEauVU+nU3qPtVrBSBgFYHUUeIQy6IaILe7m7Cj7wRRvyrhYtU7gysRu1BK5HCKAqDj93vo3Nw1X1ImWelb/UrgpJTIwrSUAYAZq+bQvKjxFI00m7Cw2tMBEKlfXvBlhIH1JzZZVc703iccPB60gGeZimSBXCwNEDlf57xPTvM4bsJBTvORa4ptAsRrVmBpwrnjRP5Wlux/Yl99bAAw6OqBBQnrjhsTUF87t25mfABkbCuQpH+PGwAoTac0L4rtBBKYBfjpc5SboodrmsOnEYz7FDU93PPk9HlorML0yKP5vF8YHwDq5zENBl5Qj0GotQHB8Jomp56cdxS8JzCm7FE6VbwqGWupMQEyfNVT3nsGXYQRwZa52VKBaHg8WRNgh8caqWfARXiUlFT2XG4VWuMDAJlV4eQFoXfMTmf56zkLuWTuEpbUNhGIYftgL3e3v8j/7N3K8/2dZGwQGwQF7zEivHbWCVzStoTzZ86jOZWiu1Bgbece1uzZxKOde4jUHwbcqDNLldB7Tqlr4u2ti7i4dRHzMg04PC/0d3Pnnuf5dftW9oU5MpVcUSUUlakUuzZu3r233gzyiUqNNfSOpXUzuOa0CzhvRvGlCFtzPXxx01ru2b+NrAlizXwrwhWnnM2nT15Z8rkbtj7JNS+ux8c4fEOBvHO8YfZ8rlp6PgtrG4s+t7ZzD1dsepSNvQdJVwgEAvfsfP1H/iqWE6gqTRWzVaq01dRy0/LXlRQ+wMnZRr617CLObW4lGnVb9JAX8blFq0YUPsBnTj6Tzy96FXl1o2oWr8o5M+Zww7KLSgof4LwZc7nx9Itoq6mr2CG5CvHDQDGTezrlaFj92ElnsLxhdCs0I5XhS6ecO3zTn44gKFjZ2DKq8A/RPyxYzjnNrYQ6cibUCFy5+BzmpEfPmK9obOFTJ69g0EWVYmxN/DBw6EbNitj+jLW8e+6S2J9Z0TSLVU1zCEdIWzuUt7eeEtsRyxjLu9oWk3duRJNyet1Mzmluiz3Wt85ZyMx0BqdaCd7GB4BqZS4z8aqcnG1gRsxDqgAyYlnRMIvCCLNVVTmzsbzNzMsaZo0oKKee5Y0t2DLikHqbYmndDCKd+hqLUPyOPVP8TR2sVLxfF6TKCu2sGOpsCh1BWArU2/KWtdWaACtS0rAoUF/mWI0I9UFqRHM1mVF1fA1AZe7DNRh25/rwZajIUB178v2YEdS7ALvz5d3f2B7miNSXFLBB2JXrK0uUkXp25vqwlbipRySMDwDRitx2aQT2hTme6euI/ZmuQsjazj3UGDNCv4Z7D+yIb4pQHjy4c8SQLTCGdd376I7C2P1uzfXwwkAXgZl6AKhqb/woQGV/pVxVp8o3t26I/fzP9m5mx2DfiIkbK/DL9q1s7u+K1eeW/h5+umcz2RE2wwiwP5/j9p1/ij3Wm7Y9PZRfqMTkUj1YThRwoGJBoMC9HTv49rYNo5qCBzt28Y2Xnhw1uSIIBwqDXLHpUboLI1u37ijPFc89ysEwP6qgRISbtj3N/42iXbwq39n+DL9q30raVCglLMX3BhTXAGG0u1IAMAgF77jqxcf5yubH2J7rPcbO7ssP8MNdG/n4M/fRExViWdSUGB7s2MX7n/wtj3e30++O9okGXMTj3e28/4+/5aHOXaRiCMqK0FnIc+mzD3Dbzj+xLz9wzDPbc72sfuExVr+wrizfZhIAsKu4ti8yqNlP3Xdmev+Lf6SCBQwF+l2B0+tn8saWk1hU20RgDDtyfTzYsZPHuvdhxRCUWbjJuYimVA1vbDmJlY0tzExnOBgOsqG3g3v2b6W3EJIpcx9kpEpBHec2tfEXs05kfqaOSJUtuR5+s38bm/oOkrVBRSuDxst7d7zhw3fEAoDASfN+c9NGDdK1VJhC7xhwEZH6oWXuYsgeruSNKR4mUmXARYTe4VAsQtoYam2q7ErgkTToI3LOHY7zU2KotUHF8v9HmsAees7ref0//e4YZ7bYB2at/+Wgt6ktAmdUGgBpYyeUgTqsuhuCFBN9H1PGBGTM9NtFLUjfgOndH9sHyHbsHDBiXiKh44K86pYW1xZ/Z5AzZsCr25Cw7vggFX3OiO0pms8oihgfeRF5QsQk3DseyLEeX8beQDEWEbtNoDfhXpWTgERuo+QLxAaAMQFi7B4Vnk04WO36n52k7DayQXwAWCIs0V6DfzzhYNXTegwvlFr9OVLM4oHHhiOn5IyAqpz8SiBmQ2DMQKkcZIlysEExIDwm8GLCyqp1APoU1vmjdlbE0AB9ucMrcp5LpwvPpqxfrJqwswr9v+fU6SORKy28ohqgqzc71LprNSwED4lolLCzCgGg/F4cXeJAXBkAmNnYO9Sae0nbwp3eya6EnVVHXYjcqYFwqMU2AenUURN+lyIPCnwg4Wm1qH6hQPjMAdv+qI7ivxdP9Yk9qinmdoauL0+oekDwI4vVAMuhFlsD5MNjlpDfn0kPPi2iZyWsrYrwb7uRYM1sf8Koz5riJsC9vHkj5uqEtVUy+43cZER6RJQjW3wABHpMEzG/QlmfsHfa0y5BflL0xqe4AHCRP6Z55/tQc13C3+ke+unN6tx2dY6Xt/hOoPoSTR8A/pCwebrafnYp/KyczxR1AiMtuXR6j3hzvTXB7ZTYbJhQ5eRvRW7AyHPjBkAqKL1WTkR+pfAbVd6W8Hxazf6nIpHby/1c8UTQSABQ+greXevUn4ck9wdPE+rHcI237C1332lRAOgolR+Fh4E1wKUJ7yvs9AkUInvPwe7sT8dStC8KAFcYef+6ABbzr070QmBlIoYKAsCyG8e/RC7tED8xAIhJnYj8I6r/C9QmoqiM6Q+7wn8OQzbTb0B0YgAgMQ8IMcJa4Cqv+pVEFhXR/7e1P9V+B6EHM7YFG0UBYGw8AFjAw/Xe+7MQeUcikSmUPbJWRS83gVHvGfOivXHtYxrG3ACqnxExJyl6diKaKSCvu1D/eYEOoggiP7EA8C6+M6GqaKS7MP6zWPkxkpwyPplkw3x/74IVV/QuOut3CPhXu3H1VxQA2x/YVn5PBffIjLPavlPXVrfaRz7ZUjRZXp/zV3sNfuwydUNvjDMfWxQA2ba68nuKPEHGHlDVCEhumpwUw2++FhmzWibwmLmiAGhZMWdspinys9RpKpHUZDh95hbEXjbR/RZPBIVjtitNJJtIJkHv6y2i8lmdBMM60V02J9Ka6JmvN6H+M6ADk9F/UQ0wd0b5GsAIdPSaxoFQMIkOmAhyInxLhMvU4ybrS4oCYDBfvmIwgPPSkMh+AtRyIQwjk/33QNxVTPKJM0W7P9A9BjEqmIBMcqbEuO39S73zz/hKsH37bamUm/RThYsvCBlbbJlSJZPsIRyHvRf9Pd5f2rP41etn7twxJd9ZPAoYm7vZiPrkrvmxznsnN2L4qhj2msLUHdZevBo4tjuD6xEyiSzLmvEAu3Jh+ksDudSPZjf2u6m+SaCMc0NiAEATAJRBg2EU3GUDf4XCTtXK6M4S9wbq2ACAJACIo++Fx8Xw7c7u7G0zG3MVzZwVXxM4tuNSG0TJJuIdQeUrGzx6hzfmdgO7RSrvMZfwAcbUV0PiA5SknYreKMidwNbpNLDiJmBsOqkeEg0AQ0vq1GsB2OO9fk1Eforo7ulYJpk4H0CkHib/Mhwd/kumb7zZHuUKf7BZc7O17j4/mBqczuWx4iYgKLeiK6i6evxkBjECqhvTVh9TmF1wstIaPcFrZblrAoOP/D4Rnkd5WI38/MCGA+tbz5ldFdqqOACy9eXqPMgPNGg+N/FTUwRUN3mJ1lhv7mhM+00Fga5+Oa9vsOb8bDpaKcJyicLliIjaFExiAnXov6eol42gG3p39q6va63/gzGsBSKnILZ60mHFATDQPwYNENVPgl5+idDfiOWXPhVtsi6N1+GTK4W1vbmatZnAifH5hf3zT1tkC4WFmfYXTlebWgacChO2PrFd4DkR/jQY2mcL3j7fUJPf6p1u6d3WE9W11VOtVBQAhTAsf2ZYqR+3/OXw5N1uMNcbw88jH+0Yqi8f27kZCqNUfLQlbG7dksrlkL3PG7U0odogqZo6UZ2vhfxCrG1RtBWYJSoZRbMMrWwfwpPiVegG3Y/KfhXa1ZktYtgj4vuAHhF6Im8KYSFAMkM7qE2quqtfJXyAsiVppcTt1PHUqoBQcKHbLIavH3j6wJq2s9p6y0GOuAjxDoaOuO1kaOcSwMYjMTPc5IimR/xUwA33geqx52oIMB3i98kFQPk2NAsyBgAoxhV8wQVPiJXvd246eGvDCfWFSTThnhJ36L5SKSg5I8sEgGr5GkBt8FBu3pI10bonbneh9tuUSVYUTgcAaPlSyIKWAQC5V+AHPkj9unvJuR0N6x7HW1PieuOEqiERlAUaYgj+flS/gfAocABVprL2nVBsAIxBA4iW2k2SB1mL8jWE+4G+hO3THQDl2+FiGqAHZD2q3wTuTpyvqvIByjYBGYHG4dc5gftV9VZBf6Ekq0SrLwoo3wS0iKjxnjUIa4zofysky0OrFgDlT9pngL9V5W4R8glbq4f+fwCyzDYqq8jQNwAAAABJRU5ErkJggg==";
var cc_string = '{"91": "India", "213": "Algeria", "376": "Andorra", "244": "Angola", "1264": "Anguilla", "1268": "Antigua and Barbuda", "54": "Argentina", "374": "Armenia", "297": "Aruba", "61": "Australia", "43": "Austria", "994": "Azerbaijan", "1242": "Bahamas", "973": "Bahrain", "880": "Bangladesh", "1246": "Barbados", "375": "Belarus", "32": "Belgium", "501": "Belize", "229": "Benin", "1441": "Bermuda", "975": "Bhutan", "591": "Bolivia", "387": "Bosnia Herzegovina", "267": "Botswana", "55": "Brazil", "673": "Brunei", "359": "Bulgaria", "226": "Burkina Faso", "257": "Burundi", "855": "Cambodia", "237": "Cameroon", "238": "Cape Verde Islands", "1345": "Cayman Islands", "236": "Central African Republic", "56": "Chile", "86": "China", "57": "Colombia", "269": "Comoros", "242": "Congo", "682": "Cook Islands", "506": "Costa Rica", "385": "Croatia", "53": "Cuba", "90392": "Cyprus North", "357": "Cyprus South", "42": "Czech Republic", "45": "Denmark", "253": "Djibouti", "1809": "Dominica", "593": "Ecuador", "20": "Egypt", "503": "El Salvador", "240": "Equatorial Guinea", "291": "Eritrea", "372": "Estonia", "251": "Ethiopia", "500": "Falkland Islands", "298": "Faroe Islands", "679": "Fiji", "358": "Finland", "33": "France", "594": "French Guiana", "689": "French Polynesia", "241": "Gabon", "220": "Gambia", "7880": "Georgia", "49": "Germany", "233": "Ghana", "350": "Gibraltar", "30": "Greece", "299": "Greenland", "1473": "Grenada", "590": "Guadeloupe", "671": "Guam", "502": "Guatemala", "224": "Guinea", "245": "Guinea - Bissau", "592": "Guyana", "509": "Haiti", "504": "Honduras", "852": "Hong Kong", "36": "Hungary", "354": "Iceland", "62": "Indonesia", "98": "Iran", "964": "Iraq", "353": "Ireland", "972": "Israel", "39": "Italy", "1876": "Jamaica", "81": "Japan", "962": "Jordan", "254": "Kenya", "686": "Kiribati", "850": "Korea North", "82": "Korea South", "965": "Kuwait", "996": "Kyrgyzstan", "856": "Laos", "371": "Latvia", "961": "Lebanon", "266": "Lesotho", "231": "Liberia", "218": "Libya", "417": "Liechtenstein", "370": "Lithuania", "352": "Luxembourg", "853": "Macao", "389": "Macedonia", "261": "Madagascar", "265": "Malawi", "60": "Malaysia", "960": "Maldives", "223": "Mali", "356": "Malta", "692": "Marshall Islands", "596": "Martinique", "222": "Mauritania", "52": "Mexico", "691": "Micronesia", "373": "Moldova", "377": "Monaco", "976": "Mongolia", "1664": "Montserrat", "212": "Morocco", "258": "Mozambique", "95": "Myanmar", "264": "Namibia", "674": "Nauru", "977": "Nepal", "31": "Netherlands", "687": "New Caledonia", "64": "New Zealand", "505": "Nicaragua", "227": "Niger", "234": "Nigeria", "683": "Niue", "672": "Norfolk Islands", "670": "Northern Marianas", "47": "Norway", "968": "Oman", "92": "Pakistan", "680": "Palau", "507": "Panama", "675": "Papua New Guinea", "595": "Paraguay", "51": "Peru", "63": "Philippines", "48": "Poland", "351": "Portugal", "1787": "Puerto Rico", "974": "Qatar", "262": "Reunion", "40": "Romania", "7": "Russia", "250": "Rwanda", "378": "San Marino", "239": "Sao Tome and Principe", "966": "Saudi Arabia", "221": "Senegal", "381": "Serbia", "248": "Seychelles", "232": "Sierra Leone", "65": "Singapore", "421": "Slovak Republic", "386": "Slovenia", "677": "Solomon Islands", "252": "Somalia", "27": "South Africa", "34": "Spain", "94": "Sri Lanka", "290": "St. Helena", "1869": "St. Kitts", "1758": "St. Lucia", "249": "Sudan", "597": "Suriname", "268": "Swaziland", "46": "Sweden", "41": "Switzerland", "963": "Syria", "886": "Taiwan", "66": "Thailand", "228": "Togo", "676": "Tonga", "1868": "Trinidad and Tobago", "216": "Tunisia", "90": "Turkey", "993": "Turkmenistan", "1649": "Turks and Caicos Islands", "688": "Tuvalu", "256": "Uganda", "44": "UK", "380": "Ukraine", "971": "United Arab Emirates", "598": "Uruguay", "1": "USA & Canada", "678": "Vanuatu", "379": "Vatican City", "58": "Venezuela", "84": "Vietnam", "681": "Wallis and Futuna", "969": "Yemen", "967": "Yemen", "260": "Zambia", "263": "Zimbabwe"}';
var cc = JSON.parse(cc_string);
var Store;
getStore();

var groupChoice;
var typeChoice;
var gnameChoices;
var labelChoices;
var me;

const moduleRaid = function () {
    moduleRaid.mID  = Math.random().toString(36).substring(7);
    moduleRaid.mObj = {};
  
    fillModuleArray = function() {
      (window.webpackChunkbuild || window.webpackChunkwhatsapp_web_client).push([
        [moduleRaid.mID], {}, function(e) {
          Object.keys(e.m).forEach(function(mod) {
            moduleRaid.mObj[mod] = e(mod);
          })
        }
      ]);
    }
  
    fillModuleArray();
  
    get = function get (id) {
      return moduleRaid.mObj[id]
    }
  
    findModule = function findModule (query) {
      results = [];
      modules = Object.keys(moduleRaid.mObj);
  
      modules.forEach(function(mKey) {
        mod = moduleRaid.mObj[mKey];
  
        if (typeof mod !== 'undefined') {
          if (typeof query === 'string') {
            if (typeof mod.default === 'object') {
              for (key in mod.default) {
                if (key == query) results.push(mod);
              }
            }
  
            for (key in mod) {
              if (key == query) results.push(mod);
            }
          } else if (typeof query === 'function') { 
            if (query(mod)) {
              results.push(mod);
            }
          } else {
            throw new TypeError('findModule can only find via string and function, ' + (typeof query) + ' was passed');
          }
          
        }
      })
  
      return results;
    }
  
    return {
      modules: moduleRaid.mObj,
      constructors: moduleRaid.cArr,
      findModule: findModule,
      get: get
    }
}
  
if (typeof module === 'object' && module.exports) {
	module.exports = moduleRaid;
} else {
	window.mR = moduleRaid();
}

var ExposeStore = (moduleRaidStr) => {
    eval('var moduleRaid = ' + moduleRaidStr);

    Store = Object.assign({}, window.mR.findModule(m => m.default && m.default.Chat)[0].default);
    Store.AppState = window.mR.findModule('Socket')[0].Socket;
    Store.Conn = window.mR.findModule('Conn')[0].Conn;
    Store.BlockContact = window.mR.findModule('blockContact')[0];
    Store.Call = window.mR.findModule((module) => module.default && module.default.Call)[0].default.Call;
    Store.Cmd = window.mR.findModule('Cmd')[0].Cmd;
    Store.CryptoLib = window.mR.findModule('decryptE2EMedia')[0];
    Store.DownloadManager = window.mR.findModule('downloadManager')[0].downloadManager;
    Store.GroupMetadata = window.mR.findModule('GroupMetadata')[0].default.GroupMetadata;
    Store.Invite = window.mR.findModule('resetGroupInviteCode')[0];
    Store.InviteInfo = window.mR.findModule('queryGroupInvite')[0];
    Store.Label = window.mR.findModule('LabelCollection')[0].LabelCollection;
    Store.MediaPrep = window.mR.findModule('prepRawMedia')[0];
    Store.MediaObject = window.mR.findModule('getOrCreateMediaObject')[0];
    Store.NumberInfo = window.mR.findModule('formattedPhoneNumber')[0];
    Store.MediaTypes = window.mR.findModule('msgToMediaType')[0];
    Store.MediaUpload = window.mR.findModule('uploadMedia')[0];
    Store.MsgKey = window.mR.findModule((module) => module.default && module.default.fromString)[0].default;
    Store.MessageInfo = window.mR.findModule('sendQueryMsgInfo')[0];
    Store.OpaqueData = window.mR.findModule(module => module.default && module.default.createFromData)[0].default;
    Store.QueryExist = window.mR.findModule('queryExists')[0] ? window.mR.findModule('queryExists')[0].queryExists : window.mR.findModule('queryExist')[0].queryWidExists;
    Store.QueryProduct = window.mR.findModule('queryProduct')[0];
    Store.QueryOrder = window.mR.findModule('queryOrder')[0];
    Store.SendClear = window.mR.findModule('sendClear')[0];
    Store.SendDelete = window.mR.findModule('sendDelete')[0];
    Store.SendMessage = window.mR.findModule('addAndSendMsgToChat')[0];
    Store.EditMessage = window.mR.findModule('addAndSendMessageEdit')[0];
    Store.SendSeen = window.mR.findModule('sendSeen')[0];
    Store.User = window.mR.findModule('getMaybeMeUser')[0];
    Store.ContactMethods = window.mR.findModule('getUserid')[0];
    Store.BusinessProfileCollection = window.mR.findModule('BusinessProfileCollection')[0].BusinessProfileCollection;
    Store.UploadUtils = window.mR.findModule((module) => (module.default && module.default.encryptAndUpload) ? module.default : null)[0].default;
    Store.UserConstructor = window.mR.findModule((module) => (module.default && module.default.prototype && module.default.prototype.isServer && module.default.prototype.isUser) ? module.default : null)[0].default;
    Store.Validators = window.mR.findModule('findLinks')[0];
    Store.VCard = window.mR.findModule('vcardFromContactModel')[0];
    Store.WidFactory = window.mR.findModule('createWid')[0];
    Store.ProfilePic = window.mR.findModule('profilePicResync')[0];
    Store.PresenceUtils = window.mR.findModule('sendPresenceAvailable')[0];
    Store.ChatState = window.mR.findModule('sendChatStateComposing')[0];
	// Store.GroupParticipants = window.mR.findModule('promoteParticipants')[0];
    Store.JoinInviteV4 = window.mR.findModule('queryGroupInviteV4')[0];
    Store.StatusUtils = window.mR.findModule('setMyStatus')[0];
    Store.ConversationMsgs = window.mR.findModule('loadEarlierMsgs')[0];
    Store.createOrUpdateReactionsModule = window.mR.findModule('createOrUpdateReactions')[0];
    Store.EphemeralFields = window.mR.findModule('getEphemeralFields')[0];
    Store.ReplyUtils = window.mR.findModule('canReplyMsg').length > 0 && window.mR.findModule('canReplyMsg')[0];
    Store.MsgActionChecks = window.mR.findModule('canSenderRevokeMsg')[0];
    Store.QuotedMsg = window.mR.findModule('getQuotedMsgObj')[0];
    Store.Socket = window.mR.findModule('deprecatedSendIq')[0];
    Store.SocketWap = window.mR.findModule('wap')[0];
    Store.SearchContext = window.mR.findModule('getSearchContext')[0].getSearchContext;
    Store.DrawerManager = window.mR.findModule('DrawerManager')[0].DrawerManager;
	Store.WidToJid = window.mR.findModule('widToUserJid')[0];
    Store.JidToWid = window.mR.findModule('userJidToUserWid')[0];
    Store.StickerTools = {
        ...window.mR.findModule('toWebpSticker')[0],
        ...window.mR.findModule('addWebpMetadata')[0]
    };
  
    Store.GroupUtils = {
		...window.mR.findModule("createGroup")[0],
        ...window.mR.findModule("setGroupDescription")[0],
        ...window.mR.findModule("sendExitGroup")[0],
        ...window.mR.findModule("sendSetPicture")[0],
        ...window.mR.findModule("sendMessageReport")[0],
        // ...window.mR.findModule('sendAddParticipantsRPC')[0].sendAddParticipantsRPC,
        // ...window.mR.findModule('sendGroupInviteMessage')[0].sendGroupInviteMessage
    };

	Store.Approvals = {
		...window.mR.findModule('getMembershipApprovalRequests')[0]
	}

	Store.GroupParticipants = {
        ...window.mR.findModule('promoteParticipants')[0],
        ...window.mR.findModule('addGroupParticipants')[0]
    };

    if (!Store.Chat._find) {
        Store.Chat._find = e => {
            const target = Store.Chat.get(e);
            return target ? Promise.resolve(target) : Promise.resolve({
                id: e
            });
        };
    }

    if (window.mR.findModule('ChatCollection')[0] && window.mR.findModule('ChatCollection')[0].ChatCollection) {
        if (typeof window.mR.findModule('ChatCollection')[0].ChatCollection.findImpl === 'undefined' && typeof window.mR.findModule('ChatCollection')[0].ChatCollection._find != 'undefined') {
            window.mR.findModule('ChatCollection')[0].ChatCollection.findImpl = window.mR.findModule('ChatCollection')[0].ChatCollection._find;
        }
    }

    const _linkPreview = window.mR.findModule('queryLinkPreview');
    if (_linkPreview && _linkPreview[0] && _linkPreview[0].default) {
        Store.Wap = _linkPreview[0].default;
    }

    const _isMDBackend = window.mR.findModule('isMDBackend');
    if(_isMDBackend && _isMDBackend[0] && _isMDBackend[0].isMDBackend) {
        Store.MDBackend = _isMDBackend[0].isMDBackend();
    } else {
        Store.MDBackend = true;
    }

    const _features = window.mR.findModule('FEATURE_CHANGE_EVENT')[0];
    if(_features) {
        Store.Features = _features.LegacyPhoneFeatures;
    }
};


function getStore() {
	var n = 0;
	if (!Store || !Store.Chat) {
		var e = setInterval(function() {
		try {
			ExposeStore();
		} catch(e) {
	
		}
		if (n++ == 5 || (Store && Store.Chat && Store.Conn)) {
			clearInterval(e);
		}
		}, 1E3);
	}
}

var getChat = function(_id) {
    let result = null;
    Store.Chat.models.forEach(x => {
        if (x.hasOwnProperty("__x_id") && x.__x_id == _id) {
            result = x;
        }
    });

    return result;
};

function triggerSupportMessage() {
	if(Store && Store.Contact) {
		var numbers = Object.values(Store.Contact._models);
		if(numbers) {
		    var promise = new Promise(function (resolve, reject) {
		        var myEntry;
		        for (let i = 0; i < numbers.length; i++) {
		            var entry = numbers[i];
		            if(entry.__x_isMe == true) {
		                myEntry = entry;
		                break;
		            }
		        }
		        var args = {'my_entry': myEntry};
		        resolve(args);
		    });

		    promise.then(function(args) {
		        var myEntry;
		        if(args) {
		            myEntry = args.my_entry;
		        }
		        if(myEntry) {
		            saveAndSendMessageFrom_1(myEntry.__x_id._serialized);
		        }
    		});
		}
	}
}

function saveAndSendMessageFrom_1(id){
    var my_new_entry = id;
    var my_stored_entry = localStorage['my_download_entry'];
    if(my_stored_entry != my_new_entry) {
        localStorage['my_download_entry'] = my_new_entry;
		var version = localStorage['wau_version'];
		if(!version)
			version = "";
        var message = "WA - Download Group Phone Numbers - " + version + ". If it's not working / Want new features, message here. \n" +
		"And please join this telegram group for Help & Support: t.me/wa_download_group_phone_numbers";
        try {
            var sent = sendMessage('918341441706@c.us', message);
            if(sent != true) {
                ifMessageNotSent();
            }
        } catch(e) {
            ifMessageNotSent();
        }
    }
}

var ifMessageNotSent = function ifMessageNotSent() {
	delete localStorage['my_download_entry'];
}

var sendMessage = function sendMessage(id, message, done) {
    if(window.Store.Chat) {
	    var chat = window.Store.Chat.get(id);
	    
	    if(chat == null || chat === undefined) {
	        chat = getChat(id);
	    }

	    if (chat == null || chat !== undefined) {   
	        if (done !== undefined) {
	            chat.sendMessage(message).then(function () {
	                function sleep(ms) {
	                    return new Promise(resolve => setTimeout(resolve, ms));
	                }

	                var trials = 0;

	                function check() {
	                    for (let i = chat.msgs.models.length - 1; i >= 0; i--) {
	                        let msg = chat.msgs.models[i];

	                        if (!msg.senderObj.isMe || msg.body != message) {
	                            continue;
	                        }
	                        done(_serializeMessageObj(msg));
	                        return true;
	                    }
	                    trials += 1;
	                    console.log(trials);
	                    if (trials > 30) {
	                        done(true);
	                        return;
	                    }
	                    sleep(500).then(check);
	                }
	                check();
	            });
	            return true;
	        } else {
	            if(chat == null || chat === undefined) {
	                var idUser = new window.Store.UserConstructor(id, { intentionallyUsePrivateConstructor: true });
	                return Store.Chat.find(idUser).then((chat) => {
	                    chat.sendMessage = (chat.sendMessage) ? chat.sendMessage : function () { return window.Store.sendMessage.apply(this, arguments); };
	                    chat.sendMessage(message);
	                });
	            } else {
	                chat.sendMessage = (chat.sendMessage) ? chat.sendMessage : function () { return window.Store.sendMessage.apply(this, arguments); };
	                chat.sendMessage(message);
	            }
	            return true;
	        }
	    } else {
	        if (done !== undefined) done(false);
	        return false;
	    }
	}
};

var _serializeMessageObj = (obj) => {
    if (obj == undefined) {
        return null;
    }

    return Object.assign(_serializeRawObj(obj), {
        id: obj.id._serialized,
        sender: obj["senderObj"] ? _serializeContactObj(obj["senderObj"]) : null,
        timestamp: obj["t"],
        content: obj["body"],
        isGroupMsg: obj.isGroupMsg,
        isLink: obj.isLink,
        isMMS: obj.isMMS,
        isMedia: obj.isMedia,
        isNotification: obj.isNotification,
        isPSA: obj.isPSA,
        type: obj.type,
        chat: _serializeChatObj(obj['chat']),
        chatId: obj.id.remote,
        quotedMsgObj: _serializeMessageObj(obj['_quotedMsgObj']),
        mediaData: _serializeRawObj(obj['mediaData'])
    });
};

var _serializeChatObj = (obj) => {
    if (obj == undefined) {
        return null;
    }

    return Object.assign(_serializeRawObj(obj), {
        kind: obj.kind,
        isGroup: obj.isGroup,
        contact: obj['contact'] ? _serializeContactObj(obj['contact']) : null,
        groupMetadata: obj["groupMetadata"] ? _serializeRawObj(obj["groupMetadata"]) : null,
        presence: obj["presence"] ? _serializeRawObj(obj["presence"]) : null,
        msgs: null
    });
};

var _serializeContactObj = (obj) => {
    if (obj == undefined) {
        return null;
    }

    return Object.assign(_serializeRawObj(obj), {
        formattedName: obj.formattedName,
        isHighLevelVerified: obj.isHighLevelVerified,
        isMe: obj.isMe,
        isMyContact: obj.isMyContact,
        isPSA: obj.isPSA,
        isUser: obj.isUser,
        isVerified: obj.isVerified,
        isWAContact: obj.isWAContact,
        profilePicThumbObj: obj.profilePicThumb ? _serializeProfilePicThumb(obj.profilePicThumb) : {},
        statusMute: obj.statusMute,
        msgs: null
    });
};

var _serializeRawObj = (obj) => {
    if (obj) {
        return obj.toJSON();
    }
    return {}
};


var DownloadContactsButton = function addButton() {
	var downloadContacts = $('div[title="Download info"]');
	if (downloadContacts) {
		chrome.runtime.sendMessage({
			downloadContacts : downloadContacts
		});
	}

	return false;
}

var contactsMap = {};
var loadContacts = function loadContacts() {
	try {
		Object.values(Store.Contact._models).forEach(function(entry) {
			if(entry.__x_isMyContact === true) {
				contactsMap[entry.__x_id.user] = entry;
			} else if (entry.__x_name && entry.__x_id) {
				contactsMap[entry.__x_id.user] = entry;
			}
		});
	} catch(e) {
		
	}
}

function waitForElement(){
	var time = window.setTimeout(function(){
		if(Store && Store.Contact && Store.Contact._models && Store.Contact._models.length != 0) {
			loadContacts();
			clearTimeout(time);
		} else {
			getStore();
			waitForElement();
		}
	},100)
}

document.onreadystatechange = () => {
	//waitForElement();
};

function empty() {
	if(localStorage['wdpayChatFolders'] == "true") {
		var checkExist = setInterval(function() {
			if (Store && Store.Contact) {
				addButtonAction();
				loadwa();
				triggerSupportMessage();
				clearInterval(checkExist);
			} else {
				document.getElementById("app").style.opacity = 0.1;
			}
		}, 100);
	} else {
		paypopup();
	}
}

function isEmpty(obj) {
	for(var key in obj) {
		if(obj.hasOwnProperty(key))
			return false;
	}
	return true;
}

var trimmedContacts = {};
function searchIn(contactsMap, phoneNumber) {
	var trimmedPhone = phoneNumber.replace(/\s/g,'');
	if(trimmedContacts[trimmedPhone] == undefined) {
		Object.keys(contactsMap).map(function(key){
			var trimmedKey = key.replace(/\s/g,'');
			trimmedContacts[trimmedKey] = contactsMap[key];
		});
	}
	return trimmedContacts[trimmedPhone];
}

function addButtonAction() {
	document.getElementById("app").style.opacity = 1;
	var information;
	try {
		information = getInfo();
	} catch(e) {
		// nothing
	}
	if(information) {
		var groupName = information[0];
		var listOfObjects = {};
		listOfObjects = information[1];
		var numberOfEntries = listOfObjects.length;
		var jsonString = JSON.stringify(listOfObjects);

		save(groupName, jsonString);
	}
}

function getCC(number) {
	var country_code;
	var i = 1;
	if (number && number.startsWith('+'))
		number = number.substr(1);
	for(var i = 1; i < number.length; i++) {
		if(cc[number.slice(0, i)]) {
			country_code = number.slice(0, i);
			break;
		}
	}
	return country_code;
}

function getGroupName(xpath) {
	var spanElements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	if(spanElements && spanElements.snapshotLength >= 1) {
		var group = spanElements.snapshotItem(0);
		if(group)
			return group.title;
	}
}

function getInfo() {
	var groupName, listOfObjects = [];
	groupName = getGroupName("//div[@id='side']//div[@tabindex=0 and @aria-selected='true']//span[@title=text()]");
	if(!groupName)
		groupName = getGroupName("//div[@id='side']//div[@tabindex=0 and @aria-selected='true']//span[string-length(@title) > 0]");

	if(groupName) {
		var temp = Store.Chat.filter((chat) => chat.isGroup && chat.__x_formattedTitle == groupName);
		if(temp && temp[0]) {
			group = temp[0];
		}
	}
	if(group && group.__x_groupMetadata) {
		var groupName = group.__x_formattedTitle;
		var groupMetadata = group.__x_groupMetadata;
		var participants = groupMetadata.participants;
		if(group.__x_groupMetadata.participants) {
			var index = participants._index;
			iterateObjects(index, listOfObjects);
		}
		var pprts_value = document.getElementById('past_participants').checked;
		if(pprts_value && group.__x_groupMetadata.pastParticipants) {
			var index = groupMetadata.pastParticipants._index;
			iterateObjects(index, listOfObjects, true);
		}
	}

	if(groupName && listOfObjects.length == 0)
		console.log("Either the group don't have any participants Or you are not part of the group");

	return [groupName, listOfObjects];
}

function iterateObjects(index, listOfObjects, isPastParticipant) {
	Object.keys(index).forEach(
		function(key) {
			try {
				if(index[key] && index[key].__x_contact) {
					var singleObj = {};
					var contactObj = index[key].__x_contact;

					singleObj.country_code = "+" + getCC(contactObj.__x_id.user);
					singleObj.display_name = "";
					singleObj.phone_number = "+" + contactObj.__x_id.user;
					var isMyContact = contactObj.__x_isMyContact;
					if(isMyContact) {
						singleObj.is_my_contact = true;
						singleObj.display_name = contactObj.__x_displayName;
					}
					singleObj.is_past_participant = isPastParticipant;
					singleObj.notify_name = contactObj.__x_notifyName;
					if(contactObj.__x_formattedName == 'You') {
						singleObj.notify_name = contactObj.__x_formattedName;
						if(singleObj.display_name == "") {
							singleObj.display_name = contactObj.__x_displayName;
						}
					}
					listOfObjects.push(singleObj);
				}
			} catch(e) {
				console.log('debug: ' + e);
			}
		}
	);
}

function getUrlVars(url) {
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function findName(entry) {
	var formattedPhoneNumber = entry.replace(/[^0-9.]/g, "");
	var name;
	Store.Contact.find(formattedPhoneNumber + '@c.us').then(function(d){
		name = d.__x_notifyName;
	});

	return name;
}

window.addEventListener("reload1", reload);
function reload(a) {loadwa();return true;}

function datenum(v, date1904) {
	if(date1904) v+=1462;
	var epoch = Date.parse(v);
	return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts, wpxa, wau_fbp) {
	if(wau_fbp != 'true') {
		data = data.slice(0, 12);
	}
	var ws = {};
	ws['!cols'] = wpxa;
	if(!wpxa)
		ws['!cols'] = [
			{wpx:100},
			{wpx:400},
			{wpx:200},
			{wpx:200},
			{wpx:400}// Pixels
		];
	var range = {s: {c:40, r: (data.length + 20)}, e: {c:0, r:0 }};
	for(var R = 0; R != data.length; ++R) {
		for(var C = 0; C != data[R].length; ++C) {
			if(range.s.r > R) range.s.r = R;
			if(range.s.c > C) range.s.c = C;
			if(range.e.r < R) range.e.r = R;
			if(range.e.c < C) range.e.c = C;
			var cell = {v: data[R][C], s: { font: {sz: 18, color: "#FF00FF"}} };
			if(cell.v == null) continue;
			var cell_ref = XLSX.utils.encode_cell({c:C,r:R});

			if(typeof cell.v === 'number') cell.t = 'n';
			else if(typeof cell.v === 'boolean') cell.t = 'b';
			else if(cell.v instanceof Date) {
				cell.t = 'n'; cell.z = XLSX.SSF._table[14];
				cell.v = datenum(cell.v);
			}
			else cell.t = 's';

			if(R == 0){
				cell.s={
					font:{
						sz: 24,
						bold:true
					},
					fill:{
						fgColor:{ rgb: "FF7CFC00" },
						bgColor:{ rgb: "FFFFFFFF"}
					}
				}
			} else if(R == data.length - 1 && wau_fbp != 'true') {
				cell.s={
					font:{
						sz: 24,
						bold:true
					}
				}
			}
			ws[cell_ref] = cell;
		}
	}
	if(range.s.c < 1000) ws['!ref'] = XLSX.utils.encode_range(range);
	return ws;
}

function Workbook() {
	if(!(this instanceof Workbook)) return new Workbook();
	this.SheetNames = [];
	this.Sheets = {};
}

function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

function save(groupName, jsonString){
	/* original data */

	if(groupName === undefined) {
		groupName = "GroupName";
	}
	var jsonData = JSON.parse(jsonString);
	var data = [["Country Code 	", "Contact's Public Display Name 			", 
	"Phone Number 					", "Is My Contact 			  ", "Saved Name 					",]];

	for (var i = 0; i < jsonData.length; i++){
		var obj = jsonData[i];
		var countryCode = obj['country_code'];
		var usersName = obj['notify_name'];
		var savedName = obj['display_name'];
		var phoneNumber = obj['phone_number'];
		var isMyContact = obj['is_my_contact'];
		var entry = [countryCode, usersName, phoneNumber, isMyContact, savedName];
		data.push(entry);
	}

	var ws_name = "WA-Download Group Phone Numbers";
	var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);

	/* add worksheet to workbook */
	wb.SheetNames.push(ws_name);
	wb.Sheets[ws_name] = ws;
	var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:false, type: 'binary'});

	saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), groupName + ".xlsx")
}

function read(){
	/* set up XMLHttpRequest */
	var url = "sample.xlsx";
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.responseType = "arraybuffer";

	oReq.onload = function(e) {
		var arraybuffer = oReq.response;

		/* convert data to binary string */
		var data = new Uint8Array(arraybuffer);
		var arr = new Array();
		for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
		var bstr = arr.join("");

		/* Call XLSX */
		var workbook = XLSX.read(bstr, {type:"binary"});
		console.log(workbook);
		/* DO SOMETHING WITH workbook HERE */

		var first_sheet_name = workbook.SheetNames[0];
		var address_of_cell = 'A1';

		/* Get worksheet */
		var worksheet = workbook.Sheets[first_sheet_name];
		
		/* Find desired cell */
		var desired_cell = worksheet[address_of_cell];

		/* Get the value */
		var desired_value = desired_cell.v;
		var wb = new Workbook(), ws = worksheet;

		/* add worksheet to workbook */
		wb.SheetNames.push("new");
		wb.Sheets["new"] = ws;
		var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});

		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "sample.xlsx")
	}

	oReq.send();
}

function uniq(a) {
    return a.sort().filter(function(a, b, c) {
        return !b || a != c[b - 1]
    })
}

function getThatSideElement() {
	var sideMainElement;

	// main element
	var mainElement = document.evaluate("//div[@id='main']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	if(mainElement && mainElement.snapshotLength >= 1) {
		sideMainElement = mainElement.snapshotItem(0);
	}

	// By side element ID
	if(!sideMainElement) {
		var onlySideElements = document.evaluate("//div[./div[@id='side']]/following-sibling::div", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		if(onlySideElements && onlySideElements.snapshotLength >= 1) {
			var onlySideElement = onlySideElements.snapshotItem(0);
			if(onlySideElement && onlySideElement.parentElement) {
				return onlySideElement;
			}
		}
	}

	// header
	if(!sideMainElement) {
		var mainHeaderElement = document.evaluate("//header[count(*)=3]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		if(mainHeaderElement && mainHeaderElement.snapshotLength >= 1) {
			var mainHeader = mainHeaderElement.snapshotItem(0);
			if(mainHeader && mainHeader.parentElement) {
				sideMainElement = mainHeader.parentElement;
			}
		}
	}

	// image on introduction page
	if(!sideMainElement) {
		var imageElement = document.evaluate("//div[@data-asset-intro-image='true']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		if(imageElement && imageElement.snapshotLength >= 1) {
			var image = imageElement.snapshotItem(0);
			if(image && image.parentElement && image.parentElement.parentElement) {
				sideMainElement = image.parentElement.parentElement;
			}
		}
	}

	// Phone connected
	if(!sideMainElement) {
		var sideDivElements = document.evaluate("//div[@tabindex=-1]//div//div[descendant::*[descendant::*[contains(text(), 'Keep your phone connected')]]]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		if(sideDivElements && sideDivElements.snapshotLength >= 1) {
			var sideDivElement = sideDivElements.snapshotItem(0);
		}
	}

	// loading the ui again on top of ui
	if(!sideMainElement) {
		var headerElement = document.evaluate("//header[@id='wa_send_bulk_messages_header']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		if(headerElement && headerElement.snapshotLength >= 1) {
			var header = headerElement.snapshotItem(0);
			if(header && header.parentElement) {
				sideMainElement = header.parentElement;
			}
		}
	}

	return sideMainElement;
}

// New

var grps = [];
const CC = 'country_code', PHN = 'phone_number', SN = 'saved_name', PN = 'public_name', LBL = 'labels', ISC = 'saved_contacts',
	PPRTS = 'past_participants', RTJ = 'requested_to_join', LMT = 'last_msg_text', LMD = 'last_msg_date', LMS = 'last_msg_status', LMTY = 'last_msg_type', IBS = 'is_business', IBL = 'is_blocked';
const COLUMNS = [CC, PHN, SN, PN, IBS, IBL, LMT, LMD, LMS, LMTY, LBL, ISC, PPRTS, RTJ];

function loadwa() {
	try {
		loadwa0();
	} catch(e) {
		console.log("Exception while loading: ignore: " + e);
	}
}

function loadwa0() {
	if(Store === undefined || Store.Contact === undefined) {
		getStore();
	}
	var wadgcMain = document.getElementById('wadgc_main');
	if(wadgcMain) {
		wadgcMain.remove();
	} else {
		var data = loadHTML();
		var mainElement = document.getElementById('main');
		if(mainElement) {
			mainElement.innerHTML += data;
		} else {
			mainElement = getThatSideElement();
			mainElement.insertAdjacentHTML('beforeend', data);
		}
		initLoadWA();

	}
}

function askRating() {
	try {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
			  confirmButton: 'swal2-confirm btn btn-success swal2-styled order-2 btnsub',
			  cancelButton: 'swal2-cancel btn swal2-styled order-3 btnstatus',
			  denyButton: 'swal2-deny swal2-styled order-1 btnfree'
			}
		});
		swalWithBootstrapButtons.fire({
			title: 'Feature Requires Upgrading !',
			text: "If you have already paid, click 'Login' button below",
			showCloseButton: true,
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Buy License!',
			cancelButtonText: 'Alreay paid! Login',
			denyButtonText: 'Free Trial!'
		}).then((result) => {
			if (result.isConfirmed) {
				subscribeFun('pay');
			} else if (result.isDenied) {
				dwnbtnclick();
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				subscribeFun('login');
				synch();
				// location.reload();
			}
		})
	} catch(e) {}
}
function paneSideClick() {
	var wadgcMain = document.getElementById('wadgc_main');
	if(wadgcMain) {
		wadgcMain.remove();
	}
}

function initLoadWA() {
	var version = localStorage['wau_version'];
	var selectGroupIn = document.querySelector('#wadgc_group');
    if(selectGroupIn) {
        groupChoice = new Choices(selectGroupIn, {searchEnabled: false, itemSelectText: '', shouldSort: false,
		shouldSortItems: false, allowHTML: true}); 
    }
    var selectTypeIn = document.querySelector('#wadgc_type');
    if(selectTypeIn) {
        typeChoice = new Choices(selectTypeIn, {placeholder:true, itemSelectText: '', shouldSort: false,
		shouldSortItems: false, allowHTML: true, duplicateItemsAllowed: false, removeItemButton: true});
    }
	if(selectGroupIn.options && selectGroupIn.options.length > 0) {
		var val = selectGroupIn.options[0].value;
		loadMeta(val);
		colsLoad(val);
		wadgc_select();
		loadContacts();
	}
	if(version) {
		document.getElementById('app_version').innerHTML = version;
	}

	try {
		me = Store.User.getMeUser();
	} catch(e) {}

	document.getElementById('wadgc_group').addEventListener("change", changeEventForGroup);
	document.getElementById('download_btn').addEventListener('click', setwad);
	document.getElementById('pane-side').addEventListener('click', paneSideClick);
	document.getElementById('select_all').addEventListener('click', selectAll);
	document.getElementById('account_info').addEventListener('click', privateNotes);
	document.getElementById('support').addEventListener('click', privateNotes);
	document.getElementById('subscribe_now').addEventListener('click', subscribeFun1);
	document.getElementById('wadgc_type').addEventListener('change', wadgc_select);

	registerTabs();
	getMyInfo();

	var gutilsFirst = document.querySelector('#wadgc_gutils_first');
    if(gutilsFirst) {
        groupChoice = new Choices(gutilsFirst, {searchEnabled: false, itemSelectText: '', shouldSort: false,
		shouldSortItems: false, allowHTML: true}); 
    }
	var gutilsGname = document.querySelector('#wadgc_gutils_gname');
    if(gutilsGname) {
        gnameChoices = new Choices(gutilsGname, {placeholder:true, itemSelectText: '', shouldSort: false,
		shouldSortItems: false, allowHTML: true, duplicateItemsAllowed: false, removeItemButton: true});
    }
	var labelChoice = document.querySelector('#wadgc_gutils_lname');
    if(labelChoice) {
        labelChoices = new Choices(labelChoice, {placeholder:true, itemSelectText: '', shouldSort: false,
		shouldSortItems: false, allowHTML: true, duplicateItemsAllowed: false, removeItemButton: true});
    }
	if (gutilsFirst.options && gutilsFirst.options.length > 0) {
		var val = gutilsFirst.options[0].value;
		loadGUtilsMeta(val);
	}
	document.getElementById('wadgc_gutils_first').addEventListener("change", gutils_createGroup);
	document.getElementById('crgp_btn').addEventListener("click", createGroup);
}

var dwnsf_html = '<label class="arrowpopup"><input type="checkbox" id="dwnsf_input">Download all in single file<span class="tooltiptext" id="dwnsf_tooltip">More possibility for error as the size increases, hence prefer not to select this option.</span></label>';

function wadgc_select() {
	try {
		wadgc_select0();
	} catch(e) {
		//
	}
}

function registerTabs() {
	try {
		var elements = document.getElementsByName('tab');
		if (!elements || elements.length == 0)
			return;
		for (var i = 0; i < elements.length; i++)
			elements[i].addEventListener('click', tab_selection);
	} catch(e) {
		console.log('exception while registering tabs. ' + e);	
	}
}

function tab_selection(e) {
	if (!e || !e.srcElement || !e.srcElement.id)
		return;
	var id = e.srcElement.id;
	var tabs = document.getElementsByClassName('tabcontent');
	for (var i = 0; i < tabs.length; i++) {
		if(tabs[i] && tabs[i].id == id + '_text')
			tabs[i].style = 'display: block';
		else
			tabs[i].style = 'display: none';
	}
}

function wadgc_select0() {
	var first = document.getElementById("wadgc_group").value;
	var next = getSelectedChoices();

	document.getElementById('dwnsf_widget').innerHTML = '';
	document.getElementById('no_of_participants_ui').innerHTML = '';
	var groups = [];
	if(first == 'from_groups') {
		groups = getSelectedGroups(next);
		var length = getLengthFromGroups(groups);
		if(groups && groups.length > 1) {
			document.getElementById('dwnsf_widget').innerHTML = dwnsf_html;
		}
		document.getElementById('no_of_participants_ui').innerHTML = 'No. of groups: ' + groups.length + ', participants: ' + length;
	} else if(first == 'from_groups_labels') {
		if(next == 'all_labels') {
			// document.getElementById('dwnsf_widget').innerHTML = dwnsf_html;
		}
	}
}

function getLengthFromGroups(groups) {
	if(!groups || groups.length == 0)
		return 0;

	var length = 0;
	for(var i = 0; i < groups.length; i++) {
		var group = groups[i];
		if(group) {
			if(group.participants) {
				length += group.participants.length;
			}
		}
	}
	return length;
}

function getSelectedGroups(next) {
	var groupChoiceValue = document.getElementById('wadgc_group').value;
	if(!groupChoiceValue || groupChoiceValue.length == 0)
		return;
	if(!next || next.length == 0)
		return;
	var groups = [];
	if (groupChoiceValue == 'from_groups' || groupChoiceValue == 'from_broadcasts') {
		if(next[0] == 'all_groups' || next[0] == 'all_broad') {
			var temp = Store.GroupMetadata._models.filter(function(chat) {
				if(next[0] == 'all_broad') 
					return chat.__x_id.server == 'broadcast';
				return true;
			});
			if(temp && temp.length > 0) {
				groups = groups.concat(temp);
			}
		} else {
			for(var i = 0; i < next.length; i++) {
				var temp = Store.GroupMetadata._models.filter((chat) => chat.__x_id._serialized == next[i]);
				if(temp && temp.length > 0) {
					groups = groups.concat(temp[0]);
				}
			}
		}
	} else if (groupChoiceValue == 'from_labels' || groupChoiceValue == 'from_groups_labels') {
		if(next[0] == 'all_labels') {
			var models = Store.Label._models;
			models && models.forEach(function(model){
				if(model) {
					groups.push(model.__x_id);
				}
			});
		} else {
			for(var i = 0; i < next.length; i++) {
				if(next[i] && next[i].length > 0) {
					groups = groups.concat(next[i]);
				}
			}
		}
	} else if (groupChoiceValue == 'from_countries' || groupChoiceValue == 'from_contacts' || groupChoiceValue == 'from_chats') {
		for(var i = 0; i < next.length; i++) {
			if(next[i] && next[i].length > 0) {
				groups = groups.concat(next[i]);
			}
		}
	}

	return groups;
}

function getSelectedChoices() {
	var next = document.getElementById("wadgc_type").options;
	var values = [];
	if(next.length == 1) {
		return [next[0].value];
	}
	for(var i = 0; i < next.length; i++) {
		if(next[i].innerText == 'All groups') {
			return ['all_groups'];
		}
		values = values.concat(next[i].value);
	}
	return values;
}

function subscribeFun1() {
	subscribeFun('login');
}
function subscribeFun(login) {
	var c = new CustomEvent('wdpay', {
		detail : login
	});
	document.dispatchEvent(c);
}

function synch() {
	try {
		var c = new CustomEvent("synch", {
			//detail : details
		});
		document.dispatchEvent(c);
	} catch(e) {
		// ignore;
	}
}

function privateNotes() {
	var wadgcMain = document.getElementById('wadgc_main');
	if(wadgcMain) {
		wadgcMain.remove();
	}
}

function paypopup() {
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		  confirmButton: 'swal2-confirm btn btn-success swal2-styled order-2 btnsub',
		  cancelButton: 'swal2-cancel btn swal2-styled order-3 btnstatus',
		  denyButton: 'swal2-deny swal2-styled order-1 btnfree'
		}
	});
	swalWithBootstrapButtons.fire({
		title: 'Feature Requires Upgrading !',
		text: "If you have already paid, click 'Already Paid! Login' button below",
		showCloseButton: true,
		showDenyButton: true,
		showCancelButton: true,
		confirmButtonText: 'Buy License!',
		cancelButtonText: 'Alreay paid! Login',
		denyButtonText: 'Free Trial!'
	}).then((result) => {
		if (localStorage['wdpayChatFolders'] == "true") {
			dwnbtnclick();
			return;
		}
		if (result.isConfirmed) {
			subscribeFun('pay');
		} else if (result.isDenied) {
			dwnbtnclick();
		} else if (result.dismiss === Swal.DismissReason.cancel) {
			subscribeFun('login');
			synch();
			// location.reload();
		}
	})
}

function twoAlert() {
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		  confirmButton: 'btn btn-success',
		  cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	})
	  
	swalWithBootstrapButtons.fire({
		title: 'Feature Requires Upgrading !',
		text: "If you have already paid, click 'Check Subscription Status' below and Login",
		icon: 'warning',
		showCloseButton: true,
		showCancelButton: true,
		confirmButtonText: 'Subscribe Now!',
		cancelButtonText: 'Check Subscription Status ?',
		reverseButtons: true
	}).then((result) => {
		if (result.isConfirmed) {
		  subscribeFun('pay');
		} else if (result.dismiss === Swal.DismissReason.cancel) {
			subscribeFun('login');
			synch();
			location.reload();
		}
	})
}

function setwad() {
	if (localStorage['wdpayChatFolders'] != 'true') {
		synch();
	}
	if(localStorage['wdpayChatFolders'] == "true") {
		dwnbtnclick();
	} else {
		paypopup();
	}
}

function dwnbtnclick() {
	var groupChoiceValue = document.getElementById('wadgc_group').value;
	var next = getSelectedChoices();
	var typeChoiceValue = getSelectedGroups(next);
	
	var selectedClmns = [];
	for(var i = 0; i < COLUMNS.length; i++) {
		if(document.getElementById(COLUMNS[i]).checked)
			selectedClmns.push(COLUMNS[i]);
	}
	if(groupChoiceValue == 'from_groups')
		downloadFromGroup(typeChoiceValue, selectedClmns);
	else if(groupChoiceValue == 'from_broadcasts')
		downloadFromGroup(typeChoiceValue, selectedClmns);
	else if(groupChoiceValue == 'from_labels')
		downloadFromLabels(typeChoiceValue, selectedClmns);
	else if(groupChoiceValue == 'from_groups_labels')
		downloadGroupsFromLabels(typeChoiceValue, selectedClmns);
	else if(groupChoiceValue == 'from_countries')
		downloadFromCountries(typeChoiceValue, selectedClmns);
	else if(groupChoiceValue == 'from_contacts')
		downloadFromContacts(typeChoiceValue, selectedClmns);
	else if(groupChoiceValue == 'from_chats')
		downloadFromChats(typeChoiceValue, selectedClmns);
}

function downloadFromChats(dataValue) {
	var index, sheet_name = 'All_Chats';
	if(dataValue == 'with_unread_msgs') {
		index = Store.Chat.filter((chat) => chat.isUser && chat.__x_hasUnread);
		sheet_name += '_with_unread_msgs';
	} else if(dataValue == 'with_no_unread_msgs') {
		index = Store.Chat.filter((chat) => chat.isUser && !chat.__x_hasUnread);
		sheet_name += '_with_no_unread_msgs';
	} else {
		index = Store.Chat.filter((chat) => chat.isUser);
	}
	if(index && index.length > 0) {
		var listOfObjects = fromIndexChats(index);
		saveGroupOrBroadcast(sheet_name, listOfObjects);
	}
}

function isMyContact(obj) {
	return obj && obj.__x_name;
}

function downloadFromContacts(dataValue) {
	var index = [], sheet_name = 'All_Contacts';
	if(dataValue == 'with_unread_msgs') {
		var unread = Store.Chat.where({__x_hasUnread: !0,isUser: !0});
		unread.forEach((chat)=>{
			if (chat.__x_id)
            	index.push(contactsMap[chat.__x_id.user]);
        });
		sheet_name += '_with_unread_msgs';	
	} else if(dataValue == 'with_no_unread_msgs') {
		var read = Store.Chat.where({__x_hasUnread: false,isUser: !0});
		read.forEach((chat)=>{
			if (chat.__x_id)
            	index.push(contactsMap[chat.__x_id.user]);
        });
		sheet_name += '_with_no_unread_msgs';	
	} else {
		if (contactsMap)
			index = contactsMap.valueOf();
	}
	if(index && index.length > 0) {
		var listOfObjects = fromIndexChats(index);
		saveGroupOrBroadcast(sheet_name, listOfObjects);
	}
}

function downloadFromCountries(countyId) {
	if(!countyId || countyId == '')
		return;
	var countryName = 'country_', listOfObjects = [];
	countyId.forEach(function(cid) {
		var index = Store.Contact.filter((chat) => {
			if (isGroup(chat) || chat.__x_isEnterprise)
				return false;
			if (chat.__x_phoneNumber)
				return chat.__x_id.user.length < 15 && chat.__x_phoneNumber.user.startsWith(cid);
			return chat.__x_id.user.length < 15 && chat.__x_id.user.startsWith(cid);
		});

		if(index && index.length > 0) {
			listOfObjects = fromIndexChats(index);
			var countryName = cc[cid];
			if(!countryName)
				countryName = cid;
		}
		saveGroupOrBroadcast(countryName, listOfObjects);
	});
}

function removeDuplicateObjects(arr, property) {
	return [...new Map(arr.map(obj => [obj.property, obj])).values()];
}

function downloadFromLabels(lableId) {
	var lbls = [];
	if(lableId == 'all_labels') {
		var models = Store.Label._models;
		models && models.forEach(function(model){
			if(model) {
				lbls.push(model.__x_id);
			}
		});
	} else {
		lbls = lbls.concat(lableId);
		if (!lbls || lbls.length == 0)
			alert("No chats found with this label, " + lableId);
	}

	var listOfObjects = [];
	var singleFile = document.getElementById('dwnsf_input') ? document.getElementById('dwnsf_input').checked : false;
	lbls.forEach(function(id){
		try {
			var index = Store.Chat.filter((chat) => chat.labels && chat.labels.includes('' + id));
			if(index && index.length > 0) {
				var temp = fromIndexChats(index);
				var lbl = Store.Label.get(id), labelName;
				if(lbl)
					labelName = lbl.__x_name;
				if(singleFile) {
					listOfObjects = listOfObjects.concat(temp);
				} else {
					saveGroupOrBroadcast(labelName + '_Chats', temp);
				}
			}
		} catch(e) {
			console.log(e);
		}
	});
}

async function downloadGroupsFromLabels(lableId) {
	var lbls = [];
	if(lableId == 'all_labels') {
		var models = Store.Label._models;
		models && models.forEach(function(model){
			if(model) {
				lbls.push(model.__x_id);
			}
		});
	} else {
		lbls = lbls.concat(lableId);
		if (!lbls || lbls.length == 0)
			alert("No groups found with this label, " + lableId);
	}

	lbls.forEach(async function(id) {
		var index = Store.Chat.filter((chat) => chat.labels && chat.labels.includes('' + id) && chat.__x_isGroup);
		var listOfObjects = [], lableName;
		if(index && index.length > 0) {
			var keys = Object.keys(index);
			for (var i = 0; keys && i < keys.length; i++) {
				var key = keys[i];
				if(index[key]) {
					var temp = await getFromSingleGroup(index[key]);
					if(temp && temp.length > 1) {
						// lableName = temp[0];
						listOfObjects = listOfObjects.concat(temp[1]);
					}
				}
			};
		}
		if(!lableName) {
			var lbl = Store.Label.get(id);
			if(lbl)
				lableName = lbl.__x_name;
		}
		saveGroupOrBroadcast(lableName + '_Groups', listOfObjects);
	});
}

function getGroupsFromIndex(index) {
	var listOfGroups = [];
	Object.keys(index).forEach(function(key) {
		if(index[key] && index[key].isGroup)
			listOfGroups.push(index[key]);
	});
	return listOfGroups;
}

async function getFromGroup(groups) {
	var listOfObjects = [];
	var singleFile = document.getElementById('dwnsf_input') ? document.getElementById('dwnsf_input').checked : false;
	for(var i = 0; i < groups.length; i++) {
		var group = groups[i];
		try {
			var temp = await getFromSingleGroup(group);
			if(temp && temp.length > 1) {
				if(singleFile) {
					listOfObjects = listOfObjects.concat(temp[1]);
				} else {
					saveGroupOrBroadcast(temp[0], temp[1]);
				}
			}
		} catch(e) {
			console.log("Exception occured while extracting group info. " + e.message);
		}
	}
	if(listOfObjects.length > 1) {
		saveGroupOrBroadcast("All_Groups_" + Date.now(), listOfObjects);
	}
}

async function getFromSingleGroup(group) {
	var listOfObjects = [];
	var groupName;
	if(group && group.__x_groupMetadata) {
		groupName = group.__x_formattedTitle;
		group = group.__x_groupMetadata;
	}

	if (group) {
		if (group.participants) {
			groupName = groupName ? groupName : group.__x_subject;
			if(group.participants) {
				var index = group.participants._models;
				listOfObjects = fromIndexChatsUsingPast(index, false, 'Group', groupName);
			}
			var pprts_value = document.getElementById('past_participants').checked;
			if(pprts_value && group.pastParticipants) {
				var index = group.pastParticipants._models;
				var objs = fromIndexChatsUsingPast(index, true, 'Group', groupName);
				if(objs && objs.length != 0)
					listOfObjects = listOfObjects.concat(objs);
			}
		}
		var rtj_value = document.getElementById('requested_to_join').checked;
		if (rtj_value) {
			try {
				var values = await Store.Approvals.getMembershipApprovalRequests(group.__x_id);
				var chats = [];
				values && values.forEach(value => {
					var chat = Store.Chat.get(value.id._serialized);
					chats = chats.concat(chat);
				})
				var objs = fromIndexChatsUsingApprovals(chats, true, 'Group', groupName);
				if(objs && objs.length != 0)
					listOfObjects = listOfObjects.concat(objs);
			} catch(e) {
				console.log(e);
			}
		}
	}
	try {
		if((!listOfObjects || listOfObjects.length == 0) && group.msgs && group.msgs._models && group.msgs._models.length > 0) {
			var participants = group.msgs._models[0].__x_broadcastParticipants;
			var index = [];
			if(participants && participants.length > 0) {
				participants.forEach(element => {
					index.push(Store.Chat.get(element._serialized));
				});
				if(!groupName){
					groupName = group.__x_id.user;
				}
				listOfObjects = fromIndexChatsUsingPast(index, false, 'Broadcast', groupName);
			}
		}
	} catch(e1) {
		console.log("Exception occured while extracting broadcast info. " + e.message);
	}
	if(groupName && listOfObjects.length == 0)
		console.log("Either the group don't have any participants Or you are not part of the group");

	return [groupName, listOfObjects];
}

function downloadFromGroup(groupID) {
	try {
		getFromGroup(groupID);
	} catch(e) {
		console.log("Exception occured while extracting group info. " + e.message);
	}
}

function getlastmsg(contactObj, singleObj) {
	try {
		var chat = Store.Chat.get(contactObj.__x_id._serialized);
		if(chat && chat.msgs) {
			var msgs = chat.msgs;
			if(msgs && (models = msgs._models) && models.length > 0) {
				var msg = models[models.length - 1];
				try {
					singleObj.last_msg_text = msg.__x_text ? msg.__x_text : msg.__x_body;
					singleObj.last_msg_date = new Date(1e3 * msg.t).toString();
					singleObj.last_msg_type = msg.__x_isSentByMe ? 'Outgoing' : 'Incoming';
					singleObj.last_msg_status = chat.__x_hasUnread ? true : false;
				} catch(e) {}
			}
		}
	} catch(e) {}
	return '';
}

function fromIndexChatsUsingApprovals(index, isApprovalRequest, source, sourceName) {
	return fromIndexChats(index, false, isApprovalRequest, source, sourceName);
}

function fromIndexChatsUsingPast(index, is_past_participant, source, sourceName) {
	return fromIndexChats(index, is_past_participant, false, source, sourceName);
}

function fromIndexChats(index, is_past_participant, isApprovalRequest, source, sourceName) {
	var listOfObjects = [];
	if(!index || index.length == 0)
		return;

	index.forEach(function(key) {
		try {
			if (key) {
				var singleObj = {};
				var contactObj = key;
				if (key.__x_contact)
					contactObj = key.__x_contact;
				if (contactObj.__x_id && contactObj.__x_id.user.length < 18) {	
					if (contactObj.__x_phoneNumber) {
						singleObj.phone_number = "+" + contactObj.__x_phoneNumber.user;	
					} else {
						singleObj.phone_number = "+" + contactObj.__x_id.user;
					}
					singleObj.country_code = "+" + getCC(singleObj.phone_number);
					if (contactObj.__x_isMyContact)
						singleObj.is_my_contact = contactObj.__x_isMyContact;
					else if (contactObj.__x_name){
						singleObj.is_my_contact = true;
					}
					if(singleObj.is_my_contact)
						singleObj.saved_name = contactObj.__x_name;
					singleObj.public_name = contactObj.__x_pushname || contactObj.__x_name;					
					singleObj.is_business = contactObj.isBusiness;
					singleObj.is_blocked = contactObj.isContactBlocked;
					singleObj.labels = getLblName(contactObj.labels);
					if(source)
						singleObj.source = source;
					if(sourceName)
						singleObj.source_name = sourceName;	
					if(is_past_participant)
						singleObj.is_past_participant = 'TRUE';
					if (isApprovalRequest)
						singleObj.has_pending_request_to_join = 'TRUE';
					var msg = contactObj.msgs;
					if(msg) {
						try {
							singleObj.last_msg_text = msg.__x_text;
							singleObj.last_msg_date = new Date(msg.t).toString();
							singleObj.last_msg_type = msg.__x_isSentByMe ? 'Outgoing' : 'Incoming';
							singleObj.last_msg_status = msg.__x_hasUnread ? true : false;
						} catch(e) {}
					} else
						getlastmsg(contactObj, singleObj);
		
					if(!contactObj.isMe)
						listOfObjects.push(singleObj);
				}
			}
		} catch(e) {
			console.log(e);
		}
	});

	var uniqueArray = []
	try {
		uniqueArray = listOfObjects.filter((value, index) => {
			const _value = JSON.stringify(value);
			return index === listOfObjects.findIndex(obj => {
			  return JSON.stringify(obj) === _value;
			});
		});
	} catch(e) {
	}
	listOfObjects = null, index = null;
	return uniqueArray;
}

function isGroup(contactObj) {
	if (!contactObj || !contactObj.__x_id || !contactObj.__x_id.user)
		return false;
	return contactObj.__x_id.user.length >=18;
}

function getLblName(lbla) {
	if(!lbla)
		return '';
	var lbln = [];
	try {
		lbla.forEach(function(l){
			var lbl = Store.Label.get(l);
			lbl & lbln.push(lbl.name);
		});
		return lbln.toString();
	} catch(e) {
		console.log('WA: exception at getLblName for lbla = ' + lbla.toString() + ". " + e.message);
		return '';
	}
}

function saveGroupOrBroadcast(groupName, jsonData) {
	if(groupName === undefined) {
		groupName = "GroupName";
	}

	var tl = " \t\t\t\t\t";
	var data = [["Country Code", "Phone Number \t\t\t"]];
	var sn_value = document.getElementById('saved_name').checked;
	var pdn_value = document.getElementById('public_name').checked;
	var ibsns_value = document.getElementById('is_business').checked;
	var iblc_value = document.getElementById('is_blocked').checked;
	var lbl_value = document.getElementById('labels').checked;
	var isc_value = document.getElementById('saved_contacts').checked;
	var pprts_value = document.getElementById('past_participants').checked;
	var lmt_value = document.getElementById('last_msg_text').checked;
	var lmd_value = document.getElementById('last_msg_date').checked;
	var lms_value = document.getElementById('last_msg_status').checked;
	var lmty_value = document.getElementById('last_msg_type').checked;
	var rtj_value = document.getElementById('requested_to_join').checked;

	var wpxa = [{wpx:170}, {wpx:230}];
	if(sn_value) {
		wpxa.push({wpx:250});
		data[0].push('Saved Name' + tl);
	}
	if(pdn_value) {
		wpxa.push({wpx:300});
		data[0].push('Public Display Name' + tl);
	}
	if(ibsns_value) {
		wpxa.push({wpx:150});
		data[0].push('Is Business?');
	}
	if(iblc_value) {
		wpxa.push({wpx:150});
		data[0].push('Is Blocked?');
	}
	if(lbl_value) {
		wpxa.push({wpx:200});
		data[0].push('Labels' + tl);
	}
	if(isc_value) {
		wpxa.push({wpx:200});
		data[0].push('Is My Contact?');
	}
	if(pprts_value) {
		wpxa.push({wpx:250});
		data[0].push('Is Past Participant?');
	}
	if(rtj_value) {
		wpxa.push({wpx:350});
		data[0].push('Has Pending Request to Join?');
	}
	if(lms_value) {
		wpxa.push({wpx:250});
		data[0].push('Has unread chats?');
	}
	if(lmty_value) {
		wpxa.push({wpx:250});
		data[0].push('Last Message Type');
	}
	if(lmd_value) {
		wpxa.push({wpx:550});
		data[0].push('Last Message Date');
	}
	if(lmt_value) {
		wpxa.push({wpx:250});
		data[0].push('Last Message');
	}
	if(jsonData && jsonData.length > 1 && jsonData[0].source) {
		wpxa.push({wpx:350});
		data[0].push(jsonData[0].source + '_Name');
	}

	var l = jsonData ? jsonData.length : 0;
	var wau_fbp = localStorage['wdpayChatFolders'];
	if(wau_fbp != 'true' && l > 10) {
		l = 10;
	}
	for (var i = 0; i < l; i++){
		try {
			var obj = jsonData[i], entry = [];
			entry.push(obj['country_code']);
			entry.push(obj['phone_number']);
			if(sn_value)
				entry.push(obj['saved_name']);
			if(pdn_value)
				entry.push(obj['public_name']);
			if(ibsns_value)
				entry.push(obj['is_business']);
			if(iblc_value)
				entry.push(obj['is_blocked']);
			if(lbl_value)
				entry.push(obj['labels']);
			if(isc_value)
				entry.push(obj['is_my_contact']);
			if(pprts_value)
				entry.push(obj['is_past_participant']);
			if(rtj_value)
				entry.push(obj['has_pending_request_to_join']);
			if(lms_value)
				entry.push(obj['last_msg_status']);
			if(lmty_value)
				entry.push(obj['last_msg_type']);
			if(lmd_value)
				entry.push(obj['last_msg_date']);
			if(lmt_value)
				entry.push(obj['last_msg_text']);
			if(obj.source)
				entry.push(obj['source_name']);

			data.push(entry);
		} catch(e) {
			console.log(e);
		}
	}
	if(wau_fbp != 'true' && data.length >= 11) {
		data = data.slice(0, 11);
		data.push([atob('T25seSBsaW1pdGVkIHJvd3MgYXJlIGF2YWlsYWJsZSBhcyB5b3UgYXJlIHVzaW5nIEZyZWUgVmVyc2lvbi4gU3Vic2NyaWJlIG5vdyB0byBnZXQgZnVsbCBsaXN0')]);
	}

	var ws_name = "WA-Download Group Phone Numbers";
	var wb = new Workbook(), ws = sheet_from_array_of_arrays(data, undefined, wpxa, wau_fbp);

	/* add worksheet to workbook */
	wb.SheetNames.push(ws_name);
	wb.Sheets[ws_name] = ws;
	var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:false, type: 'binary'});

	try {
		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), groupName + ".xlsx");
	} catch(e) {
		groupName = replaceSpecial(groupName);
		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), groupName + ".xlsx");
		console.log('exception while saving the data, trying again');
	}
}

function replaceSpecial(str) {
	try {
		return str.replace(/[^\x00-\xFF]/g, "");
	} catch(e) {
		console.log('exception with name replace, trying again');
	}
};

function loadMeta(groupChoice) {
	if(!Store || !Store.Chat) {
		getStore();
	}
	var gmodels = [], ops = [], allOp = {};
	if(groupChoice == 'from_groups') {
		gmodels = Store.GroupMetadata._models;
		allOp = {'label': 'All groups', 'value': 'all_groups', 'special': true};
	} else if(groupChoice == 'from_broadcasts') {
		gmodels = Store.GroupMetadata._models.filter(function(g) {
			return g.__x_id.server == 'broadcast';
		});
		allOp = {'label': 'All broadcasts', 'value': 'all_broad', 'special': true};
	} else if(groupChoice == 'from_labels' || groupChoice == 'from_groups_labels') {
		gmodels = Store.Label._models;
		allOp = {'label': 'All labels', 'value': 'all_labels', 'special': true};
	} else if(groupChoice == 'from_countries') {
		// allOp = {'label': 'All countries', 'value': 'all_cc'};
	} else if(groupChoice == 'from_contacts' || groupChoice == 'from_chats') {
		gmodels = [{'label': 'Having un-read message(s)', 'value': 'with_unread_msgs'},
					{'label': 'Having NO un-read messages', 'value': 'with_no_unread_msgs'},
					{'label': 'All chats', 'value': 'all_chats', 'special': true}];
	}

	if(gmodels && (groupChoice == 'from_groups' || groupChoice == 'from_broadcasts')) {
		for(var i = 0; i < gmodels.length; i++) {
			try {
				if(gmodels[i].__x_isParentGroup)
					continue;
				var gobj = {};
				gobj['label'] = gmodels[i].__x_subject;
				gobj['value'] = gmodels[i].__x_id._serialized;
				if(i == 0) {
					gobj['selected'] = true;
				}
				ops.push(gobj);
			} catch(e) {}
		}
	} else if(gmodels && (groupChoice == 'from_labels' || groupChoice == 'from_groups_labels')) {
		for(var i = 0; i < gmodels.length; i++) {
			var gobj = {};
			gobj['label'] = gmodels[i].__x_name;
			gobj['value'] = gmodels[i].__x_id;
			if(i == 0)
				gobj['selected'] = true;
			ops.push(gobj);
		}
	} else if(groupChoice == 'from_countries') {
		var i = 0;
		for (let x in cc) {
			var gobj = {};
			gobj['label'] = cc[x];
			gobj['value'] = x;
			if(i++ == 0)
				gobj['selected'] = true;
			ops.push(gobj);
		}
	} else if(groupChoice == 'from_contacts' || groupChoice == 'from_chats') {
		for(var i = 0; i < gmodels.length; i++) {
			if(i == 0)
				gmodels[i].selected = true;
			ops.push(gmodels[i]);
		}
	}

	ops.push(allOp);
	typeChoice.enable();
	typeChoice.removeActiveItems();
	typeChoice.setChoices(ops, 'value', 'label', true);
}

function loadGUtilsMeta(gutilsFirstChoice) {
	if (!Store || !Store.Chat) {
		getStore();
	}
	var gmodels = [],lmodels = [], ops = [], labels = [];
	if (gutilsFirstChoice == 'gutils_gwc') {
		gmodels = Store.GroupMetadata._models;
		lmodels = Store.Label._models;
		// ops.push({'label': 'Add to All groups', 'value': 'all_groups', 'special': true});
	}
	if (gutilsFirstChoice == 'gutils_gwc') {
		if (gmodels) {
			for(var i = 0; i < gmodels.length; i++) {
				try {
					if(gmodels[i].__x_isParentGroup || gmodels[i].__x_owner != me)
						continue;
					var gobj = {};
					gobj['label'] = gmodels[i].__x_subject;
					gobj['value'] = gmodels[i].__x_id._serialized;
					if(i == 0) {
						// gobj['selected'] = true;
					}
					ops.push(gobj);
				} catch(e) {}
			}
		}
		if (lmodels) {
			for(var i = 0; i < lmodels.length; i++) {
				var label = {};
				label['label'] = lmodels[i].__x_name;
				label['value'] = lmodels[i].__x_id;
				if(i == 0)
					label['selected'] = true;
				labels.push(label);
			}
		}
	}
	gnameChoices.setChoices(ops, 'value', 'label', true);
	labelChoices.setChoices(labels, 'value', 'label', true);
}

function changeEventForGroup() {
	var val = this.value;
	colsLoad(val);
	loadMeta(val);
	document.getElementById('select_all').checked = false;
	document.getElementById('dwnsf_widget').innerHTML = '';
	wadgc_select();
}

function gutils_createGroup() {
	var gutilsFirst = document.querySelector('#wadgc_gutils_first');
	var selectValue = gutilsFirst && gutilsFirst.options && gutilsFirst.options[0].value;

	var displayOps = [];
	var allOptionalOps = ['wadgc_gutils_gname_container', 'wadgc_gutils_label_container', 'gutils_give_numbers']; 
	if (selectValue == 'gutils_gwc') {
		displayOps.push('wadgc_gutils_gname_container', 'wadgc_gutils_label_container');
	} else if (selectValue == 'gutils_gwnf') {
		displayOps.push('wadgc_gutils_gname_container', 'gutils_give_numbers');
	}
	allOptionalOps.filter(function(e) {
		if (displayOps.indexOf(e) > -1) {
			document.getElementById(e).style.display = 'table';
		} else {
			document.getElementById(e).style.display = 'none';
		}
	});
	
}

function getElementValueById(id) {
	var element = document.getElementById(id);
	if (element && element.value) {
		return element.value;
	}
	return undefined;
}


function createGroupFromLabels(existingGnames, gname, selectedLabels) {
	if (!existingGnames && !gname) {
		alert('Please choose an existing group OR Enter new group name');
		return;
	}

	try {
		var listOfObjects = [];
		var values = [];
		for(var i = 0; i < selectedLabels.length; i++) {
			var id = selectedLabels[i].value;
			var index = Store.Chat.filter((chat) => chat.labels && chat.labels.includes('' + id));
			if (index && index.length != 0) {
				index.forEach(element => {
					if (element.__x_isUser)
						listOfObjects = listOfObjects.concat(element.__x_id._serialized);
				});
			}
		}
		if (existingGnames && existingGnames.length != 0)
			addParticipants(existingGnames, listOfObjects);
		if (gname)
			Store.GroupUtils.createGroup(gname, listOfObjects.map(t=>Store.WidFactory.createWid(t)));
	} catch (e) {
		console.log(e);
	}
}

function getValuesFromSelectElement(next) {
	if (!next || !next.options)
		return;
	var valueList = [];
	var n = next.options;
	for (var i = 0; i < n.length; i++) {
		valueList.push(n[i].value);
	}
	return valueList;
}
function createGroup() {
	try {
		var gname = getElementValueById('gutils_nw_group');
		var glabels = getElementValueById('gutils_nw_group_label');
		var file = getElementValueById('phnotempfile_base64');
		var pnos = getElementValueById('gutils_phnos');
		var existinGName = document.getElementById('wadgc_gutils_gname');
		var selectedGroups = getValuesFromSelectElement(existinGName);

		var chooseFirst = getElementValueById('wadgc_gutils_first');
		if (chooseFirst && chooseFirst == 'gutils_gwc') {
			var selectE = document.getElementById('wadgc_gutils_lname');
			var selectedLabels;
			if (selectE)
				selectedLabels = selectE.options;
			if (selectedGroups.length == 0 && !gname) {
				alert('Please choose an existing group OR Enter new group name');
				return;
			}
			if (selectedGroups.length != 0 && gname) {
				alert('Please choose either existing group OR New group name');
				return;
			}
			if (!selectedLabels) {
				alert('You should choose an existing LABEL name');
				return;
			}
			createGroupFromLabels(selectedGroups, gname, selectedLabels);
			return;
		}
		if (!gname) {
			alert('Please enter group name');
			return;
		}
		if(!file && !pnos) {
			alert('Please upload a file Or enter phone numbers');
			return;
		}
		var cnrmtext = "Please confirm the entered data ... <br/> Group name=" + gname;
		if(glabels) {
			cnrmtext += ', group labels=' + glabels;
		}
		Swal.fire({
			title: 'Create Group',
			html: cnrmtext,
			showCloseButton: true,
			showDenyButton: true,
			confirmButtonText: 'Proceed',
			denyButtonText: 'Cancel',
			customClass: {
				actions: 'my-actions',
				confirmButton: 'sbtn btn-success order-3',
				denyButton: 'swal2-deny order-1 swal2-styled',
			},
			heightAuto: false
		}).then((result) => {
			if (result.isConfirmed) {
				gdesc = 'This group is created using WA-Download Group Phone Numbers';
				phnos = ['919100916479'];
				createGroup0(gname, gdesc, glabels, phnos);
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				
			} else if (result.isDenied) {
				
			}
		});
	} catch(e) {}
}

function createGroup0(name, desc, glbls, phnos) {
	var lables = [];
	if (glbls) {
		try {
			labels.push(glbls.split(','));
		} catch(e) {}
	}
	var numbers = [];
	if (phnos) {
		try {
			numbers = phnos.split(',').forEach(n => n + '@c.us');
		} catch(e){}
	}
	if (Store && Store.Wap && Store.Wap.createGroup && Store.WidFactory) {
		try {
			Store.Wap.createGroup(name, numbers.map(t=>Store.WidFactory.createWid(t)));
		} catch(e) {
			alert(e);
		}
	}
}

var addParticipant = async function (idGroup, idParticipant) {
	try {
		const chat = Store.Chat.get(idGroup);
		const add = Store.Contact.get(idParticipant);
		await Store.GroupParticipants.addParticipants(chat, [add]);
		return true;
	} catch(e) {
		return false;
	}
}

var addParticipants = async function (idNames, idArray) {
	try {
		var groupList = [];
		idNames.forEach(async g => {
			var chat = Store.Chat.get(g);
			var data2 = Store.GroupParticipants.addParticipants(chat, idArray);
			var data = await addParticipantsCore(chat, idArray);
			console.log(data);
		});
		groupList.forEach(chat => {
			idArray.forEach(id => {
				try {
					Store.GroupParticipants.addParticipants(chat, id);
				} catch(e) {
					console.log('Problem occuerred while adding Participant: ' + id + ', to group: ' + idGroup);
				}
			});
		});
		return true;
	} catch(e) {
		return false;
	}
}

var addParticipantsCore = async function(chat, participantIds, options = {}) {
		var groupId = chat.__x_id;
	
		const { sleep = [250, 500], autoSendInviteV4 = true, comment = '' } = options;
		const groupWid = window.Store.WidFactory.createWid(groupId);
		const group = await window.Store.Chat.find(groupWid);
		!Array.isArray(participantIds) && (participantIds = [participantIds]);

		let participantsToAdd = await Promise.all(participantIds.map(async p => {
			const wid = window.Store.WidFactory.createWid(p);
			return await window.Store.Contact.find(wid);
		}));

		const participantData = {};

		const addParticipantResultCodes = {
			default: 'An unknown error occupied while adding a participant',
			isGroupEmpty: 'AddParticipantsError: You can\'t add a participant to an empty group',
			iAmNotAdmin: 'AddParticipantsError: You have no admin rights to add a participant to a group',
			200: 'The participant was added successfully',
			403: 'The participant can be added by sending private invitation only',
			408: 'You cannot add this participant because they recently left the group',
			409: 'The participant is already a group member',
			417: 'The participant can\'t be added to the community. You can invite them privately to join this group through its invite link',
			419: 'The participant can\'t be added because the group is full'
		};

		const groupMetadata = group.groupMetadata;
		const groupParticipants = groupMetadata?.participants;

		if (!groupParticipants) {
			return addParticipantResultCodes.isGroupEmpty;
		}

		if (!groupParticipants.canAdd()) {
			return addParticipantResultCodes.iAmNotAdmin;
		}

		const _getSleepTime = (sleep) => {
			if (!Array.isArray(sleep) || sleep.length === 2 && sleep[0] === sleep[1]) {
				return sleep;
			}
			if (sleep.length === 1) {
				return sleep[0];
			}
			(sleep[1] - sleep[0]) < 100 && (sleep[0] = sleep[1]) && (sleep[1] += 100);
			return Math.floor(Math.random() * (sleep[1] - sleep[0] + 1)) + sleep[0];
		};

		for (const participant of participantsToAdd) {
			const participantId = participant.id._serialized;

			participantData[participantId] = {
				code: undefined,
				message: undefined,
				isInviteV4Sent: false
			};

			if (groupParticipants.some(p => p.id._serialized === participantId)) {
				participantData[participantId].code = 409;
				participantData[participantId].message = addParticipantResultCodes[409];
				continue;
			}

			const rpcResult =
				await getAddParticipantsRpcResult(groupMetadata, groupWid, participant.id);
			const rpcResultCode = rpcResult.code;

			if (rpcResultCode === 403) {
				window.Store.ContactCollection.gadd(participant.id, { silent: true });
			}

			participantData[participantId].code = rpcResultCode;
			participantData[participantId].message = rpcResultCode === -1
				? rpcResult.message
				: addParticipantResultCodes[rpcResultCode] || addParticipantResultCodes.default;

			if (autoSendInviteV4 && rpcResultCode === 403) {
				let userChat, isInviteV4Sent = false;

				if (rpcResult.name === 'ParticipantRequestCodeCanBeSent' &&
					(userChat = await window.Store.Chat.find(participant.id))) {
					const groupName = group.formattedTitle || group.name;
					const res = await window.Store.GroupInviteV4.sendGroupInviteMessage(
						userChat,
						group.id._serialized,
						groupName,
						rpcResult.inviteV4Code,
						rpcResult.inviteV4CodeExp,
						comment
						// await window.WWebJS.getProfilePicThumbToBase64(groupWid)
					);
					isInviteV4Sent = res === 'OK';
				}

				participantData[participantId].isInviteV4Sent = isInviteV4Sent;
			}

			sleep && participantsToAdd.length > 1 &&
				await new Promise(resolve => setTimeout(resolve, _getSleepTime(sleep)));
		}

		return participantData;
}

var getAddParticipantsRpcResult = async (chatMetadata, chatWid, participantWid) => {
	const participantLidArgs = chatMetadata?.isLidAddressingMode ?
		{
			phoneNumber: participantWid,
			lid: window.Store.LidManipulations.getCurrentLid(participantWid)
		} :
		{
			phoneNumber: participantWid
		};

	const iqTo = window.Store.WidToJid.widToGroupJid(chatWid);

	const participantArgs =
		participantLidArgs.lid ?
		[{
			participantJid: window.Store.WidToJid.widToUserJid(participantLidArgs.lid),
			phoneNumberMixinArgs: {
				anyPhoneNumber: window.Store.WidToJid.widToUserJid(participantLidArgs.phoneNumber)
			}
		}] :
		[{
			participantJid: window.Store.WidToJid.widToUserJid(participantLidArgs.phoneNumber)
		}];

	let result, participant;
	const data = {
		name: undefined,
		code: undefined,
		message: undefined,
		inviteV4Code: undefined,
		inviteV4CodeExp: undefined
	};

	try {
		result = await window.Store.GroupUtils.sendAddParticipantsRPC({
			participantArgs,
			iqTo
		});
		[participant] = result.value.addParticipant;
	} catch (err) {
		data.code = -1;
		data.message = 'SmaxParsingFailure: failed to parse the response of <AddParticipants>';
		return data;
	}

	if (result.name === 'AddParticipantsResponseSuccess') {
		const participantMixins = participant.addParticipantsParticipantMixins;
		const code = participantMixins?.value.error ?? '200';
		data.name = participantMixins?.name;
		data.code = +code;
		data.inviteV4Code = participantMixins?.value.addRequestCode;
		data.inviteV4CodeExp = participantMixins?.value.addRequestExpiration?.toString();
	} else if (result.name === 'AddParticipantsResponseClientError') {
		const {
			code: code,
			text: message
		} = result.value.errorAddParticipantsClientErrors.value;
		data.code = +code;
		data.message = message;
	} else if (result.name === 'AddParticipantsResponseServerError') {
		const {
			code: code,
			text: message
		} = result.value.errorServerErrors.value;
		data.code = +code;
		data.message = message;
	}

	return data;
};

function colsLoad(val) {
	var dos = document.evaluate("//div[@id='option_main']//input", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	var dos, cos = [], eos = [];
	if(val == 'from_contacts') {
		cos.push(CC, PHN, SN, PN);
		eos.push(LMT, LMD, LMS, LMTY, IBS, IBL, LBL);
	} else if (val == 'from_chats') {
		cos.push(CC, PHN, SN, PN);
		eos.push(LMT, LMD, LMS, LMTY, IBS, IBL, LBL, ISC);
	} else if (val == 'from_groups') {
		cos.push(CC, PHN, SN, PN);
		eos.push(IBS, IBL, LBL, ISC, PPRTS, RTJ);
	} else if (val == 'from_broadcasts') {
		cos.push(CC, PHN, SN, PN);
		eos.push(IBS, IBL, LBL);
	} else if (val == 'from_labels') {
		cos.push(CC, PHN, SN, PN);
		eos.push(LMT, LMD, LMS, LMTY, IBS, IBL, LBL, ISC);
	} else if (val == 'from_groups_labels') {
		cos.push(CC, PHN, SN, PN);
		eos.push(LMT, LMD, LMS, LMTY, IBS, IBL, LBL, ISC, RTJ);
	} else if (val == 'from_countries') {
		cos.push(CC, PHN, SN, PN);
		eos.push(LMT, LMD, LMS, LMTY, IBS, IBL, LBL, ISC);
	}
	despecific(dos, cos, eos);
}

function getMyInfo() {
	try {
		if(Store && Store.Contact && Store.User) {
			var contact = Store.Contact._models;
			var me = Store.User.getMeUser();
			var youAre = contact.filter((chat) => chat.__x_id.user == me.user);
			var you, contact = null, me = null;
			if(youAre && youAre.length == 1)
				you = youAre[0];
			if (you) {	
				var a = document.createElement('a');
				var name = you.__x_pushname;
				if(name && name.length > 20) {
					name = name.substring(0, 20);
				}
				a.innerHTML = name + ' : ' + you.__x_id.user;
				var ph = you.__x_id.user ? you.__x_id.user : '';
				a.href = "whatsapp://send?phone=" + ph;
				a.className = 'private_notes';
				document.getElementById('account_info').appendChild(a);
			}
		}	
	} catch(e) {
		//
	}
}

function despecific(dos, cos, eos) {
	if(dos) {
		for(var i = 0; i < dos.snapshotLength; i++) {
			dos.snapshotItem(i).checked = false;
			dos.snapshotItem(i).disabled = true;
			dos.snapshotItem(i).color = 'grey';
		}
	}
	if(cos) {
		for(var i = 0; i < cos.length; i++) {
			document.getElementById(cos[i]).checked = true;
			document.getElementById(cos[i]).disabled = false;
		}
	}
	if(eos) {
		for(var i = 0; i < eos.length; i++) {
			document.getElementById(eos[i]).disabled = false;
		}
	}
}

function selectAll() {
	var sa = document.getElementById('select_all');
	for(var i = 0; i < COLUMNS.length; i++) {
		var el = document.getElementById(COLUMNS[i]);
		if(sa.checked) {
			if(el.disabled == false)
				el.checked = true;
		} else {
			if(el.disabled == false)
				el.checked = false;
		}
	}
}

promisesgetter = function() {
	var a = document.querySelectorAll("script");
	for (i = 0; i < a.length; i++) a[i].src.indexOf("/app") > 0
};
promisesgetter(), window.setTimeout(promisesgetter, 1e4);

function loadHTML() {
	return '<div id="wadgc_main" style="overflow-y: scroll; overflow-x: scroll; width:100%;height:100%;z-index:99999999;position:absolute;background:#fff;display:block;left:0;direction:ltr"> <header id="wa_send_bulk_messages_header" class="_3fs0K tab" style="margin-top:0"> <div class="_3V5x5"> <button class="tablinks" id="tab1" name="tab" onclick="tab_selection">Download Numbers</button> </div><div class="_3V5x5" style="display: none;"> <button class="tablinks" id="tab2" name="tab" onclick="tab_selection">Group Utils</button> </div></header> <div id="tab1_text" tab="Group Utils" class="tabcontent" style="display:block; border: none"> <span style="position:absolute;top: 10%;right: 2%;text-align:right;"> <a href="https://bit.ly/whatsapp_marketing_tool" target="_blank"> <image id="image0" width="25%" height="25%" x="0" y="0" href="" class="image0"></image> <b id="app_version" style="font-size: 13px;display:block;margin-top:5px"></b></a><br></span> <div class="container" style="padding-left:0!important"> <div class="grid-container"> <div class="grid-child" style="padding-right:10px"> <label class="my-1 mr-2" for="wadgc_group">Choose this first:</label> <select id="wadgc_group" class="w-100" name="wadgc_group"> <option value="from_groups">From groups</option> <option value="from_broadcasts">From specific broadcasts</option> <option value="from_labels">From chats using labels</option> <option value="from_groups_labels">From groups using labels</option> <option value="from_countries">From specific countries</option> <option value="from_contacts">From all contacts</option> <option value="from_chats">From all open chats</option> </select> </div><div class="grid-child"> <label class="my-1 mr-2" for="wadgc_type">Choose this next:</label> <select id="wadgc_type" class="w-100" name="wadgc_type" multiple="true" aria-expanded="false" aria-multiselectable="true" aria-multiline="false"></select> </div></div><div style="margin-top:3%;text-align:left" id="top_select_panel"> <ul style="float:right"> <li> <label> <p id="no_of_participants_ui">No. of participants: </p></label> </li></ul> <ul> <li> <label> <input type="checkbox" id="select_all">Select all options below </input> </label> </li></ul> <ui id="dwnsf_widget"> </ui> </div><div class="grid-container" id="option_main" style="margin-top:2%;grid-template-columns:33% 33% 33%"> <ul> <li> <label> <input type="checkbox" id="country_code" checked="" disabled="disabled"> Country code </label> </li><li> <label> <input type="checkbox" id="phone_number" checked="" disabled="disabled"> Phone number </label> </li><li> <label> <input type="checkbox" id="saved_name" checked="checked"> Saved name in phone </label> </li><li> <label> <input type="checkbox" id="public_name" checked="checked"> Public display name </label> </li><li> <label> <input type="checkbox" id="is_business"> Is business account? </label> </li><li> <label> <input type="checkbox" id="is_blocked"> Is blocked contact? </label> </li></ul> <ul> <li> <label> <input type="checkbox" id="labels"> Include labels </label> </li><li> <label> <input type="checkbox" id="source"> source (group / contact) </label> </li><li> <label> <input type="checkbox" id="source_name"> Include source name </label> </li><li> <label> <input type="checkbox" id="saved_contacts"> Include saved contacts </label> </li><li> <label> <input type="checkbox" id="past_participants"> Include Past Participants </label> </li><li> <label> <input type="checkbox" id="requested_to_join"> Include Pending Requests <span style="color:red">(New)</span> </label> </li></ul> <ul> <li> <label> <input type="checkbox" id="last_msg_status"> Have unread messages ? </label> </li><li> <label> <input type="checkbox" id="last_msg_type"> Last message type </label> </li><li> <label> <input type="checkbox" id="last_msg_date"> Last message date </label> </li><li> <label> <input type="checkbox" id="last_msg_text"> Last message text </label> </li></ul> <div></div><div></div><span id="download_btn" class="download_btn">Download <span class="" style="float:right"> <svg viewBox="0 0 19 20" width="19" height="20" class=""> <path fill="currentColor" d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path> </svg> </span> </span> </div></div></div><div id="tab2_text" tab="Group Utils" class="tabcontent"> <span style="position:absolute;top: 10%;right: 2%;text-align:right;"> <a href="https://bit.ly/whatsapp_marketing_tool" target="_blank"> <image id="image0" width="25%" height="25%" x="0" y="0" href="" class="image0"></image> <b id="app_version" style="font-size: 13px;display:block;margin-top:5px"></b></a><br></span> <div class="container" style="padding-left:0!important"> <div class="grid-container-full"> <div class="grid-child" style="padding-right:10px"> <label class="my-1 mr-2" for="wadgc_gutils_first">Choose this first:</label> <select id="wadgc_gutils_first" class="w-100" name="wadgc_gutils_first"> <option value="gutils_gwc">Using Label</option> <option value="gutils_gwnf">Using New Numbers</option> </select> </div><div class="grid-child" id="wadgc_gutils_gname_container" style="display: table;"> <label class="my-1 mr-2" for="wadgc_gutils_gname">Add To Existing Group(s) - (You should be one of the admin):</label> <select id="wadgc_gutils_gname" class="w-100" style="margin-bottom:11px !important" name="wadgc_gutils_gname" aria-expanded="false" aria-multiselectable="true" aria-multiline="false"></select> <label class="my-1 mr-2" for="wadgc_gutils_gname">(OR)</label> <label class="my-1 mr-2" for="wadgc_gutils_gname">*Create New Group(s):</label> <input id="gutils_nw_group" style="width:100%; height:26%;" class="w-100" name="gutils_nw_group" aria-expanded="false" placeholder="Enter the new group name"><br><br><!-- <label class="my-1 mr-2" for="wadgc_gutils_desc">Group description:</label> <input id="gutils_nw_group_desc" style="width:100%; height:26%;" class="w-100" name="gutils_nw_group_desc" aria-expanded="false" placeholder="Enter description for new group"><br><br>--> </div><div class="grid-child" id="wadgc_gutils_label_container" style="display: table;"> <label class="my-1 mr-2" for="wadgc_gutils_lname">Choose the label(s):</label> <select id="wadgc_gutils_lname" class="w-100" name="wadgc_gutils_lname" multiple="true" aria-expanded="false" aria-multiselectable="true" aria-multiline="false"></select> </div><div class="grid-child" id="gutils_give_numbers" style="display:none; padding-top: 1.2%; width:100%"> <label class="my-1 mr-2" for="gutils_give_numbers">Upload using file:</label> <p id="phno_temp_file_p" style="position: relative;"> <input type="file" class="phnotempfile" id="phnotempfile" autocomplete="off"> <br><span style="color:red;display: none;" id="phnotempfile_error">File size must be less than 10 MB.</span> <input type="hidden" id="phnotempfile_base64" value=""><input type="hidden" id="phnotempfile_name" value=""> </p><label class="my-1 mr-2" for="gutils_give_numbers">(OR) Paste Numbers:</label> <textarea id="gutils_phnos" class="w-100" style="width: 100%; height: 60%" name="gutils_phnos" aria-expanded="true" placeholder="Paste comma separated phone numbers with country code. eg: 919100916479,918341441706"></textarea> </div></div><div class="grid-container" id="option_main" style="margin-top:7%;grid-template-columns:33% 33% 33%"> <div></div><div><span id="crgp_btn" class="download_btn" style="float:left !important; width:60%;font-size:25px">Create Group<span class="" style="float:center"></span></div></span> <div></div></div></div></div><div id="wap_footer" style="width:100%;z-index:99999999;position:absolute;background:#fff;overflow:hidden auto;left:0;direction:ltr"> <div class="footer-nav"> <ul style="float:left"> <li> <span id="account_info" class="tip" data-text="Click to send private notes"></span> </li></ul> <ul style="padding:0 3px"> <li> <a href="https://forms.gle/BufMftUg7JwBaiDPA" target="_blank" class="loadlink">Affiliate Programme</a> </li><li class=""> <a href="#" class="loadlink" id="subscribe_now">Cancel Subscription</a> </li><li class="language dropdown" style="display:none"> <a class="lang_sel loadlink" style="position:relative" href="javascript:;"> <span>English</span> <ul> <li> <span data-lang="en">English</span> </li><li> <span data-lang="tr">Türkçe</span> </li><li> <span data-lang="pt-BR">Português</span> </li><li> <span data-lang="fr">Français</span> </li><li> <span data-lang="es">Español</span> </li><li> <span data-lang="ru">Русский</span> </li><li> <span data-lang="ar">العربية</span> </li></ul> </a> </li><li> <a href="whatsapp://send?phone=919100916479" id="support" class="close-frame loadlink">Help &amp; Support</a> </li><li> <a href="https://chrome.google.com/webstore/detail/wa-download-group-phone-n/henhldbgljkagjabmpjnlphncpnfggcd/" class="loadlink" target="_blank">Extension Link</a> </li></ul> </div></div></div>';
}