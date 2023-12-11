const { createApp } = Vue

createApp({
  data() {
    return {
        currentIndex: 0,
        slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            autoPlayInterval: null,
    }
  }, methods:{
    PrevSlide() {
        // funzione per carosello infinito su click prev
        this.currentIndex--;
        if(this.currentIndex < 0){
        this.currentIndex = this.slides.length -1
        }
    },
    NextSlide() {
        // funzione per carosello infinito su click next
        this.currentIndex++;
        if(this.currentIndex > this.slides.length -1) {
        this.currentIndex = 0;
        }
    },
    // funzione per bloccare l'autoplay del carosello al passaggio del mpuse
    stopAutoPlay(){
        clearInterval(this.autoPlayInterval);
    },
    // funzione per auto play quando il mouse non è in hover
    startAutoPlay(){
    this.autoPlayInterval = setInterval(() => {
            this.NextSlide();
        }, 3000);
      },
    //   al click su thumb image mostra la corrispondente immagine in grande
      showImage(index){
        this.currentIndex = index;
      }
    },
    // richiama e inizializza la funzione per il carosello automatico una volta che tutta l pagina è stata caricata
    mounted(){
        this.startAutoPlay();
    }
  }).mount('#app');

