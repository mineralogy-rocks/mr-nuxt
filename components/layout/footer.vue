<template>
    <footer>
        <div class="bg-black min-h-4 bottom-0 z-20 w-full shadow-xl mt-20 mx-auto">
            <div class="py-2 mx-4 lg:mx-2">
                <!-- <nav class="flex items-center justify-around text-sm sm:text-lg md:text-xl">
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
                </nav> -->
                <div class="flex flex-row justify-center text-white text-xs font-bold">
                    <div class="bg-white mr-1 text-center self-center">
                        <span class="text-black">M</span>
                    </div>
                    <span>Copyright of mineralogy.rocks (2022). All rights reserved.</span>
                </div>
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
