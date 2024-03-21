<template>
    <v-app>
        <HeaderComponent />
        <div style="height: 64px;"></div>
        <router-view />
        <FooterComponent />
    </v-app>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
    }
}
</script>