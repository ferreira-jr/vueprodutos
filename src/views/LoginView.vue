<template >
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
                <button class="w-100 btn btn-md btn-outline-success" type="submit">Entrar</button>
                <p class="mt-5 mb-3 text-muted"></p>
            </form>
        </div>
</template>
<script>
export default {

}
</script>
<style >
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