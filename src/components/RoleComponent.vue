<template>
    <div class="column is-2">
        <div class="card">
            <div class="card-image">
                <figure class="image is-3by4">
                    <img v-bind:src="r.imgUrl"
                         v-bind:alt="r.name" class="image">
                </figure>
            </div>
            <div class="card-content">
                <div class="content has-text-centered">
                    <p class="has-text-weight-bold">{{ r.name }}</p>
                    <p class="subtitle is-6">{{ r.character }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoleComponent',
    props: {
        r: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>
