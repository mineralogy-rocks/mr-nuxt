<template>
    <header class="bg-black sticky min-h-3 top-0 w-full shadow-xl">
        <div class="mx-auto">
            <div class="py-2 mx-4 lg:mx-2">
                <nav class="relative flex items-center justify-around text-sm sm:text-lg md:text-xl">
                    <ul class="flex text-white font-semibold">
                        <n-link class="underline-animation" :to="'/'">
                            <div class="flex flex-row">
                                <div class="bg-white mr-0.5 text-center self-center">
                                    <span class="text-black">M</span>
                                </div>
                                <span>ineralogy.rocks</span>
                            </div>
                        </n-link>
                    </ul>
                    <ul class="flex text-white font-semibold mr-4 space-x-2 sm:space-x-6 md:space-x-10">
                        <n-link class="underline-animation" :to="'/explore'">Explore</n-link>
                        <n-link class="underline-animation" :to="'/about'">About</n-link>
                        <n-link class="underline-animation" :to="'/contact'">Contact us</n-link>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Toolbar',
    };
</script>

<style lang="scss" scoped>
    .underline-animation {
        @apply relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300;
    }
</style>
