<template>
    <div class="column is-3-desktop is-4-tablet is-12-mobile">
        <router-link :to="{ name: 'detail', params: { id: tvshow.tvshowId } }">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-2by3">
                        <img :src="tvshow.imgUrl" :alt="tvshow.title">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media mb-3">
                        <div class="media-content">
                            <p class="title is-5 has-text-weight-bold mb-1">{{ tvshow.title }}</p>
                            <p class="subtitle is-7 has-text-grey">
                                <span class="icon is-small mr-1"><i class="fas fa-building"></i></span>
                                {{ tvshow.studio.name }}
                            </p>
                        </div>
                    </div>
                    <div class="tags">
                        <span v-for="genre in tvshow.genres" :key="genre.genreId" 
                              class="tag is-info is-light is-rounded">
                            {{ genre.name }}
                        </span>
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
        tvshow: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.card {
    border-radius: 12px;
}
.title {
    min-height: 3rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
