<template >
    <div class="card text-center bg-dark mt-4" style="max-width: 20rem; background-color: beige !important;">
        <div class="form-signin w-100 m-auto">
            <form>
                <img class="mb-2 mt-2" src="../assets/logo.svg" alt="" width="72" height="57">

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput" class="text-dark">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword" class="text-dark">Password</label>
                </div>
                <button class="w-100 btn btn-md btn-vue" type="submit">Entrar</button>
                <p class="mt-5 mb-3 text-muted"></p>
            </form>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style >
.btn-vue {
    background-color: #00bd7e;
    color: #fff;
    font-weight: 500;
}
.btn-vue:hover {
    background-color: #1ea578 !important;
    color: #fff !important;
}

.form-signin {
    max-width: 330px;
    padding: 15px;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>