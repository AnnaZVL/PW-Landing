<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="footer">
        <nav class="container footer__container">
            <ul class="footer__list">
                <li class="item">
                    <NuxtLink class="item__link" to="/terms">
                        <span class="item__text">Условия пользования</span>
                    </NuxtLink>
                </li>
                <li class="item">
                    <a class="item__link" href="mailto:info@pulsewave.ru">
                        <span class="item__text item__link-desc">info@pulsewave.ru</span>
                        
                    </a>
                </li>
                <li class="item">
                    <span class="item__text">&#169;PulseWave, 2023-{{ currentYear }}</span>
                </li>
            </ul>
            
        </nav>
        
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: $color_gray-blue;
    height: 90px;
    position: relative;

    &__container {
        padding-top: 35px;
        padding-bottom: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    &__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .item {
            &__link {
                border: none;
                font-weight: 500;
                color: $color_black-default;
                outline: none;
                transition: all 0.3s ease-in-out;

                &:hover {
                    text-decoration: underline;
                }
            }
            &__text {
                font-weight: normal;
                color: $color_text-default;
            }
            &__link-mobile {
                display: none;
            }
        }
    }

    &__progect {
        font-weight: normal;
        color: $color_text-default;
        align-self: flex-end;
    }

    
}

@media (max-width: 768px) {
    .footer {
        &__icons {
            padding: 0 30px;
            max-width: 768px;
        }
    }
}

@media (max-width: 572px) {
    .footer {
        &__container {
            padding-top: 10px;
            padding-bottom: 10px;
            gap: 6px;
        }
        &__list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: stretch;
            gap: 9px;
            .item {
                &__text {
                    font-size: 12px;
                }
                &__link-desc {
                    display: none;
                }
                &__link-mobile {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 4px;
                }
            }
            .item:nth-child(3) {
                grid-column: span 2;
                justify-self: center;
            }
        }
        &__progect {
            font-size: 12px;
            align-self: center;
        }
        
    }
}
</style>
