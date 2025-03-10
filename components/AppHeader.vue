<script setup>
import IconLogo from './SVG/IconLogo.vue';

const route = useRoute();

const isFixed = computed(() => {
    switch (route.path) {
        case '/privacy':
            return 'header-fixed';
        case '/terms':
            return 'header-fixed';
        default:
            return '';
    }
});
</script>

<template>
    <header class="header" :class="isFixed">
        <div class="header__container container">
            <NuxtLink to="/" aria-label="На главную">
                <IconLogo class="header__logo" />
            </NuxtLink>

            <div class="header__buttons">
                <NuxtLink class="btn btn--white" to="https://pulsewave.ru/auth/login">
                    Войти
                </NuxtLink>
                <NuxtLink class="btn" to="https://pulsewave.ru/auth/signup">
                    Бесплатная регистрация</NuxtLink
                >
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    padding-top: 20px;
    padding-bottom: 20px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
    position: fixed;
    z-index: 10;
    inset: 0;
    height: 80px;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        display: inline-block;
    }

    &-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
    }

    &__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
}
@media (max-width: 768px) {
    .header {
        padding-top: 16px;
        padding-bottom: 15px;
        height: 98px;
    }
}
@media (max-width: 572px) {
    .header {
        height: 80px;
        padding-top: 20px;
        padding-bottom: 23px;

        &__logo {
            width: 40px;
            height: 36px;
        }
    }

    .buttons {
        gap: 10px;
        button {
            font-size: 13px;
        }
    }

    .header-fixed .buttons {
        display: none;
    }
}
</style>
