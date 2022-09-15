export { }

class profesores {
    /*variables*/
    private apellido: string;
    private nombre: string;
    private listadoAlumnos: alumno[];
    /*constructor*/
    constructor(paramApellido: string, paramNombre: string, paramListadoAlumnos: alumno[]) {
        this.apellido = paramApellido;
        this.nombre = paramNombre;
        this.listadoAlumnos = paramListadoAlumnos;
    }
    /*funciones*/
    public obtenerNombre(): string {
        return this.nombre;
    }
    public setearNombre(): string {
        return this.nombre;
    }
    public obtenerApellido(): string {
        return this.apellido;
    }
    public setearApellido(): string {
        return this.apellido;
    }

}

class alumno {
    /*variables*/
    private nombre: string;
    private apellido: string;
    private notaMat: number;
    private notaGeo: number;
    private notaCS: number;
    /*constructor*/
    constructor(paramNombre: string, paramApellido: string, paramNotaMat: number, paramNotaGeo: number, paramNotaCS: number) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.notaMat = paramNotaMat;
        this.notaGeo = paramNotaGeo;
        this.notaCS = paramNotaCS;
    }
    /*funciones*/
    public obtenerNombre(): string {
        return this.nombre;
    }
    public setearNombre(): string {
        return this.nombre;
    }
    public obtenerApellido(): string {
        return this.apellido;
    }
    public setearApellido(): string {
        return this.apellido;
    }
    public obtenerNotaMat(): number {
        return this.notaMat;
    }
    public obtenerNotaGeo(): number {
        return this.notaGeo;
    }
    public obtenerNotaCS(): number {
        return this.notaCS
    }
    public obtenerClasificacionMat(): string {
        if (this.notaMat > 7) {
            return "aprobado"
        } else {
            return "desaprobado"
        }
    }
    public obtenerClasificacionGeo(): string {
        if (this.notaGeo > 7) {
            return "aprobado"
        } else {
            return "desaprobado"
        }
    }
    public obtenerClasificacionCS(): string {
        if (this.notaCS > 7) {
            return "aprobado"
        } else {
            return "desaprobado"
        }
    }
}

class escuela {
    /* atributos */
    private nombreEscuela : string;
    private numeroEscuela : number;
    private listadoAlumnos : alumno[];
    private listadoProfesores : profesores[];

    /* constructor */
    constructor(paramNombre : string, paramNumero : number, paramListadoAlumno : alumno[], paramListadoProfesor : profesores[]){
        this.nombreEscuela = paramNombre;
        this.numeroEscuela = paramNumero;
        this.listadoAlumnos = paramListadoAlumno;
        this.listadoProfesores = paramListadoProfesor;
    }
    /*funciones*/
    public obtenerNombreEscuela():string{
        return this.nombreEscuela;
    }
    public setearNombreEscuela():void{
        this.nombreEscuela;
    }
    public obtenernumeroEscuela():number{
        return this.numeroEscuela;
    }
    public setearNumeroEscuela(): void{
        this.numeroEscuela
    }
    public contratarProfesor(paramProfesores:profesores):void{
        let profesorNuevo = new profesores("a","b",this.listadoAlumnos)
        console.log("profesor contratado");
    }
    public despedirProfesor(paramProfesores:profesores):void{
        console.log("se despidio al profesor")
    }
    public matricularAlumno(paramAlumno:alumno):void{
        let alumnoNuevo = new alumno ("","",4,4,4)
        console.log("se matriculo al alumno") 
    }
    public removerAlumno(paramAlumno:alumno):void{
        console.log("se dio de baja el alumno")
    }

}

let alumnoA = new alumno ("carlos", "example",9,10,8);
let alumnoB = new alumno ("cachito", "perez", 1,1,1)

let listadoAlumnos : alumno[] = [alumnoA,alumnoB];

let docenteA = new profesores ("castaña", "cacho", listadoAlumnos);
let docenteB = new profesores ("castaña", "cacho", listadoAlumnos);

let listadoProfesores : profesores[] = [docenteA,docenteB];

let escuela1 = new escuela ("escuela", 123,listadoAlumnos,listadoProfesores)

console.log(listadoAlumnos)
console.log(listadoProfesores)
console.log(escuela1)