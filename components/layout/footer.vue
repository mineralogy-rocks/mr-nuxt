<template>
    <footer class="bg-black min-h-4 z-20 w-full shadow-xl py-6 mx-auto">
        <div class="max-w-7xl mx-auto divide-y divide-gray-600 px-10 sm:px-16 md:px-18">
            <div class="flex flex-col sm:flex-row text-white text-xs sm:text-sm gap-y-6 py-6">
                <div class="flex-none justify-center w-full sm:w-1/3 space-y-10 sm:space-y-8 lg:flex lg:space-y-0 px-2">
                    <div class="lg:flex-none">
                        <h2 class="font-semibold underline text-slate-900 dark:text-slate-100">Links</h2>
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

                <div class="flex-none justify-center w-full sm:w-1/3 space-y-10 sm:space-y-8 lg:flex lg:space-y-0 px-2">
                    <div class="lg:flex-none">
                        <h2 class="font-semibold underline text-slate-900 dark:text-slate-100">Contribute</h2>
                        <ul class="mt-3 space-y-2">
                            <li>
                                <a class="underline-animation" href="https://uniba.sk/en/" target="_blank">Research</a>
                            </li>
                            <li>
                                <a class="underline-animation" href="https://marie-sklodowska-curie-actions.ec.europa.eu/" target="_blank">Donate data</a>
                            </li>
                            <li>
                                <a href='https://ko-fi.com/I2I43R998' target='_blank' class="flex items-center">
                                    <span class="underline-animation mr-2">Buy us a Coffee</span><img src="/img/kofilogo_bluebg.png" alt="Buy us a coffee at ko-fi.com" class="w-8 h-auto" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="flex-none justify-center w-full sm:w-1/3 space-y-10 sm:space-y-8 lg:flex lg:space-y-0 px-2">
                    <div class="lg:flex-none">
                        <h2 class="font-semibold underline text-slate-900 dark:text-slate-100">Legal</h2>
                        <ul class="mt-3 space-y-2">
                            <li>
                                <a class="underline-animation" href="https://uniba.sk/en/" target="_blank">Privacy Policy</a>
                            </li>
                            <li>
                                <a class="underline-animation" href="https://marie-sklodowska-curie-actions.ec.europa.eu/" target="_blank">Terms of Service</a>
                            </li>
                            <li>
                                <a class="underline-animation" href="https://fns.uniba.sk/en/" target="_blank">Infrastructure</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center text-white text-xs font-bold mt-5 pt-2">
                <div class="bg-white mr-1 text-center self-center">
                    <span class="text-black">M</span>
                </div>
                <span class="text-center">Copyright of mineralogy.rocks (2022). All rights reserved.</span>
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
