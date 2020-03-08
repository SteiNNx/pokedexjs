
const poke_type = [
    { nombre: "normal", ruta: "public/img/normal.gif" },
    { nombre: "fighting", ruta: "public/img/lucha.gif" },
    { nombre: "flying", ruta: "public/img/volador.gif" },
    { nombre: "poison", ruta: "public/img/veneno.gif" },
    { nombre: "ground", ruta: "public/img/tierra.gif" },
    { nombre: "rock", ruta: "public/img/roca.gif" },
    { nombre: "bug", ruta: "public/img/bicho.gif" },
    { nombre: "ghost", ruta: "public/img/fantasma.gif" },
    { nombre: "steel", ruta: "public/img/acero.gif" },
    { nombre: "fire", ruta: "public/img/fuego.gif" },
    { nombre: "water", ruta: "public/img/agua.gif" },
    { nombre: "grass", ruta: "public/img/planta.gif" },
    { nombre: "electric", ruta: "public/img/electrico.gif" },
    { nombre: "psychic", ruta: "public/img/psiquico.gif" },
    { nombre: "ice", ruta: "public/img/hielo.gif" },
    { nombre: "dragon", ruta: "public/img/dragon.gif" },
    { nombre: "dark", ruta: "public/img/siniestro.gif" },
    { nombre: "fairy", ruta: "public/img/hada.gif" },
];

export const getIconType = valueType => { return `${poke_type.find(index => index.nombre == valueType)?.ruta}`; }

const poke_colors = {
    fire: '#f08030ad',
    grass: '#DEFDE0',
    electric: '#f8d03073',
    water: '#DEF3FD',
    ground: '#e0c068b0',
    rock: '#d5d5d4',
    fairy: '#e7a8b0a8',
    poison: '#a040a063',
    bug: '#a8b820ad',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#a890f075',
    fighting: '#E6E0D4',
    normal: '#a8a878ad'
};

export const getColorType = valueType => { return `${poke_colors[valueType]}`; }

