class Clase {
    constructor() {
        this.alumnos = []
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno)
    }

    calcularPromedio() {
        let notas = 0;
        let alumnos = this.alumnos.length

        for(const alumno of this.alumnos) {
            notas += alumno.nota 
        }

        if(alumnos > 0) {
            alert('El promedio es: ' + (notas / alumnos))
        } else {
            alert('No se cargaron Alumnos al sistema')
        }
    }

    listarAlumnos() {
        if(this.alumnos.length > 0) {
            let lista = ""
            for(const alumno of this.alumnos) {
                 lista += "Nombre: " + alumno.nombre + " - Nota: " + alumno.nota + '\n'
            }

            alert(lista)
        } else {
            alert('No se cargaron Alumnos al sistema')
        }
    }

    mostrarNota(nombre){
        const alumno = this.alumnos.filter((al) => al.nombre.includes(nombre))
        if(alumno.length > 0) {
            let lista = ""
            for(const al of alumno) {
                 lista += "Nombre: " + al.nombre + " - Nota: " + al.nota + '\n'
            }

            alert(lista)
        } else {
            alert('No se cargaron Alumnos al sistema')
        }
    }
}

class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
    }
}

let clase = new Clase();

function menu() {
    opcion = parseInt(prompt(`Bienvenido al sistema de simulador de promedios de notas
    Ingrese una opcion:
    1) Ingresar nuevo Alumno
    2) Mostrar los alumnos de la clase
    3) Ver notas de un alumno
    4) Calcular el promedio de la clase
    5) Salir
    `))

    return opcion
}

function cargarAlumno(clase) {
    let nombre;
    let nota;

    nombre = prompt("Ingrese el nombre del alumno");
    while(nombre ===""){
        nombre = prompt("Debe ingresar el nombre del alumno");
    }

    nota = parseInt(prompt("Ingrese la nota del alumno"));
    while(nota < 1 && nota > 10){
        nota = parseInt(prompt("Debe ingresar una nota mayor a 0 y menor o igual a 10"));
    }

    const alumno = new Alumno(nombre, nota)
    clase.agregarAlumno(alumno);
}

function mostrarNotaDe() {
    let nombre = prompt("Ingrese el nombre del alumno");
    while(nombre ===""){
        nombre = prompt("Debe ingresar el nombre del alumno");
    }
    clase.mostrarNota(nombre)
}

function simulador() {
    let opcion = 0;

    do{
        opcion = menu()
        switch (opcion) {
            case 1:
                cargarAlumno(clase)
                break;
            case 2:
                clase.listarAlumnos()
                break;
            case 3:
                mostrarNotaDe()
                break;
            case 4:
                clase.calcularPromedio()
                break;
            case 5:
                alert('Saliendo del sistema...')
                break;
            default:
                alert('Opcion no valida')
                break;
        }
    } while(opcion !== 5)
}

simulador()