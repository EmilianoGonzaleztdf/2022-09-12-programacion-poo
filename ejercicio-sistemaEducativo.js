"use strict";
exports.__esModule = true;
var profesores = /** @class */ (function () {
    /*constructor*/
    function profesores(paramApellido, paramNombre, paramListadoAlumnos) {
        this.apellido = paramApellido;
        this.nombre = paramNombre;
        this.listadoAlumnos = paramListadoAlumnos;
    }
    /*funciones*/
    profesores.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    profesores.prototype.setearNombre = function () {
        return this.nombre;
    };
    profesores.prototype.obtenerApellido = function () {
        return this.apellido;
    };
    profesores.prototype.setearApellido = function () {
        return this.apellido;
    };
    return profesores;
}());
var alumno = /** @class */ (function () {
    /*constructor*/
    function alumno(paramNombre, paramApellido, paramNotaMat, paramNotaGeo, paramNotaCS) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.notaMat = paramNotaMat;
        this.notaGeo = paramNotaGeo;
        this.notaCS = paramNotaCS;
    }
    /*funciones*/
    alumno.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    alumno.prototype.setearNombre = function () {
        return this.nombre;
    };
    alumno.prototype.obtenerApellido = function () {
        return this.apellido;
    };
    alumno.prototype.setearApellido = function () {
        return this.apellido;
    };
    alumno.prototype.obtenerNotaMat = function () {
        return this.notaMat;
    };
    alumno.prototype.obtenerNotaGeo = function () {
        return this.notaGeo;
    };
    alumno.prototype.obtenerNotaCS = function () {
        return this.notaCS;
    };
    alumno.prototype.obtenerClasificacionMat = function () {
        if (this.notaMat > 7) {
            return "aprobado";
        }
        else {
            return "desaprobado";
        }
    };
    alumno.prototype.obtenerClasificacionGeo = function () {
        if (this.notaGeo > 7) {
            return "aprobado";
        }
        else {
            return "desaprobado";
        }
    };
    alumno.prototype.obtenerClasificacionCS = function () {
        if (this.notaCS > 7) {
            return "aprobado";
        }
        else {
            return "desaprobado";
        }
    };
    return alumno;
}());
var escuela = /** @class */ (function () {
    /* constructor */
    function escuela(paramNombre, paramNumero, paramListadoAlumno, paramListadoProfesor) {
        this.nombreEscuela = paramNombre;
        this.numeroEscuela = paramNumero;
        this.listadoAlumnos = paramListadoAlumno;
        this.listadoProfesores = paramListadoProfesor;
    }
    /*funciones*/
    escuela.prototype.obtenerNombreEscuela = function () {
        return this.nombreEscuela;
    };
    escuela.prototype.setearNombreEscuela = function () {
        this.nombreEscuela;
    };
    escuela.prototype.obtenernumeroEscuela = function () {
        return this.numeroEscuela;
    };
    escuela.prototype.setearNumeroEscuela = function () {
        this.numeroEscuela;
    };
    escuela.prototype.contratarProfesor = function (paramProfesores) {
        var profesorNuevo = new profesores("a", "b", this.listadoAlumnos);
        console.log("profesor contratado");
    };
    escuela.prototype.despedirProfesor = function (paramProfesores) {
        console.log("se despidio al profesor");
    };
    escuela.prototype.matricularAlumno = function (paramAlumno) {
        var alumnoNuevo = new alumno("", "", 4, 4, 4);
        console.log("se matriculo al alumno");
    };
    escuela.prototype.removerAlumno = function (paramAlumno) {
        console.log("se dio de baja el alumno");
    };
    return escuela;
}());
var alumnoA = new alumno("carlos", "example", 9, 10, 8);
var alumnoB = new alumno("cachito", "perez", 1, 1, 1);
var listadoAlumnos = [alumnoA, alumnoB];
var docenteA = new profesores("castaña", "cacho", listadoAlumnos);
var docenteB = new profesores("castaña", "cacho", listadoAlumnos);
var listadoProfesores = [docenteA, docenteB];
var escuela1 = new escuela("escuela", 123, listadoAlumnos, listadoProfesores);
console.log(listadoAlumnos);
console.log(listadoProfesores);
console.log(escuela1);
