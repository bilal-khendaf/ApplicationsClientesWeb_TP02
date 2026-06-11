<template>
    <div class="column is-3-desktop is-4-tablet is-12-mobile">
        <router-link v-bind:to="{name:'detail',params:{id:tvshow.tvshowId}}">
            <div class="has-text-black">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-2by3">
                            <img v-bind:src="tvshow.imgUrl" v-bind:alt="tvshow.title">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title is-3" style="color: black; min-height: 72px;">
                                    {{ tvshow.title }}
                                </p>
                                <div class="mb-0">
                                    <span class="has-text-weight-bold">Studio: </span>
                                    <span>{{ tvshow.studio.name }}</span>
                                </div>
                                <div class="mb-0">
                                    <span class="has-text-weight-bold">Genres: </span>
                                    <span>{{
                                            tvshow.genres.map((genre) => genre.name)
                                                .join(', ')
                                        }}
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'TVShowComponent',
    props: {
        tvshow: Object,
    },
};
</script>

<style scoped>

</style>
