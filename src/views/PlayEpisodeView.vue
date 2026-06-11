<template>
    <div class="container">
        <div class="section">
            <div class="content"  v-if="$store.state.token===''">
                <div tabindex="0" class="messages">
                    <div class="message is-danger"
                         style="white-space: pre;
                border-color: red; border-width: 2px; border-style: solid;">
                        <p role="alert" class="message-body">
                            Vous devez être connecté pour accéder à cette page. <br/>
                            <router-link v-bind:to="{ name: 'login' }" class="has-text-centered">
                                Se connecter
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <main v-if="$store.state.token!=='' && episodeData!==null">
            <video autoplay controls muted>
                <source v-bind:src="episodeData.videoUrl" type="video/mp4">
            </video>
        </main>
    </div>
</template>
<script>
import { svrURL } from '@/constants';

export default {
    name: 'PlayEpisodeView',
    data() {
        return {
            episodeData: null,
        };
    },
    mounted() {
        this.fetchEpisodes();
    },
    methods: {
        async fetchEpisodes() {
            if (this.$store.state.token !== '') {
                const {
                    id,
                } = this.$route.params;
                const response = await fetch(`${svrURL}/viewepisode?episodeId=${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.$store.state.token}`,
                    },
                });
                if (response.ok) {
                    this.episodeData = await response.json();
                }
            }
        },
    },
};
</script>

<style scoped>
video {
    width: 100vw;
    height: 94vh;
    object-fit: cover;
    position: fixed;
    top: 6vh;
    left: 0;
    z-index: -1;
}
</style>
