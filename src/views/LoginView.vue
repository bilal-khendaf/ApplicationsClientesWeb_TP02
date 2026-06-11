<template>
    <div class="container">
        <div class="section">
            <div class="message is-danger" tabindex="0" v-if="error!==''" style="white-space: pre;
                border-color: red; border-width: 2px; border-style: solid;">
                <p role="alert" class="message-body">{{ error }}</p>
            </div>
            <div class="content">
                <main>
                    <form>
                        <div class="field">
                            <label for="username" class="label">Username</label>
                            <div class="control has-icons-left">
                                <input id="username" type="text"
                                       placeholder="e1234567" class="input"
                                       autocomplete="email" required aria-required="true"
                                       v-model="username" aria-describedby="descriptionUsername">
                                <span class="icon is-small is-left">
                                <i class="fa fa-envelope"></i></span>
                                <span id="descriptionUsername" class="help is-success is-hidden">
                                Le nom d'utilisateur.</span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="password" class="label">Password</label>
                            <div class="control has-icons-left">
                                <input id="password" type="password"
                                       placeholder="*******" class="input"
                                       autocomplete="password"
                                       required aria-required="true"
                                       v-model="password"
                                       aria-describedby="descriptionPassword">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i></span>
                                <span id="descriptionPassword" class="help is-success is-hidden">
                                Le mot de passe de l'utilisateur</span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button id="connexion" class="button is-success"
                                        @click.prevent="login">
                                    Connexion
                                </button>
                                <router-link v-bind:to="{ name: 'home' }"
                                             class="button is-danger">Annuler
                                </router-link>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { svrURL } from '@/constants';

export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: '',
            error: '',
        };
    },
    mounted() {
        this.loadPage();
    },
    methods: {
        loadPage() {
            if (this.$store.state.token !== '') {
                this.$router.push('/');
            }
            this.username = this.$store.state.username;
        },
        async login() {
            //   "username": "e1730934","password": "e1730934"
            this.error = '';
            const {
                username,
                password,
            } = this;
            const body = {
                username,
                password,
            };
            if (username === '') {
                this.error += 'Veuillez saisir votre nom d\'utilisateur.\n';
            }
            if (password === '') {
                this.error += 'Veuillez saisir votre mot de passe.\n';
            }
            try {
                const resToken = await fetch(`${svrURL}/auth/token`, {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'POST',
                    body: JSON.stringify(body),
                });
                if (resToken.ok) {
                    const data = await resToken.json();
                    this.$store.dispatch('setToken', data.token);
                    this.$store.dispatch('setUsername', username);
                    await this.$router.push('/');
                } else {
                    console.error('une erreur s\'est produite');
                    if (this.error === '') {
                        this.error = 'Mauvais nom d\'utilisateur ou mot de passe.';
                    }
                }
            } catch {
                if (this.error === '') {
                    this.error = 'Une erreur s\'est produite.';
                }
            }
        },
    },
};
</script>

<style scoped>

</style>
