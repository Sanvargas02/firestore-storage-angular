//Interfaz Base para Modelar nuestros datos - Base Modelo de Nuestros Objetos.
//Podemos extender los datos si es necesario con otra interfaz usando extends o integrar una interfaz y funciones dentro de otra para hacerla más robusta.

// Caso Practico:
// INTERFACES DE TIPO: ATRACTIVO TURÍSTICO - PRESTADOR TURISTICO - MUNICIPIO - RUTAS TURÍSTICAS.
// BASADOS EN SUS DEBIDOS FORMULARIOS A TENER EN CUENTA.

//Iniciamos con una interfaz con propiedades compartidas
export default interface Place {
  id?: string;
  name: string;
  descripcion: string;
  // latitude: number;
  // longitude: number;
  pathImage: string[]; //Array de Paths de Imágenes
}

//Interfaz para Prestadoes Turisticos
export default interface prestadorTuristico {}


//Se puede crear otro tipo de interfaces con el fin de modelar otros tipos de datos distintos
//Ejemplos sería categorías
