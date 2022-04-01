<template>
    <header>
        <div class="flex items-center mt-24">
            <h1 class="font-black text-6xl sm:text-7xl md:text-8xl mx-auto">
                Explore. </br>
                Extract. </br>
                Research.
            </h1>
        </div>

        <div class="relative mx-auto px-6 sm:px-8 mt-14 md:mt-20">
            <div class="flex justify-center">
                <button type="button" class="bg-black hover:bg-gray-800 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-sm leading-5 rounded font-semibold text-white drop-shadow-sm">
                    Start Exploring
                </button>
            </div>

            <p class="text-sm text-gray-500 text-center mt-7">
                Mineralogy.rocks provide seamless and simple way to access and filter mineralogical and related data. </br>
                Our platform is designed both for researchers and developers.
            </p>
        </div>

        <section class="text-center px-6 sm:px-8 mt-20 mx-auto">
            <div class="flex justify-center items-center">
                <div class="flex self-center justify-center bg-cyan-300 rounded-full h-10 w-10 md:h-14 md:w-14 mr-3">
                    <span class="mdi text-3xl md:text-5xl mdi-magnify"></span>
                </div>
                <h3 class="font-bold text-2xl md:text-4xl">Explore</h3>
            </div>
            <h2 class="font-black text-3xl sm:text-4xl md:text-6xl mx-auto mt-4">Start with exploring the data</h2>
            <p class="text-sm text-gray-500 text-center mt-7">
                The platform is developed by the researchers for the researchers. Our goal is to provide data for scientific needs in a coherent fashion. </br> 
                Start with finding the right subset of data and exploring the relations between minerals.
            </p>

            <div class="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 md:grid md:grid-cols-12 space-y-2 gap-2 sm:gap-3 md:gap-7 mt-10 md:mt-14 items-center">
                <div class="md:col-span-6 flex flex-col">
                    <h4 class="font-bold text-xl md:text-3xl">Developer?</h4>
                    <p class="text-sm text-gray-500 text-center mt-5">
                        The data is accessible via api.mineralogy.rocks through your favourite http client! Check out current state of API documentation here.
                    </p>
                </div>

                <div class="relative md:col-span-6">
                    <div class="relative overflow-hidden shadow-xl flex bg-red-50 h-32 max-h-36 sm:max-h-[none] rounded-xl lg:h-32 xl:h-34">
                        <div class="relative w-full flex flex-col">
                            <div class="flex-none border-b border-gray-500/30">
                                <div class="flex items-center bg-gray-600 h-8 space-x-1.5 px-3">
                                    <div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                                    <div class="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                                    <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div class="relative min-h-0 flex-auto flex flex-col">
                                <div class="w-full relative flex-auto flex min-h-0 overflow-auto">
                                    <div class="w-full relative flex-auto">
                                        <pre class="flex min-h-full text-sm leading-6">
                                            <div aria-hidden="true" class="block text-gray-600 flex-none py-1 pr-4 text-left select-none" style="width:50px">
                                                1
                                                2
                                                3
                                                4
                                                5
                                            </div>
                                            <!-- <code class="flex-auto relative block text-black pt-4 pb-4 px-4 overflow-auto">
                                                <span class="token tag">
                                                    <span class="token punctuation">&lt;</span>figure
                                                    <span class="token attr-name">class</span>
                                                    <span class="token attr-value">
                                                        <span class="token punctuation">=</span>
                                                        <span class="token punctuation">"</span>
                                                        <span>m</span>
                                                        <span>d</span>
                                                        <span>:</span>
                                                        <span>f</span>
                                                        <span>l</span>
                                                        <span>e</span>
                                                        <span>x</span>
                                                        <span> </span>
                                                            bg-slate-100 rounded-xl
                                                        <span> </span>
                                                        <span>p</span>
                                                        <span>-</span>
                                                        <span>8</span>
                                                        <span> </span>
                                                        <span>m</span>
                                                        <span>d</span>
                                                        <span>:</span>
                                                        <span>p</span>
                                                        <span>-</span>
                                                        <span>0</span> 
                                                            dark:bg-slate-800
                                                        <span class="token punctuation">"</span>
                                                    </span>
                                                    <span class="token punctuation">&gt;</span>
                                                </span>
                                            </code> -->
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 md:grid md:grid-cols-12 md:gap-2 mt-10 md:mt-14">
                <div class="md:col-span-6 flex flex-col">
                    <h4 class="font-bold text-xl md:text-3xl">Researcher?</h4>
                    <p class="text-sm text-gray-500 text-center mt-5">
                        Check out our filtering system at mineralogy.rocks/explore. You are able to make complex queries, combine those and explore the results.
                    </p>
                </div>

                <div class="md:col-span-6 flex flex-col">
                    <h4 class="font-bold text-xl md:text-3xl">Researcher?</h4>
                    <p class="text-sm text-gray-500 text-center mt-5">
                        Check out our filtering system at mineralogy.rocks/explore. You are able to make complex queries, combine those and explore the results.
                    </p>
                </div>
                <div class="md:col-span-6 flex flex-col"></div>
            </div>
        </section>
    </header>
</template> 

<script>
    export default {
        name: 'IndexPage',

        components: {},
    };
</script>

<style lang="scss" scoped>
    pre {
        white-space: pre;
    }

</style>
