//Interfaz Base para Modelar nuestros datos - Base Modelo de Nuestros Objetos.
//Podemos extender los datos si es necesario con otra interfaz usando extends o integrar una interfaz y funciones dentro de otra para hacerla más robusta.

// Caso Practico:
// INTERFACES DE TIPO: ATRACTIVO TURÍSTICO - PRESTADOR TURISTICO - MUNICIPIO - RUTAS TURÍSTICAS.
// BASADOS EN SUS DEBIDOS FORMULARIOS A TENER EN CUENTA.

//Iniciamos con una interfaz con propiedades compartidas
export default interface Place {
  id?: string; // Lo ponemos nosotros o lo genera Firebase por defecto
  latitude?: number; //Opcional
  longitude?: number; //Opcional
  googleMaps?: string; //Opcional
  name: string;
  descripcion: string;
  pathImage?: string[]; //Array de Paths de Imágenes opcional ya que no se pueden exportar por la referencia
}

//Interfaz para Prestadoes Turisticos
export default interface prestadorTuristico {}


//Se puede crear otro tipo de interfaces con el fin de modelar otros tipos de datos distintos
//Ejemplos sería categorías
