
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
