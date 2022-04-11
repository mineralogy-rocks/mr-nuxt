<template>
    <footer class="bg-black min-h-4 bottom-0 z-20 w-full shadow-xl mt-20 mx-auto">
        <div class="max-w-7xl mx-auto divide-y divide-gray-600 px-10 sm:px-16 md:px-18 py-2">
            <div class="flex text-white text-sm">
                <div class="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
                    <div class="lg:flex-none lg:w-1/2">
                        <h2 class="font-semibold text-slate-900 dark:text-slate-100">Links</h2>
                        <ul class="mt-3 space-y-2">
                            <li>
                                <a class="underline-animation" href="https://uniba.sk/en/" target="_blank">Comenius University</a>
                            </li>
                            <li>
                                <a class="underline-animation" href="https://marie-sklodowska-curie-actions.ec.europa.eu/" target="_blank">Marie Skłodowska-Curie Actions</a>
                            </li>
                            <li>
                                <a class="underline-animation" href="https://fns.uniba.sk/en/" target="_blank">Faculty of Natural Sciences</a>
                            </li>
                            <li>
                                <a class="underline-animation" href="https://kmplg.sk/?lang=en" target="_blank">KMPLG</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center text-white text-xs font-bold mt-5 pt-2">
                <div class="bg-white mr-1 text-center self-center">
                    <span class="text-black">M</span>
                </div>
                <span>Copyright of mineralogy.rocks (2022). All rights reserved.</span>
            </div>
        </div>
    </footer>
</template>


<script>
    export default {
        name: 'Footer',
    };
</script>


<style lang="scss" scoped>
    .underline-animation {
        @apply relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300;
    }
</style>
