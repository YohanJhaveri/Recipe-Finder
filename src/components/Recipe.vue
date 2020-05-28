<template>
    <div class="card recipe">
        <h1> {{ title }} </h1>
        <img :src="image" />
        <ul><li v-for="ingredient in ingredients" :key="ingredient.id">{{ ingredient.name }}</li></ul>
    </div>
</template>

<script>
    export default {
        props: ['title', 'image', 'missedIngredients', 'unusedIngredients', 'usedIngredients'],
        computed: {
            ingredients: function() {
                return this.missedIngredients.concat(this.unusedIngredients).concat(this.usedIngredients)
            }
        }
    }
</script>

<style scoped>
    .recipe {
        flex: 1 0 20%; margin: 10px;
    }
</style>
