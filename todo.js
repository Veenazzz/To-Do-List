let todoList=[{ item:'Buy Milk',
               dueDate:'4/02/2025'
            },
    {item :'Go to College' ,
         dueDate: '6/02/2025'
        }
        ];
displayItems();
function addTodo(){
    let inputElement =document.querySelector('#todo-input');
    let dateElement =document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate= dateElement.value; 
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value = '';
  dateElement.value='';
  displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml ='';
    containerElement.innerText='';
    for(let i=0;i<todoList.length;i++){
      
        let{item , dueDate}=todoList[i];
newHtml+= `
<span> ${item}</span>
<span> ${dueDate}</span>
<button class='btn-delete' onclick ="deleteTodo(${i})
"> Delete </button>
`
;
        containerElement.innerText = containerElement.innerText+"\n"+todoList[i];
    }
containerElement.innerHTML=newHtml;
}
function deleteTodo(index){
    todoList.splice(index,1);
    displayItems();
}