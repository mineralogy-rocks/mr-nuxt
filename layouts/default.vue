<template>
    <div class="bg-white min-h-full flex flex-col">
        <toolbar></toolbar>
        <nuxt></nuxt>
        <footer></footer>
    </div>
</template>

<script>
    import Toolbar from 'Components/layout/toolbar';
    import Footer from 'Components/layout/footer';

    export default {
        name: 'DefaultLayout',

        components: {
            Toolbar,
            Footer,
        },
    };
</script>

<style lang="scss" scoped></style>
