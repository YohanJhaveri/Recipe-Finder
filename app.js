const app = new Vue({
    el: '#app',
    data: {
        user: {
            isLoggedIn: true,
            email : '',
            password: ''
        },

        ingredientsInput: '',
        ingredientError: '',
        ingredients: ['flour', 'eggs', 'butter', 'milk', 'salt', 'water']

    },

    methods: {
        login: function() {
            if(
                this.user.email === 'yohan.jhaveri@epaylater.in' &&
                this.user.password === 'LearnVue2020'
            ) {
                this.user.isLoggedIn = true
            } else {
                alert('Incorrect Credentials')
            }
        },

        addIngredient: function() {
            const ingredient = this.ingredientsInput.trim().toLowerCase()
            if(ingredient){
                if(!this.ingredients.includes(ingredient)){
                    this.ingredients.push(ingredient)
                    this.ingredientsInput = ''
                }
            }
        },

        validateIngredient: function() {
            const ingredient = this.ingredientsInput.trim().toLowerCase()
            if(this.ingredients.includes(ingredient)){
                this.ingredientError = 'Ingredient already added'
            } else {
                this.ingredientError = ''
            }
        },

        removeError: function() {
            this.ingredientError = ''
        },

        deleteIngredient: function(ingredient) {
            this.ingredients = this.ingredients.filter(i => i !== ingredient)
        },

        deleteAllIngredients: function() {
            this.ingredients = []
        },

        search: function() {
            if(this.ingredients.length){
                var request = new XMLHttpRequest()

                key = 'c534ced8e5c24ef686c7c518de98b6ce'
                request.open('GET', 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + this.ingredients.join(',+') + '&number=10&apiKey=' + key, true)

                request.onload = function() {
                    var data = JSON.parse(this.response)
                    console.log(data)
                }

                request.send()
            } else {
                this.ingredientError = 'Add at least 1 ingredient to search'
            }
        },


    }
})
