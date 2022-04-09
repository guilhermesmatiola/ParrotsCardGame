let n_card=0;
let array=[];
let n_click=0;
let lastParrot;
let lastParrotElement;
let n_pairs=0;

let sec=0;
setInterval(function(){
    document.getElementById('timerDisplay').innerHTML="Timer: "+sec+" segundos";
    sec++;
}, 1000);

n_Cards();
selectCards();
cardsCreator();

function n_Cards(){
   while(n_card!=4 && n_card!=6 && n_card!=8 && n_card!=10 && n_card!=12 && n_card!=14){
        n_card = Number(prompt("Com qual número de cartas deseja jogar? (opções 4,6,8,10,12,14)"));
    }
}

function selectCards(){
    for(let i=0;i<(n_card/2);i++){
        array.push(Number(i));
        array.push(Number(i));
        //puxar 2 cartas com mesmo indice
    }
    array.sort(randomize);
}

//randomizar elas no array
function randomize(){
    return Math.random() - 0.5;
}

function cardsCreator(){
    for(let i=0; i<(n_card); i++){
        if(array[i]==1) cardCreator("unicornparrot",1);
        if(array[i]==2) cardCreator("metalparrot",2);
        if(array[i]==3) cardCreator("revertitparrot",3);
        if(array[i]==4) cardCreator("explodyparrot",4);
        if(array[i]==5) cardCreator("bobrossparrot",5);
        if(array[i]==6) cardCreator("fiestaparrot",6);
        if(array[i]==0) cardCreator("tripletsparrot",0);
    }
}

function cardCreator(parrot,id){
    document.querySelector(".cards-section").innerHTML+=`
    <div class="parrot-card" id="${id}" onclick="flipcard(this)">

        <div class="back-face face">
            <img class="gif-card" src="${parrot}.gif" alt="${parrot}">
        </div>

        <div class="front-face face">
            <img class="image-card" src="front.png" alt="Parrot">
        </div>
        
    </div>
    `;
}
function flipcard(element){

    n_click++;
    if (element.querySelector(".front-face") == null) {
        //delay cartas diferentes
        unflip(element);
        return;
    }

    element.querySelector(".front-face").classList.toggle("front-face-flip");
    element.querySelector(".front-face").classList.toggle("front-face");

    element.querySelector(".back-face").classList.toggle("back-face-flip");
    element.querySelector(".back-face").classList.toggle("back-face");
    memory(element);
}

function unflipcard(element) {
    element.querySelector(".front-face-flip").classList.toggle("front-face");
    element.querySelector(".front-face-flip").classList.toggle("front-face-flip");
  
    element.querySelector(".back-face-flip").classList.toggle("back-face");
    element.querySelector(".back-face-flip").classList.toggle("back-face-flip");
}

function memory(element) {
    let actualParrot = element.getAttribute("id");
    if (lastParrot != null) {
      if (actualParrot == lastParrot) {
        lastParrotElement.classList.add("pointerEventsNone"); //pointer events altera com evento do mouse e pega o elemento total, e de baixo
        element.classList.add("pointerEventsNone");
        lastParrot = null;
        n_pairs++;
        if (n_pairs == n_card / 2) {
          setTimeout(function () {
            alert(`Você venceu em ${n_click} jogadas e em ${sec - 1} segundos!`);
            let restart = prompt("Deseja jogar novamente?(responda com 'sim' ou 'não')");
            if (restart == "sim") {
              document.location.reload();
            }
          }, 1000);
        }
        return;
      } else {
        setTimeout(function () {
          unflipcard(element);
          unflipcard(lastParrotElement);
          lastParrot = null;
          lastParrotElement = null;
          return;
        }, 1000);
      }
    } 
    else {
      lastParrot = actualParrot;
      lastParrotElement = element;
      return;
    }
  }
  
