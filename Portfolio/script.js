function move(objx) {
 objx.pos = getOffset(document.getElementById("mytest")).left
 let y = undefined;
 if( objx.pos >= innerWidth) {
    objx.state= 'recul'
    document.getElementById('mytest').style.transform="scaleX(-1)";
    y = getOffset( document.getElementById("mytest")).top;
 }
 if( objx.pos <= 0){
    objx.state = 'avance'
    document.getElementById('mytest').style.transform="scaleX(1)";
    y = getOffset( document.getElementById("mytest")).top;
 }
 console.log(`x1 = ${objx.pos}`)
 objx.pos = calculex(objx);
 console.log(`x2 = ${objx.pos}`)
document.getElementById("mytest").style.left = `${objx.pos}px`;
if(y){    
    if(y >= innerHeight-1){
    y = 0;
}
    document.getElementById("mytest").style.top = `${y}px`;
}

 setTimeout(move, 6,objx);
       
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  function conversionpixel(x){
    return(Math.round(x-8));
    
  }
  function calculex(objx){
    console.log(objx.state)
    if(objx.state == "avance"){
        objx.pos= conversionpixel(objx.pos) + 3; 
     } else {
        objx.pos = conversionpixel(objx.pos) - 3;
     }
     return objx.pos
  }

  function initmove() {
    objx = { state:'avance', pos:getOffset( document.getElementById("mytest")).left}
    playAudio()
    move(objx)
  }


async function playdecompte(){
  var audio = document.getElementById("Mydecompte");
  audio.play();
}
  function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }

  function openprojetphp()
  {
    document.getElementById('projet').innerHTML = 
    ` <h3 class="projtitle">Cliquez sur un nom pour voir le code source</h3>
    <div class="proj">
      <div class="proj-item">
          <div class="vid">
           <img class="proj-video" src="./Images/Routepage.png">
          </div>
      </div>
      <div class="proj-item">
          <div class="vid">
           <img class="proj-video" src="./Images/Adminpage.png">
          </div>
          <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_Typescript/My_wordle">My Bubble Tea</a>
      </div>
    
      <div class="proj-item">
          <div class="vid">
              <img class="proj-video" src="./Images/Addarticle.png">
          </div>
      </div>
    </div>`}

  function openprojetc(){
    document.getElementById('projet').innerHTML = 
   ` <h3 class="projtitle">Cliquez sur un nom pour voir le code source</h3>
<div class="proj">
    <div class="proj-item">
        <div class="vid">
            <video class="proj-video" src="./Video/cell.game.mp4" muted autoplay loop></video>
        </div>
        <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_C/Projet/Cell_game">Cell game</a>
    </div>

    <div class="proj-item">
        <div class="vid">
            <video class="proj-video" src="./Video/snake.mp4"  muted autoplay loop></video>
        </div>
        <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_C/Projet/snake_reseau">Snake Reseaux Multijoueur</a>
    </div>

    <div class="proj-item">
        <div class="vid">
            <video class="proj-video" src="./Video/Fourmiz.mp4" muted autoplay loop></video>
        </div>
        <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_C/Projet/Fourmiz">Fourmiz</a>
    </div>
</div>`}

function openprojetTS(){
  document.getElementById('projet').innerHTML = 
 ` <h3 class="projtitle">Cliquez sur un nom pour voir le code source</h3>
<div class="proj">
  <div class="proj-item">
      <div class="vid">
          <video class="proj-video" src="./Video/Hyrule_castle.mp4" muted autoplay loop></video>
      </div>
      <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_Typescript/Hyrule_castle">Hyrue Castle</a>
  </div>
  <div class="proj-item">
      <div class="vid">
          <video class="proj-video" src="./Video/My_wordle.mp4"  muted autoplay loop></video>
      </div>
      <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_Typescript/My_wordle">My Wordle</a>
  </div>

  <div class="proj-item">
      <div class="vid">
          <img class="proj-video" src="./Images/MY_ORM.png" muted autoplay loop></video>
      </div>
      <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_Typescript/My_ORM">MY ORM</a>
  </div>
</div>`}

  function openprojetgo(){
    document.getElementById('projet').innerHTML = `
    <div>
    <audio id="myAudio">
      <source src="./Music/dejavue.mp3" type="audio/mpeg" />
    </audio>
    <audio id="Mydecompte">
    <source src="./Music/course.mp3" type="audio/mpeg" />
  </audio>
    <img
      src="./Images/tuture3.png"
      height="40"
      width="40"
      id="mytest"
      class="mytest"
    />
     <h3 class="projtitle">Cliquez sur un nom pour voir le code source</h3>
      <div class="proj">
        <a href="https://github.com/SunnyBara/Dev/tree/master/Langage_Golang"> API GO </a>
      </div>
       <div id='feu' class="feu">
      </div>
    </div>`
    playdecompte();
    displayfeurouge();
  }

  function displayfeurouge() {
    document.getElementById('feu').innerHTML = `  
    <div class='feu'>  
    <img
    src="./Images/feurouge.png"
    height="90"
    width="90"
    id="feu"
    class='feu'
  />
  </div>`
  setTimeout(displayfeuorange,1000);
  }
  function displayfeuvert() {
    document.getElementById('feu').innerHTML = `  
    <div class='feu'>  
    <img
    src="./Images/feuvert.png"
    height="90"
    width="90"
    id="feu"
    class='feu'
  />
  </div>`
  initmove();
  setTimeout(suppressefeu,1000);
  }
  function suppressefeu(){
    document.getElementById('feu').innerHTML =''
  }
  function displayfeuorange() {
    document.getElementById('feu').innerHTML = `  
    <div class='feu'>  
    <img
    src="./Images/feuorange.png"
    height="90"
    width="90"
    id="feu"
    class='feu'
  />
  </div>`
  setTimeout(displayfeuvert,1000);
  }