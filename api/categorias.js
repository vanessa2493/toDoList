const postCategoria = async (data) => {
        await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/categorias.json', {
            method: 'POST',
            headers: { "Content-Type": "application/json", }, 
            body: JSON.stringify(data)
        })

}

const getCategorias = async () => {
    const get = await fetch('https://todolist-f94ed-default-rtdb.firebaseio.com/categorias.json');
    const data = await get.json();
    return data
}

