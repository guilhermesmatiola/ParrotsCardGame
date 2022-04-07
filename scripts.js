let n_card=0;
let array=[];

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
        if(array[i]==1) cardCreator("unicornparrot");
        if(array[i]==2) cardCreator("metalparrot");
        if(array[i]==3) cardCreator("revertitparrot");
        if(array[i]==4) cardCreator("explodyparrot");
        if(array[i]==5) cardCreator("bobrossparrot");
        if(array[i]==6) cardCreator("fiestaparrot");
        if(array[i]==0) cardCreator("tripletsparrot");
    }
}

function cardCreator(parrot){
    document.querySelector(".cards-section").innerHTML+=`
    <div class="parrot-card" onclick="alt(this)">
        <div>
            <img class="image-card" src="front.png" alt="Parrot">
        </div>
        <div>
            <img class="gif-card" src="${parrot}.gif" alt="Parrot">
        </div>
    </div>
    `;
}
function alt(element){
    element.querySelector(".image-card").classList.toggle("gif-card");
}
