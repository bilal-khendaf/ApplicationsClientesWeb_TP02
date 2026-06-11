<template>
    <div v-if="tvShowData !== null" class="container">
        <section class="section">
            <div class="columns is-variable is-8">
                <div class="column is-4">
                    <div class="card" style="border-radius: 20px; overflow: hidden;">
                        <img :src="tvShowData.imgUrl" :alt="tvShowData.title" style="width: 100%; display: block;">
                    </div>
                </div>
                <div class="column is-8">
                    <div class="block">
                        <h1 class="title is-1 has-text-weight-bold mb-2">{{ tvShowData.title }}</h1>
                        <div class="tags are-medium mb-5">
                            <span v-for="genre in tvShowData.genres" :key="genre.genreId" class="tag is-primary is-light is-rounded">
                                {{ genre.name }}
                            </span>
                            <span class="tag is-white has-text-grey has-text-weight-semibold">
                                <span class="icon mr-1"><i class="fas fa-video"></i></span>
                                {{ tvShowData.episodeCount }} épisodes
                            </span>
                            <span class="tag is-white has-text-grey has-text-weight-semibold">
                                <span class="icon mr-1"><i class="fas fa-building"></i></span>
                                {{ tvShowData.studio.name }}
                            </span>
                        </div>
                        <p class="subtitle is-5 has-text-justified is-family-secondary" style="line-height: 1.8;">
                            {{ tvShowData.plot }}
                        </p>
                    </div>

                    <div class="mt-6">
                        <h3 class="title is-4 mb-4">Saisons</h3>
                        <div class="scrolling-wrapper-flexbox">
                            <season-component v-for="s in tvShowData.seasons" :key="s.seasonId" :s="s" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <h3 class="title is-4 mb-4">Distribution</h3>
                <div class="scrolling-wrapper-flexbox">
                    <role-component v-for="r in tvShowData.roles" :key="r.roleId" :r="r" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { svrURL } from '@/constants';
import RoleComponent from '@/components/RoleComponent.vue';
import SeasonComponent from '@/components/SeasonComponent.vue';

export default {
    name: 'DetailsView',
    components: {
        SeasonComponent,
        RoleComponent,
    },
    data() {
        return {
            tvShowData: null,
        };
    },
    methods: {
        async getData() {
            const response = await fetch(`${svrURL}/tvshow/?tvshowId=${this.$route.params.id}`);
            if (response.ok) this.tvShowData = await response.json();
        },
    },
    mounted() {
        this.getData();
    },
};
</script>

<style scoped>
.scrolling-wrapper-flexbox {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 1rem;
}
</style>
