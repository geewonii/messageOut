/**
 * selfTable 0.0.1
 */
;(function (window, document) {
  function SelfTable(selector,options) {
    if (!(this instanceof SelfTable)) return new SelfTable(selector,options);
    this.options = this.extend({
      theme: '#f60'
    }, options);
    if ((typeof selector) === "string") {
      this.selector = document.querySelector(selector);
    } else {
      this.selector = selector;
    }
    this.init();
};
SelfTable.prototype = {
    init() {
      this.dataHandle();
    },
    extend(obj,obj2) {
      for(let k in obj2){
        obj[k] = obj2[k];
      }
      return obj;
    },
    dataHandle() {
      const data = this.options.data || {}
      const domArr = Object.keys(data).map(keys => keys)
      const elementStrArr = domArr.map(todo => {
        if (todo === 'headerTitle') {
          return `<div class="self-table-header">${data[todo]}</div>`;
        } else if (todo === 'footerInfo') {
          return `<div class="self-table-footer">${data[todo]}</div>`;
        } else {
          let childrenStr = '';
          if (Array.isArray(data[todo])) {
            data[todo].forEach(item => {
              const str = `
                <div class="self-table-item">
                  <div class="self-table-left">${item.title}</div>
                  <div class="self-table-right">${item.content}</div>
                </div>
              `;
              childrenStr += str;
            });
          }
          return `<div class="self-table-content">${childrenStr}</div>`;
        }
      });
      const warpDom = document.createElement('div');
      warpDom.className = 'self-table-wrap';
      elementStrArr.forEach(dom => {
        warpDom.innerHTML += dom;
      });
      this.selector.appendChild(warpDom);
    }
};
window.SelfTable = SelfTable;
})(window, document);
