<template>
    <div class="center">
        <div class="ingredients card">
            <div class="ingredients__add">
                <input
                    class="ingredients__add__input"
                    :class="error ? 'ingredient__error-bg' : ''"
                    type="text"
                    @keyup.enter="add"
                    placeholder="Enter Ingredient"
                    v-model="ingredientRaw"
                />
                <button
                    class="ingredients__add__button"
                    type="button"
                    @click="add"
                >
                    <i class="fas fa-plus fa-lg"></i>
                </button>
            </div>
            <div class="ingredient__error-msg"> {{ error }} </div>

            <div class="ingredients__list">
                <div class="bold" v-show="ingredients.length === 0">Your ingredients will show here</div>
                <div v-for="i in ingredients" :key="i">
                    <div class="ingredient">
                        <span v-text="i"></span>
                        <div
                            class="ingredient__delete"
                            @click="$emit('delete', i)"
                        >
                            <i class="ingredient__icon fas fa-times"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="delete-all"
                v-show="ingredients.length"
                @click="$emit('empty')"
            >
                delete all
            </div>

            <div class="ingredients__search">
                <button
                    class="ingredients__search__button bold w-100"
                    type="button"
                    @click.prevent="$emit('search')"
                >
                    Find Recipes
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                ingredientRaw: ''
            }
        },
        props: ['ingredients'],

        computed: {
            ingredient: {
                get: function() {
                    return this.ingredientRaw.trim().toLowerCase()
                },
                set: function(value) {
                    this.ingredientRaw = value
                }
            },

            error: function(){
                if(this.ingredients.includes(this.ingredient)){
                    return 'Ingredient already added'
                } else {
                    return ''
                }
            },
        },

        methods: {
            add: function() {
                if(this.ingredient){
                    if(!this.ingredients.includes(this.ingredient)){
                        this.$emit('add', this.ingredient)
                        this.ingredient = ''
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .ingredients {
        height: auto;
        width: 350px;
    }

    .ingredients__add {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .ingredients__add__input {
        flex: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
    }

    .ingredients__add__button {
        width: 50px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .ingredients__list {
        display: flex;
        align-content: flex-start;
        margin: 20px 0;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .ingredient {
        display: flex;
        flex-direction: row;
        background: #ddd;
        color: black;
        border-radius: 5px;
        padding: 10px;
        margin: 2px;
        font-size: 1rem;
        align-items: center;
        text-transform: capitalize;
        font-weight: bold;
    }

    .ingredient__delete {
        background: transparent;
        border: none;
        margin-left: 10px;
    }

    .ingredient__icon {
        color: #aaa;
        margin-left: 2px;
    }

    .ingredient__error-bg {
        border: 1px solid #ff4444;
    }

    .ingredient__error-msg {
        color: #ff4444;
        font-size: 0.8rem;
        margin-top: 2px;
    }

    .delete-all {
        text-decoration: underline;
        color: #aaa;
        font-size: 0.8rem;
        cursor: pointer;
        text-align: right;
        margin-bottom: 10px;
    }
</style>
