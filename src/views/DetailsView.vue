<template>
    <div v-if="tvShowData!==null">
        <main>
            <div class="columns">
                <div class="column is-5">
                    <img v-bind:src="this.tvShowData.imgUrl"
                         v-bind:alt="tvShowData.title" class="image">
                </div>
                <div class="column is-7">
                    <div class="columns is-multiline">
                        <div class="column is-8">
                            <h2 class="title is-2">{{ tvShowData.title }}</h2>
                        </div>
                        <div class="column is-4 has-text-right">
                            <!--                    -->
                        </div>
                        <h5 class="column is-12">&#8205;</h5>
                        <div class="column is-2">
                            <p class="is-5">{{ tvShowData.episodeCount + ' episodes' }}</p>
                        </div>
                        <div class="column is-2">
                            <p></p>
                        </div>
                        <div class="column is-8">
                            <p class="has-text-right">{{
                                    tvShowData.genres.map((genre) => genre.name)
                                        .join(', ')
                                }}</p>
                        </div>
                        <div class="column is-2">
                            <p>Studio: </p>
                        </div>
                        <div class="column is-10">
                            <p> {{ tvShowData.studio.name }}</p>
                        </div>
                        <div class="column is-12 has-text-justified">
                            <p>{{ tvShowData.plot }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <article>
            <div class="columns scrolling-wrapper-flexbox">
                <role-component
                    v-for="r in tvShowData.roles"
                    v-bind:key="r.roleId"
                    v-bind:r="r"></role-component>
            </div>
        </article>
        <article>
            <div class="columns scrolling-wrapper-flexbox">
                <season-component
                    v-for="s in tvShowData.seasons"
                    v-bind:key="s.seasonId"
                    v-bind:s="s"></season-component>
            </div>
        </article>
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
    overflow-x: auto
}

h1 {
    text-align: center
}

</style>
