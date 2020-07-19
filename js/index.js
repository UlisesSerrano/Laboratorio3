
//Funcion para agregar itesm a la lista
function Button_addItems() {
    let contador = 0, item = document.querySelector("input"), list = document.querySelector("ul"),
     buton1 = document.querySelector(".addItems"), resultado = document.querySelector(".results");
  
    buton1.addEventListener("click", event => {
      event.preventDefault();
      
      list.innerHTML += `<li id="${contador}"> 
          <p> ${item.value} </p>
          <button class="${contador} check">check</button>
          <button class="${contador} del">delete</button>
      </li>`;
      contador = contador+1;
    });

  function borraItem(elementId) {
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }
  
  function checkElement(element) {
    if(element.matches('.checked')){
      element.classList.remove("checked");
    } 
    else {
      element.classList.add("checked");
    }
  }
    
    resultado.addEventListener("click", event => {
        if (event.target.matches(".del")) {
            borraItem(event.target.classList[0]);
        }
        if (event.target.matches(".check")) {
            let element = document.getElementById(event.target.classList[0]);
            checkElement(element);
        }
    });
  }


//inicializa 
 Button_addItems();

