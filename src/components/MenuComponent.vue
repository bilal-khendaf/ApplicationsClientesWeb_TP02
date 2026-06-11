<template>
    <header>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link :to="{ name: 'home' }" class="navbar-item has-text-weight-bold is-size-4">
                        <span class="icon-text">
                            <span class="icon has-text-primary">
                                <i class="fas fa-play-circle"></i>
                            </span>
                            <span>TV SHOWS</span>
                        </span>
                    </router-link>

                    <a role="button" class="navbar-burger" aria-label="menu" :class="{ 'is-active': activator }"
                       @click="makeBurger" @keydown.enter="makeBurger" tabindex="0">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': activator }">
                    <div class="navbar-start">
                        <!-- Links can go here -->
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <router-link :to="{ name: 'history' }" class="navbar-item"
                                             v-if="$store.state.token && $route.name !== 'history'">
                                    <span class="icon"><i class="fas fa-history"></i></span>
                                    <span>Historique</span>
                                </router-link>

                                <router-link :to="{ name: 'signup' }" class="button is-primary is-light"
                                             v-if="!$store.state.token && $route.name !== 'signup'">
                                    <strong>Inscription</strong>
                                </router-link>

                                <router-link :to="{ name: 'login' }" class="button is-light"
                                             v-if="!$store.state.token && $route.name !== 'login'">
                                    Connexion
                                </router-link>

                                <router-link :to="{ name: 'profile' }" class="navbar-item"
                                             v-if="$store.state.token">
                                    <span class="icon"><i class="fas fa-user-circle"></i></span>
                                    <span>Mon profil</span>
                                </router-link>

                                <router-link :to="{ name: 'about' }" class="navbar-item">
                                    <span class="icon"><i class="fas fa-info-circle"></i></span>
                                    <span>À propos</span>
                                </router-link>

                                <a class="button is-danger is-light ml-2" v-if="$store.state.token"
                                   @click="signOut">
                                    <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                                    <span>Déconnexion</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Spacer for fixed-top navbar -->
        <div style="height: 4rem;"></div>
    </header>
</template>

<script>
export default {
    name: 'MenuComponent',
    data() {
        return {
            activator: false,
        };
    },
    methods: {
        async signOut() {
            this.$store.dispatch('setToken', '');
            this.$store.dispatch('setUsername', '');
            this.$store.state.history = [];
            await this.$router.push('/');
        },
        makeBurger() {
            this.activator = !this.activator;
        },
    },
};
</script>

<style scoped>
.navbar-item .icon {
    margin-right: 0.5rem;
}
</style>
