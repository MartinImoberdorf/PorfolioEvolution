//MAQUINA DE ESCRIBIR EFECTO

const typed = new Typed('.Typed',{
    strings:[
        '<b class="idiomas">HELLO</b>',
        '<b class="idiomas">BIENVENIDO</b>',
        '<b class="idiomas">歡迎</b>',
        '<b class="idiomas">BENVINGUT</b>',
        '<b class="idiomas">ようこそ</b>',
        '<b class="idiomas">BIENVENUE</b>',
        '<b class="idiomas">WELKOM</b>',
        '<b class="idiomas">BENVENUTA</b>',
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

//PRELOADER *FUTURE*
window.addEventListener('load', () =>{
    setTimeout(function(){
        const preloader=document.querySelector('.preloader');
        preloader.style.opacity=0
        preloader.style.visibility='hidden'
    }, 3000);
});


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-CT1N30H46Q');

AOS.init();
const $preloader=document.getElementById('loading');

//CAMBIO DE IDIOMA MY STORY

//  function display1() {
//      document.getElementById("MyStory-title").innerHTML="How my life changed...";
//      document.getElementById("disp").innerHTML= "In a few words, I will try to explain what was the beginning of everything...<br><br>I can start by saying that I love video games; so when I was a child I played for hours and hours, especially with one famous football game. But sometimes this generated discussions or complaints with my parents because I never did anything else in my free time. In my defence, I was a good student that always had great grades at school.<br><br>One day, I was in the middle of a game, when my dad appeared and sat behind me. I thought it would be to see me play and can show him how good I was at that game, but he said completely the opposite: <span>'with all the time you spend on those games you should have already learned how to program it, how to make it or even better'</span>, he got up and went away.<br><br>One night, my dad's phrase was still in my head, so I decided to search on the internet, especially on YouTube, when I found a channel called La Geekipedia De Ernesto. There appeared my first programming language, Java, and I remember I only saw one video and then I went to sleep.<br><br>Over time, I saw one video per day, and everything started to change when the time that I used to spend on video games started to use in learning programming. All the things I saw made me feel more and more passionate about this journey. Sometimes I can realize everything that I have learned and done, and I'm really proud of this amazing change in my life.<br><br>On other hand, I must highlight the dedication and talent of my mum to Maths; days and nights of doing maths exercises together. I remember when I was in primary school and the teacher taught us to divide, with a confusing mechanism. I didn't understand anything, so I came back home and explain to my mum. She had already taught to me multiplication tables, so we found a new and more efficient method to divide.<br><br>So with these experiences, with Maths and Programming, I have decided to study Systems Engineering.<br><br>Thanks, mom and dad!<br><br>";
//  }
//  function display2() {
//      document.getElementById("MyStory-title").innerHTML="Como cambio mi vida...";
//      document.getElementById("disp").innerHTML= "En pocas palabras intentaré explicar cuál fue el principio de todo...<br><br>Puedo empezar diciendo que me encantan los videojuegos; así que cuando era niño jugaba horas y horas, especialmente con un famoso juego de fútbol. Pero a veces esto generaba discusiones o quejas con mis padres porque nunca hacía otra cosa en mi tiempo libre. En mi defensa, yo era un buen estudiante que siempre tenía buenas notas en la escuela.<br><br>Un día, estaba en medio de un juego, cuando apareció mi papá y se sentó detrás de mí. Pensé que sería para verme jugar y poder demostrarle lo bueno que era en ese juego, pero me dijo todo lo contrario: <span>'Con todo el tiempo que dedicas a esos juegos ya deberías haber aprendido a programarlo, a hacerlo o incluso mejor'</span>, se levantó y se fue.<br><br>Una noche, la frase de mi papá todavía estaba en mi cabeza, así que decidí buscar en Internet, especialmente en YouTube, cuando encontré un canal llamado La Geekipedia De Ernesto. Ahí apareció mi primer lenguaje de programación, Java, y recuerdo que solo vi un video y luego me fui a dormir.<br><br>Con el tiempo, veía un video por día, y todo comenzó a cambiar cuando el tiempo que solía dedicar a los videojuegos comencé a usarlo para aprender a programar. Todas las cosas que vi me hicieron sentir cada vez más apasionado por este viaje. A veces puedo darme cuenta de todo lo que he aprendido y hecho, y estoy muy orgulloso de este increíble cambio en mi vida.<br><br>Por otro lado, debo resaltar la dedicación y el talento de mi mamá para las Matemáticas; días y noches de hacer ejercicios de matemáticas juntos. Recuerdo cuando estaba en primaria y la maestra nos enseñaba a dividir, con un mecanismo confuso. No entendí nada, así que volví a casa y le expliqué a mi mamá. Ella ya me había enseñado las tablas de multiplicar, así que encontramos un método nuevo y más eficiente para dividir.<br><br>Con estas experiencias, con Matemáticas y Programación, he decidido estudiar Ingeniería de Sistemas.<br><br>Gracias mamá y papá!<br><br>";
//  }


function redirigir_KF() {
    window.location.href = "Archivos/REFLEX.rar"; 
}
function redirigir_WC() {
    window.location.href = "Archivos/REFLEX.rar"; 
}
function redirigir_RF() {
    window.location.href = "Archivos/World Cup Simulator.rar"; 
}
function CV() {
    alert("Proximamente...");
}

