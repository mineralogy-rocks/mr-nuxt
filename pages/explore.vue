<template>
    <div class="mt-10 p-2 border-t border-b border-line">
        <div class="max-w-screen-lg mx-auto">
            <text-input :id="'search'"
                        ref="searchForm"
                        v-model="query"
                        :placeholder="'Start typing to search...'"
                        :icon="'mdi-magnify'"
                        class="w-full"
                        @input="search($event)">
            </text-input>
        </div>

        <div class="flex flex-1 justify-center py-4">
            <p class="text-gray-500 font-light">
                <span class="font-bold">{{ mineralsPagination.count }}</span> entries satisfying the query.
            </p>
        </div>

        <div class="max-w-screen-md mx-auto space-y-2">
            <mineral v-for="(mineral, index) of minerals" :key="index" :mineral="mineral"></mineral>
        </div>
    </div>
</template>


<script>
    import justDebounce from 'just-debounce-it';

    import TextInput from 'Components/form/TextInput';
    import mineral from 'Components/content/mineral';


    export default {
        name: 'ExplorePage',

        components: {
            TextInput,
            mineral,
        },

        asyncData({ store, route }) {
            const queryParams = route.query;
            console.log(queryParams);
            store.dispatch('explore/getMinerals', queryParams);
        },

        data() {
            return {
                query: this.$route.query.q || '',
            }
        },

        head() {
            return {
                title: 'Explore',
            };
        },

        computed: {
            minerals() {
                return this.$store.state.explore.minerals;
            },

            mineralsPagination() {
                return {
                    limit: this.$store.state.explore.limit,
                    offset: this.$store.state.explore.offset,
                    count: this.$store.state.explore.count,
                }
            },
        },

        methods: {
            search: justDebounce(function (query) {
        		if (query.length > 0 && query.length < 3) return;
        		this.updateQueryParams({ q: query });
			}, 400),

            updateQueryParams (params) {

                this.$refs.searchForm.loading = true;

                if (!params.hasOwnProperty('offset')) {
                    this.$store.commit('explore/setOffset', 0);
                }
				if (!params.hasOwnProperty('limit')) {
                    this.$store.commit('explore/setLimit', 10);
                }
        		let initialParams = params.hasOwnProperty('q') ||
									params.hasOwnProperty('offset') ||
									params.hasOwnProperty('limit') ?
									this.$route.query : { q: this.query, offset: this.mineralsPagination.offset, limit: this.mineralsPagination.limit };
        		let queryParams = { ...Object.assign({}, initialParams, params) };
        		if (queryParams.hasOwnProperty('q') && (queryParams.q === null || queryParams.q.length < 3)) {
        			delete queryParams.q;
				}
				this.$router.push({ query: queryParams });

                this.$store.dispatch('explore/getMinerals', queryParams)
                    .then(() => {})
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        this.$refs.searchForm.loading = false;
                    });
			},
        },
    }
</script>


<style lang="scss" scoped>
</style>
