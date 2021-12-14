<<<<<<< HEAD
const campoRequerido = (dato) => {
    if (dato.trim().length > 0)
        return true;
    else
        return false;
}

const validarCorreo = (dato) => {
    let patron = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (patron.test(dato)){
        return true;
    }else{
        return false;
    }
}

export {campoRequerido, validarCorreo}
=======
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
>>>>>>> 3f346a6c126c6a7a95d937e728352de733952899
