<template>
    <header>
        <div class="px-3 py-2 ">
            <div class="container">
                <div class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/"
                        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src="../assets/logo.svg" alt="LogoVue" width="32" height="32">
                        <span class="fs-4">Vue<strong>Produtos</strong></span>
                    </a>
                    <div class="d-flex justify-content-between ">
                        <ul class="nav" v-for="rota in rotas" :key="rota.id">
                            <router-link class="nav-link" class-active="active" :to="rota.redirect">{{rota.name}}
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    setup() {
        const rotas = [
            { id: 1, name: "Home", redirect: "/" },
            { id: 2, name: "Categorias", redirect: "/categorias" },
            { id: 3, name: "Produtos", redirect: "/produtos" },
            { id: 4, name: "Login", redirect: "/login" },
        ];
        return {
            rotas,
        };
    },
}
</script>
<style>
.nav {
  display: flex;
  height: 35px;
}

.nav-link {
  color: rgb(17, 10, 10);
}

.router-link-active {
  color: #41b883;
}
</style>