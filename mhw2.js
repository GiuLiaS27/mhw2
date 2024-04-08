//Menu quando è in mobile 
const Menu = document.querySelector('#bloccomenu');
Menu.addEventListener('click', menuTenda);
let isVisible = false;
function menuTenda(event) {  
  const MenuT = document.querySelector('#menu_tenda');

  isVisible = !isVisible;
  if (isVisible) {
    MenuT.classList.remove('hidden');
  } else {
    MenuT.classList.add('hidden');
  }
}

//Cambio sfondo quando clicchiamo su un pallino
const SFONDO1= 'im7.jpg';
const SFONDO2= 'slide_2.jpg';
const SFONDO3= 'im12.jpg';

const Cerchio=document.querySelectorAll('#palline');
for(let i=0; i<Cerchio.length; i++){
    Cerchio[i].addEventListener('click', cambioSfondo);
}

function cambioSfondo(event){
    const elementoSelezionato = event.target;
    const indice = elementoSelezionato.dataset.index;
    const bloccoFoto=document.querySelector('#blocco_foto');
    const scritta2=document.querySelector('#infofoto2');
    const node1=document.createTextNode("LA NOSTRA STORIA E LO STAFF");
    const node2=document.createTextNode("SCOPRI IL NOSTRO MENU'");
    const node3=document.createTextNode("LEGGI IL NOSTRO BLOG");
    scritta2.innerHTML='';
    
    if(indice === '1'){
        bloccoFoto.style.backgroundImage = `url(${SFONDO1})`;
        scritta2.appendChild(node1);
        
    }else if (indice === '2'){
        //Secondo point 
        bloccoFoto.style.backgroundImage = `url(${SFONDO2})`;
        scritta2.appendChild(node2);
        
    } else if (indice === '3'){
        bloccoFoto.style.backgroundImage = `url(${SFONDO3})`;
        scritta2.appendChild(node3);
    }
}



//Dettagli 
const dettagli=document.querySelector('.testoDettagli');
dettagli.addEventListener('click',LeggiDiPiu);
let visible=false;
function LeggiDiPiu(event){
    const testonuovo=document.querySelector('#testonascosto');
    const text = event.currentTarget.querySelector('span');
    const blocco=document.querySelector("blocco_centrale");
    visible=!visible;
    if(visible){
        testonuovo.classList.remove('hidden');
        text.textContent='LEGGI DI MENO';
    }else{
        testonuovo.classList.add('hidden');
        text.textContent='LEGGI DI PIU';

    }
}

//per visualizzare la galleria
const PHOTO_LIST = ["im1.jpg", "im4.jpg", "im2.jpg", "im8.jpg"];

function createImage(src){
    const image = document.createElement('img');
    image.src=src;
    return image;
}

const album=document.querySelector('#album');
for(let i=0; i<PHOTO_LIST.length; i++){
    const photoSrc = PHOTO_LIST[i];
    const image= createImage(photoSrc);
    image.addEventListener('click',onThumbnailClick);
    album.appendChild(image);
}

function onThumbnailClick(event){
    const modalView=document.querySelector('#modal-view');
    const image=createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    //modalView.style.top=window.scroll+'px';
    modalView.innerHTML='';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(){
    document.body.classList.remove('no-scroll');
    const modalView=document.querySelector('#modal-view');
    //modalView.classList.add('hidden');
    modalView.classList.add('hidden');
}

const modalView=document.querySelector('#modal-view');
modalView.addEventListener('click',onModalClick);

const galleriaItems = document.querySelectorAll('#album img');
for(let i=0; i < galleriaItems.length; i++){
    const item = galleriaItems[i];
    item.addEventListener('click', onThumbnailClick);
}

