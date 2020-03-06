import EventBus from '../../eventBus';
export default {
  bind: function(el, binding, vnode) {
    let s = JSON.stringify;
    el.innerHTML = 'tar-entry:    ' + s(binding.value) + '<br>';

    let draggableAttr = document.createAttribute('draggable');
    draggableAttr.value = true;
    el.setAttributeNode(draggableAttr);

    el.ondrop = function(ev) {
      drop(binding, ev);
    };
    el.ondragover = allowDrop;
  }
};

function allowDrop(ev) {
  ev.preventDefault();
  ev.target.style.border = '1px dotted #f00';
}

function drop(binding, ev) {
  ev.preventDefault();

  let df = ev.dataTransfer;
  let dropFiles = []; // 存放拖拽的文件对象

  if (df.items !== undefined) {
    // Chrome有items属性，对Chrome的单独处理
    for (let i = 0; i < df.items.length; i++) {
      let item = df.items[i];
      // 用webkitGetAsEntry禁止上传目录
      if (item.kind === 'file' && item.webkitGetAsEntry().isFile) {
        let file = item.getAsFile();
        dropFiles.push(file);
      }
    }
  }

  let option = {
    tar: binding.value,
    dropFiles,
    ev
  };

  EventBus.$emit('containerChangeHandle', option);
  ev.target.style.border = '1px solid #ddd';
}
