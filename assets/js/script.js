//import Reproductor from "./reproductor.js"
import Multimedia from "./multimedia.js"

const moduloPlay=(()=>{
    
    let interno=(url,id)=>{
        
        let iFrame= document.querySelector(`#${id}`)

        iFrame.setAttribute('src',url)            
        
    }
    return{
        reproducir:(url,id)=>{
            return interno(url,id)
        }
    }  

})();
class Reproductor extends Multimedia{
    constructor(url,id){
        super(url)
        this.id=id
    };

    playMultimedia(){
        moduloPlay.reproducir(this.getUrl(),this.id)
    }

    setInicio(){
        document.querySelector(`#${this.id}`).setAttribute('src',this.getUrl()+`?start=${240}`)        
    }
};


let musica= new Reproductor("https://www.youtube.com/embed/FmOhpro8LkA","musica")
let pelicula= new Reproductor("https://www.youtube.com/embed/8pxa3wDxo5E","peliculas")
let serie= new Reproductor("https://www.youtube.com/embed/p3qCKOXO6kE","series")

musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()


pelicula.setInicio()

