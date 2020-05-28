<template>
    <div class="flex">
        <Recipe v-for="recipe in recipes" :key="recipe.title" v-bind="recipe" />
    </div>
</template>

<script>
    import Recipe from './Recipe'

    export default {
        components: { Recipe },
        props: ['recipes']
    }
</script>

<style scoped>
    .flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
