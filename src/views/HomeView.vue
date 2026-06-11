<template>
    <div class="container">
        <div class="section">
            <div class="box mb-6" style="background: rgba(255,255,255,0.6); backdrop-filter: blur(10px); border-radius: 16px;">
                <form role="search">
                    <div class="columns is-vcentered">
                        <div class="column is-4">
                            <div class="field">
                                <label class="label" for="title">Rechercher un titre</label>
                                <div class="control has-icons-left">
                                    <input class="input is-medium" id="title" name="title" v-model="title" placeholder="Ex: Attack on Titan...">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="column is-4">
                            <div class="field">
                                <label class="label" for="studio">Filtrer par Studio</label>
                                <div class="control has-icons-left">
                                    <div class="select is-medium is-fullwidth">
                                        <select id="studio" name="studio" v-model="studio">
                                            <option value="">Tous les studios</option>
                                            <option v-for="s in studios" :key="s.studioId" :value="s.studioId">
                                                {{ s.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-building"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="column is-4">
                            <div class="field">
                                <label class="label">Genres</label>
                                <div class="buttons">
                                    <button type="button" v-for="g in genres" :key="g.genreId"
                                            class="button is-small is-rounded"
                                            :class="genre.includes(g.genreId) ? 'is-primary' : 'is-light'"
                                            @click="toggleGenre(g.genreId)">
                                        {{ g.name }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div v-if="filteredTVShows.length > 0">
                <div class="columns is-multiline is-mobile">
                    <TVShowComponent v-for="tvShow in chuncked[currentPage]" :key="tvShow.tvshowId" :tvshow="tvShow" />
                </div>

                <nav class="pagination is-centered is-rounded mt-6" role="navigation" aria-label="pagination">
                    <a class="pagination-previous" :disabled="currentPage === 0" @click="currentPage > 0 && currentPage--">Précédent</a>
                    <a class="pagination-next" :disabled="currentPage >= pagination - 1" @click="currentPage < pagination - 1 && currentPage++">Suivant</a>
                    <ul class="pagination-list">
                        <li v-for="page in pagination" :key="page">
                            <a class="pagination-link" :class="{ 'is-current': currentPage === page - 1 }"
                               @click="currentPage = page - 1">{{ page }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div v-else class="has-text-centered py-6">
                <span class="icon is-large has-text-grey-light mb-4">
                    <i class="fas fa-search fa-3x"></i>
                </span>
                <p class="title is-4 has-text-grey">Aucun résultat trouvé</p>
                <button class="button is-text" @click="resetFilters">Réinitialiser les filtres</button>
            </div>
        </div>
    </div>
</template>

<script>
import { svrURL } from '@/constants';
import TVShowComponent from '@/components/TVShowComponent.vue';

export default {
    name: 'HomeView',
    components: { TVShowComponent },
    data() {
        return {
            title: '',
            studio: '',
            genre: [], // IDs of selected genres
            genres: [], // All genres from API
            studios: [],
            tvShows: [],
            currentPage: 0,
            nbrEpisodesPerPage: 8,
        };
    },
    methods: {
        async getStudios() {
            const response = await fetch(`${svrURL}/studios`);
            if (response.ok) {
                this.studios = await response.json();
            }
        },
        async getGenres() {
            const response = await fetch(`${svrURL}/genres`);
            if (response.ok) {
                this.genres = await response.json();
            }
        },
        async getTVShows() {
            const response = await fetch(`${svrURL}/tvshows`);
            if (response.ok) {
                this.tvShows = await response.json();
            }
        },
        toggleGenre(id) {
            const index = this.genre.indexOf(id);
            if (index === -1) {
                this.genre.push(id);
            } else {
                this.genre.splice(index, 1);
            }
            this.currentPage = 0;
        },
        resetFilters() {
            this.title = '';
            this.studio = '';
            this.genre = [];
            this.currentPage = 0;
        },
        resetPage() {
            this.currentPage = 0;
        },
    },
    computed: {
        filteredTVShows() {
            const { title, studio, genre } = this;
            return this.tvShows.filter((tvShow) => {
                const matchTitle = title === '' || tvShow.title.toLowerCase().includes(title.toLowerCase());
                const matchStudio = studio === '' || tvShow.studio.studioId === studio;
                const matchGenres = genre.length === 0 || genre.every((gId) => 
                    tvShow.genres.some((tg) => tg.genreId === gId)
                );
                return matchTitle && matchStudio && matchGenres;
            });
        },
        pagination() {
            return Math.ceil(this.filteredTVShows.length / this.nbrEpisodesPerPage);
        },
        chuncked() {
            const chunkedTvShows = [];
            this.filteredTVShows.forEach((tvShow, key) => {
                if (key % this.nbrEpisodesPerPage === 0) {
                    chunkedTvShows.push([]);
                }
                chunkedTvShows[chunkedTvShows.length - 1].push(tvShow);
            });
            return chunkedTvShows;
        },
    },
    watch: {
        title() { this.currentPage = 0; },
        studio() { this.currentPage = 0; },
    },
    mounted() {
        this.getStudios();
        this.getGenres();
        this.getTVShows();
    },
};
</script>

<style scoped>
</style>
