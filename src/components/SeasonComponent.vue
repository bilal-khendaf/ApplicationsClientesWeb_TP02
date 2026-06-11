<template>
    <div class="column is-3">
        <router-link v-bind:to="{name:'episode',params:{id:s.seasonId}}">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by4">
                        <img v-bind:src="s.imgUrl"
                             v-bind:alt="s.number" class="image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content has-text-centered">
                        <p class="title is-4 has-text-weight-bold">{{ 'Season ' + s.number }}</p>
                        <p class="subtitle is-6">{{ s.episodeCount }} episodes</p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SeasonComponent',
    props: {
        s: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>
