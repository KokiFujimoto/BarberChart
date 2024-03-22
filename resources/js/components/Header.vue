<template>
    <v-app-bar
        app
        dark
        color="primary"
        style="height: 64px;"
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-bold">理容ふじもと顧客管理システム</v-toolbar-title>
        <v-spacer />
        <v-btn
            icon="mdi-home"
            to="/"
        />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app floating class="">
        <v-list class="pa-0">
            <v-list-item
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.path"
                color="primary"
                :title="item.name"
                :prepend-icon="item.icon"
            >
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            menuItems: [
                {
                    name: 'ホーム',
                    path: '/home',
                    icon: 'mdi-home',
                },
                {
                    name: '顧客一覧',
                    path: '/customer',
                    icon: 'mdi-account',
                },
                {
                    name: 'カルテ一覧',
                    path: '/chart',
                    icon: 'mdi-card-account-details',
                },
            ],
        };
    },
}
</script>
