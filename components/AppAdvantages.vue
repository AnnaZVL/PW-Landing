<script setup>
import IconAdvantagesMan from './SVG/IconAdvantagesMan.vue';
import IconAdvantagesWoman from './SVG/IconAdvantagesWoman.vue';
</script>

<template>
    <section class="advantages">
        <div class="advantages__container">
            <AdvantagesList />
            <p class="advantages__descr">
                PulseWave — это таск-трекер, который помогает успевать всё и управлять рабочими
                процессами по принципу Канбан. Гибкая система управления досками и карточками
                помогает команде эффективно планировать задачи, отслеживать прогресс и
                оптимизировать рабочий процесс в режиме реального времени.
            </p>
        </div>
        <IconAdvantagesWoman class="advantages__icon advantages__icon--left" />
        <IconAdvantagesMan class="advantages__icon advantages__icon--right" />
    </section>
</template>

<style lang="scss" scoped>
.advantages {
    margin: 0 auto;
    // margin-bottom: 126px;
    position: relative;

    &__container {
        padding-bottom: 126px;
        margin: 0 auto;
        width: 770px;
    }

    &__descr {
        text-align: center;
        font-size: 24px;
        color: $color_black;
    }

    &__icon {
        position: absolute;
        z-index: -1;

        &--left {
            left: -8%;
            bottom: 118px;
            width: 615px;
            height: 615px;
        }

        &--right {
            right: -11%;
            bottom: 34px;
            width: 707px;
            height: 620px;
        }
    }
}
</style>
