import "./style.css";

interface Grupo {
    nombre: string;
    fundacion: number;
    activo: boolean;
    genero: string;
}


const grupo1: Grupo = {
    nombre: "The Beatles",
    fundacion: 1960,
    activo: true,
    genero: "Pop Rock",
};

const grupo2: Grupo = {
    nombre: "Queen",
    fundacion: 1970,
    activo: false,
    genero: "Rock",
};

const grupo3: Grupo = {
    nombre: "AC DC",
    fundacion: 1973,
    activo: true,
    genero: "Hard Rock",
};

const grupo4: Grupo = {
    nombre: "Ludwig van Beethoven",
    fundacion: 1770,
    activo: false,
    genero: "Clásica",
};

const grupo5: Grupo = {
    nombre: "The Rolling Stones",
    fundacion: 1962,
    activo: true,
    genero: "Rock",
};

const estilo = "background: green; font-size: 16px; font-weight: bold;"

console.log("%c" + grupo1.nombre, estilo, "\nAño de fundación: " + grupo1.fundacion, "\nEstá en activo: " + grupo1.activo, "\nGénero: " + grupo1.genero);

console.log("%c" + grupo2.nombre, estilo, "\nAño de fundación: " + grupo2.fundacion, "\nEstá en activo: " + grupo2.activo, "\nGénero: " + grupo2.genero);

console.log("%c" + grupo3.nombre, estilo, "\nAño de fundación: " + grupo3.fundacion, "\nEstá en activo: " + grupo3.activo, "\nGénero: " + grupo3.genero);

console.log("%c" + grupo4.nombre, estilo, "\nAño de fundación: " + grupo4.fundacion, "\nEstá en activo: " + grupo4.activo, "\nGénero: " + grupo4.genero);

console.log("%c" + grupo5.nombre, estilo, "\nAño de fundación: " + grupo5.fundacion, "\nEstá en activo: " + grupo5.activo, "\nGénero: " + grupo5.genero);