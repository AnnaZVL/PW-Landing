import * as SharedComponents from '@pulsewave/shared-components';

export default defineNuxtPlugin((nuxtApp) => {
  // Регистрация всех компонентов глобально
  Object.entries(SharedComponents).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component);
  });
});