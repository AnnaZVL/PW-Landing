<script setup>
const route = useRoute()

const isFixed = computed(() => {
    switch (route.path) {
        case '/privacy':
          return 'header-fixed';
        case '/terms':
          return 'header-fixed';
        default:
          return '';
      }
})

</script>

<template>
    <header class="header container" :class="isFixed">
        <NuxtLink to="/">
            <img class="header__logo" src="/img/IconLogo.svg" alt="" />
        </NuxtLink>
        <!-- <div class="buttons">
            <NuxtLink to="/privacy">
                <ButtonComponent size="small"> Privacy </ButtonComponent>
            </NuxtLink>
            <NuxtLink to="/terms">
                <ButtonComponent size="small"> Terms </ButtonComponent>
            </NuxtLink>
        </div> -->
        <div class="buttons">
            <NuxtLink to="https://pulsewave.ru/auth/login">
            <ButtonComponent size="small"> Войти </ButtonComponent>
        </NuxtLink>
        <NuxtLink to="https://pulsewave.ru/auth/signup">
            <ButtonComponent size="small"> Регистрация </ButtonComponent>
        </NuxtLink>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    height: 114px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
        width: 81px;
        height: 74px;
    }
    
    &-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: $color_white;
    }
}
.buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
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
