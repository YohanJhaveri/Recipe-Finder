<template>
    <div class="center">
        <div class="login card">
            <h1 class="login__heading"> Welcome Back! </h1>
            <form class="login__form">
                <input
                    class="login__form__input w-100"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                />

                <input
                    class="login__form__input w-100"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                />

                <button
                    class="login__form__button w-100"
                    type="button"
                    @click="login"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function() {
                this.$emit('submit-login', this.email, this.password)
            }
        }
    }
</script>

<style scoped>
    .login {
        height: 300px;
        width: 350px;
    }

    .login__heading {
        flex: 1;
        margin-top: 0;
        text-align: center;
        font-size: 1.8rem;
    }

    .login__form {
        flex: 10;
        margin-top: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: auto;
    }
</style>
