<template >
    <div class="d-flex justify-content-between align-items-center pb-4">
        <h4 class="float-left">Categorias</h4>
        <button class="btn btn-outline-success btn-sm ">Nova Categoria</button>
    </div>
    <div class="pb-2" v-for="cat in categorias" :key="cat.id">
        <CategoriaItem>
            <template #categoriaNome>
                {{cat.nome}}
            </template>

        </CategoriaItem>
    </div>

</template>
<script>
import { onMounted, ref } from 'vue';
import CategoriaItem from '../components/CategoriaItem.vue';
import api from '../services/api';
export default {
    setup() {

        const categorias = ref([]);

        const fetchCategorias = () =>
            api
                .get("/categorias")
                .then((response) => (categorias.value = response.data));

        onMounted(fetchCategorias);
        return { categorias }
    },
    components: { CategoriaItem }
}
</script>
<style >

</style>