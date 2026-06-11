<template>
    <div class="column is-4-desktop is-4-tablet is-12-mobile">
        <router-link v-bind:to="{name:'episodedetails',params:{id:e.episodeId}}">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-16by9">
                        <img v-bind:src="e.imgUrl" v-bind:alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content has-text-centered">
                        <router-link v-bind:to="{name:'detail',params:{id:e.tvshowId}}">
                            <p class="title is-4 mb-0">{{ e.tvshowTitle }}</p>
                        </router-link>
                        <router-link v-bind:to="{name:'episode',params:{id:e.seasonId}}">
                            <p class="title is-4 mb-0">Season {{ e.seasonNumber }}</p>
                        </router-link>
                        <router-link v-bind:to="{name:'episodedetails',params:{id:e.episodeId}}">
                            <p class="is-6">{{ e.episodeTitle }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </router-link>
    </div>

</template>

<script>
export default {
    name: 'EpisodeHistoryComponent',
    props: {
        e: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
a{
    padding-bottom: 5em;
}
</style>
