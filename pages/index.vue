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
                <div class="flex self-center justify-center bg-teal-300 rounded-full h-10 w-10 md:h-14 md:w-14 mr-3">
                    <span class="mdi text-3xl md:text-5xl mdi-magnify"></span>
                </div>
                <h3 class="font-bold text-2xl md:text-4xl">Explore</h3>
            </div>
            <h2 class="font-black text-3xl sm:text-4xl md:text-6xl mx-auto mt-4">Start with exploring the data</h2>
            <p class="text-sm px-4 md:px-6 text-gray-500 text-center mt-7">
                The platform is developed by the researchers for the researchers. Our goal is to provide data for scientific needs in a coherent fashion. </br> 
                Start with finding the right subset of data and exploring the relations between minerals.
            </p>

            <div class="max-w-5xl mx-auto px-4 md:px-6 md:grid md:grid-cols-12 space-y-6 md:space-y-2 gap-2 sm:gap-3 md:gap-7 mt-10 md:mt-14 items-center">
                <div class="md:col-span-6 flex flex-col">
                    <h4 class="font-bold text-xl md:text-3xl">Developer?</h4>
                    <p class="text-sm text-gray-500 text-justify mt-5">
                        The data is accessible via api.mineralogy.rocks through your favourite http client! Check out current state of API documentation here.
                    </p>
                </div>

                <div class="relative md:col-span-6">
                    <div class="relative overflow-hidden shadow-xl flex bg-red-50 h-38 max-h-40 sm:max-h-[none] rounded-xl">
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
                                        <pre class="text-sm text-left leading-6 font-bold text-gray-900 flex ligatures-none overflow-auto"><code class="flex-none min-w-full p-5"><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto"><span class="text-indigo-700">curl</span> -X GET \
         -H "Content-type: application/json" \
         -H "Accept: application/json" \
         -d "offset=10" \
         -d "ordering=status_id" \ 
         "https://api.mineralogy.rocks/v1/status"</span></span></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="max-w-5xl mx-auto px-4 md:px-6 md:grid md:grid-cols-12 space-y-6 md:space-y-2 gap-2 sm:gap-3 md:gap-7 mt-10 md:mt-14 items-center">
                <div class="md:col-span-6 flex flex-col">
                    <h4 class="font-bold text-xl md:text-3xl">Researcher?</h4>
                    <p class="text-sm text-gray-500 text-justify mt-5">
                        Check out our filtering system at mineralogy.rocks/explore. You are able to make complex queries, combine those and explore the results.
                    </p>
                </div>

                <div class="md:col-span-6 flex flex-col">
                    <div class="text-left text-sm text-gray-500">
                        <div class="flex items-center">
                            <span class="mdi text-black text-base sm:text-lg md:text-xl mdi-clock-outline mr-2"></span>
                            <p>Discovery year between 1999 and 2001</p>
                            <span class="mdi text-black text-base sm:text-lg md:text-xl mdi-arrow-right-thin mx-2"></span>
                            </p>1,401 minerals</p>
                        </div>
                        <div class="flex items-center">
                            <span class="mdi text-black text-base sm:text-lg md:text-xl mdi-map-marker-check mr-2"></span>
                            <p>Discovery country in EU</p>
                            <span class="mdi text-black text-base sm:text-lg md:text-xl mdi-arrow-right-thin mx-2"></span>
                            </p>198 minerals</p>
                        </div>
                        <div class="flex items-center">
                            <span class="mdi text-black text-base sm:text-lg md:text-xl mdi-atom mr-2"></span>
                            <p>Mineral formula contains As<sup>5+</sup></p>
                        </div>
                        <span class="mdi text-black text-base sm:text-lg md:text-xl mdi-arrow-down-thin mr-2"></span>
                        <div class="flex items-center">
                            <span class="mdi text-black text-base sm:text-lg md:text-xl mdi-check-circle mr-2"></span>
                            <p>Vicanite-(Ce)</p>
                        </div>
                    </div>
                </div>
                <div class="md:col-span-6 flex flex-col"></div>
            </div>
        </section>

        <section class="text-center px-6 sm:px-8 mt-20 mx-auto">
            <div class="flex justify-center items-center">
                <div class="flex self-center justify-center bg-pink-200 rounded-full h-10 w-10 md:h-14 md:w-14 mr-3">
                    <span class="mdi text-3xl md:text-5xl mdi-cloud-download"></span>
                </div>
                <h3 class="font-bold text-2xl md:text-4xl">Extract</h3>
            </div>
            <h2 class="font-black text-3xl sm:text-4xl md:text-6xl mx-auto mt-4">Download the data</h2>
            <p class="text-sm px-4 md:px-6 text-gray-500 text-center mt-7">
                The platform makes the data extraction easy and simple. No matter what data you need - 
                you can savely extract it to your local machine.
            </p>

            <div class="max-w-5xl mx-auto px-4 md:px-6 md:grid md:grid-cols-12 space-y-6 md:space-y-2 gap-2 sm:gap-3 md:gap-7 mt-10 md:mt-14 items-center">

                <div class="relative md:col-span-6">
                    <div class="relative overflow-hidden shadow-xl flex bg-red-50 h-38 max-h-40 sm:max-h-[none] rounded-xl">
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
                                        <pre class="text-sm text-left leading-6 font-bold text-gray-900 flex ligatures-none overflow-auto"><code class="flex-none min-w-full p-5"><span class="flex"><svg viewBox="0 -9 3 24" aria-hidden="true" class="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="flex-auto"><span class="text-indigo-700">query params</span> = {
        <span class="text-pink-600">color</span>: "blue",
        <span class="text-pink-600">cations__in</span>: ["Cu2+"],
        <span class="text-pink-600">anions__in</span>: ["OH-", "O2-"],
        <span class="text-pink-600">discovery_year_max</span>: 1998,
        ...
    }</span></span></code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-6 flex flex-col space-y-2 md:space-y-4">
                    <div>
                        <div class="flex justify-center items-center">
                            <h4 class="font-bold text-xl md:text-3xl justify-center">Fetch data flexibly<span class="mdi text-2xl md:text-3xl mdi-code-tags ml-2"></span></h4>
                        </div>
                        <p class="text-sm text-gray-500 text-justify mt-5">
                            Export the data in a preferred format or connect your application directly to API. 
                            Mineralogy.rocks is updating its data services in order to meet the evolving demands of research community, please contact us in case of specific data format/output needs.
                        </p>

                    </div>
                    <div>
                        <div class="flex justify-center">
                            <h4 class="font-bold text-xl md:text-3xl">Share the query<span class="mdi text-2xl md:text-3xl mdi-check-circle-outline ml-2"></span></h4>
                        </div>
                        <p class="text-sm text-gray-500 text-justify mt-5">
                            All filtering systems are connected to the query params of the URL string - you’ll never loose your results once you obtained them.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="text-center px-6 sm:px-8 mt-20 mx-auto">
            <div class="flex justify-center items-center">
                <div class="flex self-center justify-center bg-yellow-300 rounded-full h-10 w-10 md:h-14 md:w-14 mr-3">
                    <span class="mdi text-3xl md:text-5xl mdi-cloud-download"></span>
                </div>
                <h3 class="font-bold text-2xl md:text-4xl">Research</h3>
            </div>
            <h2 class="font-black text-3xl sm:text-4xl md:text-6xl mx-auto mt-4">Do research with us</h2>
            <p class="text-sm px-4 md:px-6 text-gray-500 text-center mt-7">
                We will gladly assist you in finding the right data in a right format.
                We believe in open science and open source - things that make our lives better.  
            </p>

            <div class="max-w-5xl mx-auto px-4 md:px-6 md:grid md:grid-cols-12 space-y-6 md:space-y-2 gap-2 sm:gap-3 md:gap-7 mt-10 md:mt-14 items-center">
                <div class="relative md:col-span-6">
                    <div class="flex justify-center items-center">
                        <h4 class="font-bold text-xl md:text-3xl justify-center">Contribute<span class="mdi text-2xl md:text-3xl mdi-github ml-2"></span></h4>
                    </div>
                    <p class="text-sm text-gray-500 text-justify mt-5">
                        Join our computing organization mineralogy-rocks and start contributing as a member. We will guide you in setting up the environment and 
                        provide help at every step of development process.
                    </p>
                </div>
                <div class="md:col-span-6">
                    <div class="flex justify-center items-center">
                        <h4 class="font-bold text-xl md:text-3xl justify-center">Core team<span class="mdi text-2xl md:text-3xl mdi-account-group ml-2"></span></h4>
                    </div>
                    <p class="text-sm text-gray-500 text-justify mt-5">
                        The core team consists of world class researchers in the area of mineralogy, geochemistry, petrology and geology from Comenius University (Slovakia), 
                        University of Bern (Switzerland) and University of Oulu (Finland).
                    </p>
                </div>
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
