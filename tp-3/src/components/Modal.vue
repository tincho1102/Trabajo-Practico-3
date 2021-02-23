<template>
    <div class="overlay">
        <div class="modal-content">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="body">
                <slot name="body"></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .overlay {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);
    }
    .modal-content {
        width: 50%;
        background-color: white;
    }
</style>