
// function agregar categorias //

addEventListener('submit', (e) => {
    e.preventDefault();
    const categoria = document.getElementById('is-categoria');
    
    fetch('https://todolist-ae19c-default-rtdb.firebaseio.com/categorias.json', {
        method: 'POST',
        body: JSON.stringify(categoria.value)
    }).then(res => {
        console.log(res);
        return res.json();
    }
    ).then(data => {
        console.log(data);
    }
    ).catch(err => {
        console.log(err);
    }
    ); 
    //clean input
    categoria.value = '';

})

    

