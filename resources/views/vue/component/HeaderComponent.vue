<template>
    <v-app-bar class="bg-indigo-lighten-1">
        <template v-slot:prepend>
            <v-icon aria-hidden="false">mdi-</v-icon>
        </template>
        <template v-slot:title>
            <v-app-bar-title class="font-weight-bold">{{ title }}</v-app-bar-title>
        </template>
        <v-main>
            <router-view/>
        </v-main>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        title: '理容ふじもと顧客管理システム',
    }),
};
</script>