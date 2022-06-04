
// function agregar categorias //
const form = document.getElementById('categorias-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const categoria = document.getElementById('is-categoria');
    const value = categoria.value;
    const slug = string_to_slug(value);

    postCategoria({name: value, slug: slug});

    //clean input
    categoria.value = '';

})

    

const showCategories = async () => {
    const categorias = await getCategorias()

    const categoriasArray = mapToArray(categorias);
    const card = document.getElementById('categorias-card');
   
    categoriasArray.forEach((cat) =>{
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
                editar.setAttribute('href', `./editar-categoria.html?${cat.slug}`);
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
        
                card.appendChild(row);            
    
    
                // -- Eliminar event -- //
            
            // eliminar.addEventListener('click', (e)=> {
            //     for (let i = 0; i < categoriasArray.length; i++){
            //         if(categoriasArray[i].idDB === e.target.idDB){
            //             categoriasArray.splice(categoriasArray[i], 1);
            //         }
            //     } // hasta acá llegué pero no estoy segura si habría que hacer un patch o put o algo así a la base de datos para modificarla así que por ahora es lo que hay pero va queriendooo
            //     localStorage.setItem('ahorradas-data', JSON.stringify({
            //         ...lS,
            //         categories: categs
            //     }))
            //     catFields.innerHTML = "";
    
            //     showCategories()
                
    
            // })
        })

        
}
showCategories()