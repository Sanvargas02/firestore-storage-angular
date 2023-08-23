//Interfaz Base para Modelar nuestros datos - Base Modelo de Nuestros Objetos.
//Podemos extender los datos si es necesario con otra interfaz usando extends o integrar una interfaz y funciones dentro de otra para hacerla más robusta.

// Caso Practico:
// INTERFACES DE TIPO: ATRACTIVO TURÍSTICO - PRESTADOR TURISTICO - MUNICIPIO - RUTAS TURÍSTICAS.
// BASADOS EN SUS DEBIDOS FORMULARIOS A TENER EN CUENTA.

//Iniciamos con una interfaz con propiedades compartidas
export default interface Place {
  id?: string; // NO aparece en el Formulario, Firebase lo establece por defecto.
  name: string;
  descripcion: string;
  latitud?: number; //Opcional - Aparece en el formulario
  longitud?: number; //Opcional - Aparece en el formulario
  googleMaps?: string; //Opcional - Aparece en el formulario
  meGusta?: number; //Opcional - Se establece un contador que sólo trae el dato en caso de que presionen un ícono, similar al de editar o borrar. Y se enlaza con el id del sitio.
  pathImage?: string[]; //Array de Paths de Imágenes opcional ya que no se pueden exportar la información en un Json
}

//Interfaz para Prestadoes Turisticos
export interface prestadorTuristico extends Place {
  //id
  //name: string;
  rntRm: string;
  //descripcion: string;
  servicios: string;
  zona: string;
  municipio: string;
  direccion: string;
  indicacionesAcceso: string;
  //latitud?: number;
  //longitud?: number;
  //googleMaps?: string;
  whatsapp: number;
  celular1: number;
  celular2: number;
  facebook: string;
  instagram: string;
  pagWeb: string;
  correo: string;
  horarioAtencion: string;
  //pathImage?: string[];
}

const nuevo = (int: prestadorTuristico) => {}


//Se puede crear otro tipo de interfaces con el fin de modelar otros tipos de datos distintos
//Ejemplo sería categorías
