<template>
    <div class="bg-white min-h-full flex flex-col">
        <toolbar></toolbar>
        <nuxt></nuxt>
    </div>
</template>

<script>
    import Toolbar from 'Components/layout/toolbar';

    export default {
        name: 'DefaultLayout',

        components: {
            Toolbar,
        },
    };
</script>

<style lang="scss" scoped></style>
