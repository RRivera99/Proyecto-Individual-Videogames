const validate = (state, name, errors, setErrors) => {
    if(name ==='name'){
        if(state.name === "") setErrors({...errors, name: 'El nombre es requerido'})
        else if (state.name.length >=30) setErrors({...errors, name: 'El nombre es demasiado largo'})
        else if (state.name.length < 3) setErrors({...errors, name:'El nombre debe tener al menos 3 caracteres'})
        else setErrors({...errors, name:""})
    }
    if(name ==='description'){
        if (state.description === ''){
            setErrors({...errors, description: 'Debe ingresar una descripción del videojuego'})}
        else if(state.description.length >240) setErrors({...errors, description: 'La descripción no puede tener más de 240 caracteres'})
        else if(state.description.length <10) setErrors({...errors, description: 'La descripción debe tener al menos 10 caracteres'})
        else setErrors({...errors, description: ""})
        
        
    }
    if(name ==='rating'){
        if (state.rating === ''){
            setErrors({...errors, rating: 'Debe ingresar el rating'})
        } else if (state.rating >5){
            setErrors({...errors, rating: 'El rating no puede ser mayor a 5.00'})
        } else if(isNaN(Number(state.rating))) {setErrors({...errors, rating: 'Debe ser un número'})}
        else if (/^[0-9]$|^[0-9]\.$|^[0-9]\.[0-9]$/.test(state.rating)) {
            setErrors({ ...errors, rating: 'El rating debe estar expresado con dos decimales' })}
        else setErrors({...errors, rating:""})
        
        
    }
    if(name ==='released'){
        if (state.released === ''){
            setErrors({...errors, released: 'Debe ingresar la fecha de lanzamiento'})}
        else if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(state.released)) {
            setErrors({ ...errors, released: 'La fecha de lanzamiento debe estar expresada como AAAA-MM-DD' });
        } else setErrors({...errors, released: ""})
        
    }
    if(name ==='image'){
        if (state.image === "") setErrors({...errors, image: 'Este campo no puede estar vacío'})
        else setErrors({...errors, image: ""})
        
    }
    if(name ==='genres'){
        if (state.genres === "") setErrors({...errors, genres: 'Debe seleccionar al menos un género'})
        else setErrors({...errors, genres: ""})
        
    }
    if(name ==='platforms'){
        if (state.platforms === "") setErrors({...errors, platforms: 'Debe ingresar al menos una plataforma'})
        else setErrors({...errors, platforms: ""})
        
    }
    
}
export default validate