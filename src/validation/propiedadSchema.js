export const validationSchema = {
    titulo (value) {
      if (value?.length >= 6 ) return true
      return 'El titulo de la propiedad es obligatorio o es muy corto'
    },
    precio (value) {
      /*
          ^ - Representa el inicio de la cadena.
          [0-9]+ - Representa cualquier número del 0 al 9. El + indica que debe haber al menos un dígito, pero puede haber más.
          $ - Representa el final de la cadena.
      */
      if (/^[0-9]+$/.test(value)) return true
      return 'Debes colocar un precio que solo sean números'
    },
    habitaciones (value) {
      if (value) return true
      return 'Selecciona una cantidad de habitaciones'
    },
    baños (value) {
      if (value) return true
      return 'Selecciona una cantidad de baños'
    },
    estacionamiento (value) {
      if (value) return true
      return 'Selecciona la cantidad de estacionamientos'
    },
    descripcion (value) {
      if (value) return true
      return 'Agrega una Descripción'
    }
};
  
export const imageSchema = {
  imagen (value) {
      if (value) return true
      return 'Una fotografía es obligatoria'
  },
};
