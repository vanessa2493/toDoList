
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get('id');
const form = document.getElementById('editar-usuarios-form');
const input = document.getElementById('edit-usuario');


const findCategory = async () => {
    const usuarios = await getUsuarios()
    const usuariosArray = mapToArray(usuarios);
    const data = usuariosArray.find(cat => cat.slug === selectedCategory);
    input.value = data.name;
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();
        const payload = {...data, name: e.target.querySelector('#edit-usuario').value, slug: string_to_slug(e.target.querySelector('#edit-usuario').value)};
        console.log(data.idDB);
        await patchUsuarios(data.idDB, payload);
    })
}

findCategory()