<template>
    <v-app>
        <HeaderComponent/>
        
        <v-spacer>
        </v-spacer>
        <FooterComponent/>
    </v-app>
</template>

<script>
import HeaderComponent from './component/HeaderComponent.vue';
import FooterComponent from './component/FooterComponent.vue';

export default {
    name: 'App',
    components: {
        HeaderComponent,
        FooterComponent,
    },
    data: () => ({
    }),
};
</script>