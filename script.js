const prompt = require("prompt-sync")();

let usuario = null;
let year = null;
let opcion = true;
let resultado = "";

let n1Guardada = null;
let n2Guardada = null;
let n3Guardada = null;

function notas() {
    const n1 = Number(prompt("Ingrese la primera nota (0 a 5): "));
    const n2 = Number(prompt("Ingrese la segunda nota (0 a 5): "));
    const n3 = Number(prompt("Ingrese la tercera nota (0 a 5): "));
    const promedio = (n1 + n2 + n3) / 3;

    n1Guardada = n1;
    n2Guardada = n2;
    n3Guardada = n3;

    if (promedio >= 4.5) {
        resultado = "Aprobó con excelencia";
    } else if (promedio >= 3) {
        resultado = "Aprobó";
    } else {
        resultado = "Reprobó";
    }

    console.log(`${resultado}. Promedio: ${promedio.toFixed(2)}`);
    menu();
}

function promedioNotas() {
    if (n1Guardada === null) {
        console.log("No hay notas registradas todavía");
        return;
    }

    console.log("Notas del usuario:");
    console.log("Nota 1:", n1Guardada);
    console.log("Nota 2:", n2Guardada);
    console.log("Nota 3:", n3Guardada);
}

function registro() {
    const nombre = prompt("Ingrese su nombre: ");
    const edad = Number(prompt("Ingrese su edad: "));

    if (!nombre) {
        console.log("Debe ingresar un nombre válido");
        return;
    }

    usuario = nombre;
    year = edad;

    console.log("Nombre guardado correctamente");
    notas();
}

function mostrarUsuario() {
    if (usuario === null) {
        console.log("No hay usuario registrado");
    } else {
        console.log(`Hola ${usuario}, tienes ${year} años`);
        console.log("Estado:", resultado);
    }
}

function menu() {
    while (opcion) {
        console.log("\nMENU");
        console.log("1) Historia del usuario");
        console.log("2) Ver notas");
        console.log("3) Salir");

        let opt = prompt("Elige 1 a 3: ");

        if (opt === "1") {
            mostrarUsuario();
        } else if (opt === "2") {
            promedioNotas();
        } else if (opt === "3") {
            console.log("Saliendo...");
            opcion = false;
        } else {
            console.log("Opción inválida");
        }
    }
}

registro();
