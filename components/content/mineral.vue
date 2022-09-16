<template>
    <div class="h-48 bg-white hover:bg-white-hover rounded-sm shadow p-1 sm:p-2 border border-l-4 border-l-green-700">
        <div class="w-full h-full">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-sm md:text-base italic">{{ get(mineral, "ima_symbol", "Brl") }}</h2>
                </div>
                <div class="flex flex-row space-x-1 md:space-x-2">
                    <div v-if="mineral.ns_index" class="bg-green-100 rounded-full px-3 md:px-4 py-0.5 md:py-1 flex items-center">
                        <span class="text-xs font-medium text-green-800">{{ mineral.ns_index }}</span>
                    </div>
                    <div v-if="statusExists(mineral.statuses, 12)">
                        <span class="mdi mdi-diamond-stone text-xs sm:text-sm md:text-base font-medium text-black"></span>
                    </div>
                </div>
            </div>

            <div class="mt-1 px-4 grid grid-cols-8 gap-1">
                <div class="flex flex-col col-start-1 col-end-3 border-r border-r-gray-200 px-2 break-words">
                    <div class="ml-2">
                        <h1 class="text-sm sm:text-base md:text-lg font-bold">{{ mineral.name }}</h1>
                        <h1 class="text-xs sm:text-sm font-regular" v-html=" mineral.formula"></h1>
                    </div>
                    <p class="mt-2 text-gray-500 font-light text-xs md:text-sm text-justify truncate">{{ mineral.description }}</p>
                </div>
                <div class="col-start-3 col-end-9">
                    <div class="grid grid-cols-3 grid-rows-2 gap-1 h-full w-full">
                        <div class="flex flex-col">
                            <span class="font-semibold text-sm">Crystal Systems</span>
                            <span>{{ mineral.crystal_systems }}</span>
                        </div>
                        <div class="flex flex-col"></div>
                        <div class="flex flex-col"></div>
                        <div class="flex flex-col"></div>
                        <div class="flex flex-col"></div>
                        <div class="flex flex-col"></div>
                    </div>
                </div>
            </div>

            <div class="flex justify-between"></div>
        </div>
    </div>
</template>


<script>
    import get from 'just-safe-get';


    export default {
        name: 'mineral',

        props: {
            mineral: {
                type: Object,
                required: true,
            }
        },

        methods: {
            get: get,

            statusExists(statuses, statusId) {
                const exists = statuses.find(status_ => Math.floor(status_.id) === statusId);
                if (exists) return true;
                return false;
            }
        },
    }
</script>


<style lang="scss" scoped>
</style>
