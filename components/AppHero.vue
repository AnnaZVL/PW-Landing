<script setup>
import SVGAnimate from './SVG/SVGAnimate.vue';
</script>

<template>
    <section class="hero">
        <SVGAnimate class="animate" />
        <div class="hero__container container">
            <div class="hero__body">
                <h1 class="hero__title">Твой помощник для командной работы и личных проектов</h1>
                <p class="hero__descr">
                    Этот органайзер или менеджер задач - инструмент российской разработки, который
                    объединяет людей, помогая продуктивно работать вместе.
                </p>
                <NuxtLink class="btn" to="https://pulsewave.ru/auth/signup">
                    Зарегистрироваться
                </NuxtLink>
            </div>
            <img class="hero__img" src="/public/img/hero/hero.png" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    padding-top: 120px;
    margin-bottom: 34px;
    position: relative;

    .animate {
        position: absolute;
        top: 0;
        right: -20%;
        z-index: -1;
        width: 900px;
        height: 760px;
    }

    &__container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 30px;
    }

    &__body {
        padding-top: 75px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 30px;
    }

    &__title {
        font-weight: 700;
        font-size: 32px;
        text-transform: uppercase;
    }

    &__descr {
        font-size: 24px;
        
    }
}
</style>
