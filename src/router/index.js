import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DetailsView from '@/views/DetailsView.vue';
import SeasonEpisodesView from '@/views/SeasonEpisodesView.vue';
import DetailsEpisodeView from '@/views/DetailsEpisodeView.vue';
import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';
import ProfileView from '@/views/ProfileView.vue';
import AboutView from '@/views/AboutView.vue';
import HistoryView from '@/views/HistoryView.vue';
import PlayEpisodeView from '@/views/PlayEpisodeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/details/:id',
        name: 'detail',
        component: DetailsView,
    },
    {
        path: '/episodes/:id',
        name: 'episode',
        component: SeasonEpisodesView,
    },
    {
        path: '/episodedetails/:id',
        name: 'episodedetails',
        component: DetailsEpisodeView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/history',
        name: 'history',
        component: HistoryView,
    },
    {
        path: '/playEpisode/:id',
        name: 'playEpisode',
        component: PlayEpisodeView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
