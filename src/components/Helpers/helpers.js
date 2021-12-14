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