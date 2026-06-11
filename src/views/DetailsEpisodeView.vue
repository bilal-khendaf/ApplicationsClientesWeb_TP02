<template>
    <main>
        <div v-if="episode!==null">
            <div class="block">
                <h1 class="title is-3 has-text-centered">{{ episode.title }}</h1>
                <h3 class="title is-5 has-text-centered">{{ episode.seasonNumber }}
                    <span> - </span>
                    <span>{{ episode.number }}</span>
                    <span> - </span>
                    <span>{{ episode.title }}</span>
                </h3>
                <p>{{ episode.runtime }} mins</p>
                <p>{{ episode.tvParentalGuideline }}</p>
                <p class="has-text-justified">{{ episode.plot }}</p>
                <router-link v-bind:to="{ name: 'playEpisode',
                    params: { id: this.$route.params.id} }">
                    <div class="has-text-centered" style="padding-top: 50px;">
                        <img v-bind:alt="episode.title" v-bind:src="episode.imgUrl"
                             style="position: relative;"/>
                        <img alt="play" :src="image"
                             class="asset"/>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
import { svrURL } from '@/constants';
import image from '@/assets/play.png';

export default {
    name: 'detailsEpisodeView',
    data() {
        return {
            episode: null,
            image,
        };
    },
    methods: {
        async getData() {
            const response = await fetch(`${svrURL}/episode?episodeId=${this.$route.params.id}`);
            if (response.ok) this.episode = await response.json();
        },
    },
    mounted() {
        this.getData();
    },
};
</script>

<style scoped>
.asset {
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
}
</style>
