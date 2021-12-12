const campoRequerido = (input) => {
  if (input.trim().length > 4) {
    return true;
  } else {
    return false;
  }
};

function validarImagen(input) {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (input.value.trim().length > 0 && patron.test(input.value.trim())) {
    return true;
  } else {
    return false;
  }
};


export {campoRequerido,validarImagen}
