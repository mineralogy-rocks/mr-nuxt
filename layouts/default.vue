<template>
    <div class="bg-white min-h-full flex flex-col">
        <toolbar></toolbar>
        <nuxt></nuxt>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Toolbar from 'Components/layout/toolbar';
    import FooterComponent from 'Components/layout/footer';

    export default {
        name: 'DefaultLayout',

        components: {
            Toolbar,
            FooterComponent,
        },
    };
</script>

<style lang="scss" scoped></style>
