<script setup>
import IconAdvantages_1 from '../SVG/IconAdvantages_1.vue';
import IconAdvantages_2 from '../SVG/IconAdvantages_2.vue';
import IconAdvantages_3 from '../SVG/IconAdvantages_3.vue';
import IconAdvantages_4 from '../SVG/IconAdvantages_4.vue';
</script>

<template>
    <ul class="list">
        <li class="item">
            <IconAdvantages_1 />
            <h3 class="title">Бесплатный доступ</h3>
            <p class="descr">
                Приложение бесплатное на всех этапах, начиная от регистрации и заканчивая
                функционалом.
            </p>
        </li>
        <li class="item">
            <IconAdvantages_2 />
            <h3 class="title">Бесконечное число пользователей</h3>
            <p class="descr">Добавляйте до 100 человек и больше в свой проект, это бесплатно.</p>
        </li>
        <li class="item">
            <IconAdvantages_3 />
            <h3 class="title">Функции без ограничений</h3>
            <p class="descr">Все опции доступны с самого начала работы, без доплат и подписок.</p>
        </li>
        <li class="item">
            <IconAdvantages_4 />
            <h3 class="title">Уведомления в Телеграм</h3>
            <p class="descr">
                Все уведомления и действия в рабочем пространстве приходят в Телеграм через бота.
            </p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.list {
    margin-bottom: 64px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px 32px;

    .item {
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
        background-color: $color_white;
        border-radius: 12px;

        .title {
            font-weight: 800;
            line-height: 20px;
            color: $color_black;
        }

        .descr {
            line-height: 22px;
            color: $color_black;
        }
    }
}
</style>
