<template>
        <div class="list-group w-auto">
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <div class="bg-success" style="width: 32px; height: 32px;border-radius: 50%; ">
                    <i class="bi bi-tag tag-list"></i>
                </div>

                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mt-1">
                            <slot name="categoriaNome"></slot>
                        </h6>
                    </div>
                    <small class="opacity-30 text-nowrap"><i class="icon-acoes bi bi-trash-fill"></i></small>
                </div>
            </a>
        </div>
</template>
<style>
.tag-list {
    font-size: 22px;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

}

.icon-acoes {
    font-size: 15px;
}

.icon-acoes:hover {
    color: #ff0000;
}
</style>