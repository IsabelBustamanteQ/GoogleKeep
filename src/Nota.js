class Nota{
    constructor(titulo, descripcion){
        this.titulo=titulo;
        this.descripcion=descripcion;
    }
    GetTitulo(){
        return this.titulo;
    }
    GetDescripcion(){
        return this.descripcion;
    }
}
export default Nota;