const postUsuario = async (data) => {
        await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios.json', {
            method: 'POST',
            headers: { "Content-Type": "application/json", }, 
            body: JSON.stringify(data)
        })

}

const getUsuarios = async () => {
    const get = await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios.json');
    const data = await get.json();
    return data
}

const deleteUsuarios = async (data)=> {
    await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${data}.json`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json", }, 
        })
}

const patchUsuarios = async (category, data)=> {
    await fetch(`https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${category}.json`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json", }, 
            body: JSON.stringify(data)
        })
}