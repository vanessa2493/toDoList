
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get('id');
const form = document.getElementById('editar-categorias-form');
const input = document.getElementById('edit-categoria');


const findCategory = async () => {
    const categorias = await getCategorias()
    const categoriasArray = mapToArray(categorias);
    const data = categoriasArray.find(cat => cat.slug === selectedCategory);
    input.value = data.name;
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();
        const payload = {...data, name: e.target.querySelector('#edit-categoria').value, slug: string_to_slug(e.target.querySelector('#edit-categoria').value)};
        console.log(data.idDB);
        await patchCategorias(data.idDB, payload);
    })
}

findCategory()
