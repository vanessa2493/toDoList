
// function agregar usuarios //
const form = document.getElementById('usuarios-form');
const userfields = document.getElementById('users-field');
    

const showUsers = async () => {
    const usuarios = await getUsuarios()

    const usuariosArray = mapToArray(usuarios);

    catfields.innerHTML = '';
   
    usuariosArray.forEach((cat) =>{
            const newCat = cat.name;
                let row = document.createElement('div');
                row.classList.add('row', 'p-3');
                let col1 = document.createElement('div');
                col1.classList.add('col', 'col-9');
                let col2 = document.createElement('div');
                col2.classList.add('col', 'col-3', 'd-flex','align-items-center');
                let span = document.createElement('span');
                span.appendChild(document.createTextNode(newCat));
                span.classList.add('d-inline-block','bg-warning', 'bg-opacity-25', 'p-1', 's-tag');
                col1.appendChild(span);
                let editar = document.createElement('a');
                editar.setAttribute('href', `./editar-usuario.html?id=${cat.slug}`);
                editar.classList.add('me-2', 's-link');
                editar.appendChild(document.createTextNode('Editar'));
                col2.appendChild(editar);
                let eliminar = document.createElement('a');
                eliminar.setAttribute('href', '#');
                eliminar.setAttribute('id', `${cat.idDB}`);
                eliminar.classList.add('s-link');
                eliminar.appendChild(document.createTextNode('Eliminar'));
                col2.appendChild(eliminar);
                row.appendChild(col1);
                row.appendChild(col2);
        
                catfields.appendChild(row);            
    
                // -- Eliminar event -- //
            
            eliminar.addEventListener('click', async (e)=> {
                for (let i = 0; i < usuariosArray.length; i++){
                    if(usuariosArray[i].idDB === e.target.id){
                        await deleteUsuarios(usuariosArray[i].idDB);
                        await showUsers()
                    }
                } 
            })
        })

        
}

showUsers();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const usuario = document.getElementById('is-usuario');
    const value = usuario.value;
    const slug = string_to_slug(value);

    await postUsuario({name: value, slug: slug});

    //clean input
    usuario.value = '';

    catfields.innerHTML = '';
    await showUsers()

})