import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';

class Camiones{

    private marca: string;
    private modelo: string;
    private año: number;
​
    public constructor(marca: string, modelo: string, año:number) {
        this.marca = marca;
        this.modelo= modelo;
        this.año = año;
    }
​
    
}
​class Autos{

    private marca: string;
    private modelo: string;
    private año: number;
​
    public constructor(marca: string, modelo: string, año:number) {
        this.marca = marca;
        this.modelo= modelo;
        this.año = año;
    }
​
    
}
​
class RegistroAutomotor {
    private name:string;
    private direccion: string;
    private listaCamiones : Array<Camiones>;
    private listaAutos : Array<Autos>;
​
    public constructor(name: string, direccion :string, listaCamiones: Array<Camiones>, listaAutos: Array<Autos>){
        this.name= name;
        this.direccion =direccion;
        this.listaCamiones = listaCamiones;
        this.listaAutos = listaAutos;
    }
​
    public getListaDeCamiones(): Array<Camiones> {
        return this.listaCamiones;
    }
    
    
    public getListaDeAutos(): Array<Autos> {
        return this.listaAutos;
    }
​
}
​
​
//instalar npm install @types/node
// creamos un gestor que nos permite leer un archivo de texto
​
class GestorDeArchivos {
​
    private arregloString: string[];
​
    constructor(txtFileLocation: string) {
​
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); //esta variable guarda "Audi, A3 caprio, 2018;Mercedes-Benz, Vito, 2020;Ferrari, 458 Italia, 2022"
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
        //["Audi, A3 caprio, 2018;Mercedes-Benz, Vito, 2020;Ferrari, 458 Italia, 2022"]
    
    }
​
    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }
​
    public getArregloString(): string[] {
        return this.arregloString;
    }
​
}
​
​
function crearAutos(Autos: string, arrayProfesor: Array<Autos>) : void{
​
    let propiedadAutos : string[] = Autos.split(','); //la variable profesor va a contener --->"Juan Perez,333333333" y profesor.split(',') = ["Juan Perez", "333333333"]
    let marca: string = propiedadAutos[0];
    let modelo: string = propiedadAutos[1];
    let año: number = Number(propiedadAutos[2]);
    let nuevoAuto : Autos = new Autos(marca, modelo, año);
​
    //inserto el elemento de tipo Profesor en el arreglo recibido
    arrayProfesor.push(nuevoAuto);
}
​
//funcion para "borrar" un profesor
​
function borrarAuto(arregloAutos: Array<Autos>, posicion: number){
​
    delete arregloAutos[posicion]
}
​
//funcion para modificar datos de un profe
//instalamos readline-sync -- npm install readline-sync
​
function modificarAutos(arregloAutos: Array<Autos>, posicion: number,){
    
    let marca :string = ReadlineSync.question("Ingrese la marca del Auto: ");
    let modelo: string = ReadlineSync.question("Ingrese el modelo del Auto: ");
    let año :number = ReadlineSync.questionInt("Ingrese el año del Auto: ");
​
    let AutoModificado : Autos = new Autos(marca, modelo, año);
​
    delete arregloAutos[posicion];
    arregloAutos[posicion] = AutoModificado;
}
​
//Iniciar programa
let datos: GestorDeArchivos = new GestorDeArchivos("registro.txt");
datos.mostrarArreglo();
​
let camion1 : Camiones = new Camiones("Scania", "XX", 2017);
let camion2 : Camiones = new Camiones("Mercedes-Benz", "XL", 2018);
let listaCamiones : Array<Camiones> = [camion1,camion2];
let listaAutos : Array<Autos> = [];
​
for (let i : number= 0; i < datos.getArregloString().length; i++){
​
    crearAutos(datos.getArregloString()[i], listaAutos);
}
​

console.log(listaCamiones);
​
console.log(listaAutos)
​
borrarAuto(listaAutos,2);
console.log(listaAutos);
​
modificarAutos(listaAutos,1);
​
console.log(listaAutos);