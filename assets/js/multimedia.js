class Multimedia{
    constructor(url){
        let _url=url

        this.getUrl=()=>_url
    };

    get urlGet(){
        return this.getUrl()
    };

    setInicio(){
        return `Este método es para realizar un cambio en la URL del video`
    };
    
};

export default Multimedia