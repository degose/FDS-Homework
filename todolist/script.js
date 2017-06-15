// ! todolist script.js



(function(global, document, _){
   'use strict';
   
   // 동적으로 todo-body 생성
      // <div class="todo-body">
      // <ul class="todo-list">
      //    <li class="todo-item">
      //        할일
      //       <button class="btn btn-remove" type="button">삭제</button>
      //    </li>
      // </ul>
      // </div>
   var container = _.selector('.container');
   var btn_add = _.selector('.btn-add');
   var todo_body = _.createEl('div');
   todo_body.setAttribute('class','todo-body');
   var todo_list = _.createEl('ul');
   todo_list.setAttribute('class','todo-list');

   var btn_remove_all = _.createEl('button','모두삭제');
   btn_remove_all.setAttribute('class','btn-remove-all');
   btn_remove_all.setAttribute('type','button');
   // console.log(btn_remove_all.getAttribute('class'));
   // btn_remove_all.getAttribute('class') + ' ' + 'btn';
   var new_btn = btn_remove_all.getAttribute('class') + ' ' + 'btn';
   btn_remove_all.setAttribute('class',new_btn);

   _.appendChild(todo_body,todo_list);
   _.appendChild(todo_body,btn_remove_all);
   _.appendChild(container,todo_body);
   console.log(todo_body);

   btn_add.onclick = todoAdd;
   btn_remove_all.onclick = todoRemoveAll;


   function todoAdd(todo) {
      var todo = _.tag('input');
      var todo_item = _.createEl('li',todo.value);
      todo_item.setAttribute('class','todo-item');
      var btn_remove = _.createEl('button','-');
      btn_remove.setAttribute('class','btn-remove');
      // btn_remove.getAttribute('class').value + ' ' + 'btn';
      btn_remove.setAttribute('type','button');
      
      if(todo.value !== '') { 
         _.appendChild(todo_item,btn_remove);
         _.appendChild(todo_list,todo_item);

         btn_remove.onclick = todoRemove;
         // data.push(todo_item);
         function todoRemove() {
            todo_list.removeChild(this.parentNode);
         };
         todo.value = ''; // input 창에 빈문자열로 다시 반환
      }else{return alert('아무말이라도 써주세요.');};

   }
   

   function todoRemoveAll() {
      // for문을 돌려서 배열에 담긴 list_item을들 하나하나 지우기
      var ulChildren = todo_list.children;
      console.log(ulChildren.length);
      if (ulChildren.length !== 0) {
         for(var l=ulChildren.length; 0 < l--;){
            // console.log(ulChildren[i]);
            todo_list.removeChild(ulChildren[l]);
         }
      }else{return alert('아무말이라도 써주세요.');}
   }

})(window, document, window.FDS);