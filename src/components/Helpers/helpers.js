const campoRequerido = (input) => {
  if (input.trim().length > 4) {
    return true;
  } else {
    return false;
  }
};

const validarImagen = (input) => {
  let url = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/

  if (input.value.trim().length > 0 && url.test(input.value.trim())) {
    return true;
  } else {
    return false;
  }
};


export {campoRequerido,validarImagen}
