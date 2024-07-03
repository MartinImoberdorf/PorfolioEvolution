//PRELOADER
var loader=document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display="none";
})



//MAQUINA DE ESCRIBIR EFECTO

const typed = new Typed('.Typed',{
    strings:[
        '<b class="idiomas">Welcome . . .</b>',
        '<b class="idiomas">Bienvenido...</b>',
        '<b class="idiomas">歡迎...</b>',
        '<b class="idiomas">Willkommen...</b>',
        '<b class="idiomas">Benvingut...</b>',
        '<b class="idiomas">ようこそ...</b>',
        '<b class="idiomas">Bienvenue...</b>',
        '<b class="idiomas">Welkom...</b>',
        '<b class="idiomas">Benvenuta...</b>',
        '<b class="idiomas">Bienvenido...</b>',
        
    ],

	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


//MENU


function AboutMeView(){
    var html = document.documentElement;
    html.scrollTop = 2400;
}

function MyStoryView(){
    var html = document.documentElement;
    html.scrollTop = 1335;
}

function smoothScroll(target,duration){
    var target=document.querySelector(target);
    var targetPosition=target.getBoundingClientRect().top;
    var startPosition=window.pageYOffset;
    var distance=targetPosition-startPosition;
    var startTime=null;


    function animation(currentTime){
        if(startTime===null)startTime=currentTime;
        var timeElapsed=currentTime-startTime;
        var run=ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed<duration)requestAnimationFrame(animation);
        
    }

    function ease(t,b,c,d){
        t/=d/2;
        if(t<1)return c/2*t*t+b;
        t--;
        return -c/2*(t*(t-2)-1)+b;
    }

    requestAnimationFrame(animation);
}

var section1=document.querySelector('.menu1');
section1.addEventListener('click',function(){
    smoothScroll('.AboutMe',1000);
})

var section2=document.querySelector('.menu2');
section2.addEventListener('click',function(){
    smoothScroll('.MyStory',1000);
})

var section3=document.querySelector('.menu3');
section3.addEventListener('click',function(){
    smoothScroll('.Achievements',1000);
})



/*CARDS*/ 

const fondo=document.querySelector('.container');

var html5=document.querySelector('#Html5');
var others=document.querySelector('#Others');
var videoGames=document.querySelector('#VideoGames');


html5.onmouseover = function()   {
    fondo.style.backgroundImage = "url('Imgs/javaScript.gif')";
 };

others.onmouseover = function()   {
    fondo.style.backgroundImage = "url('Imgs/others.gif')";
 };


videoGames.onmouseover = function()   {
    fondo.style.backgroundImage = "url('Imgs/pacMan.gif')";
 };


/* VUELVE AL BLANCO (VER SI QUEDA O NA)
html5.onmouseout = function()   {
    fondo.style.backgroundImage=null ;
}
others.onmouseout = function()   {
    fondo.style.backgroundImage=null ;
}
videoGames.onmouseout = function()   {
    fondo.style.backgroundImage=null ;
}*/



/************************************************************************/

/************************************************************************/