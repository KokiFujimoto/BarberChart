<template>
    <v-footer
        class="bg-indigo-lighten-1"
        style="max-height: 100px;"
    >
        <v-container>
            <v-row justify="center">
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    :icon="icon"
                    class="mx-4"
                    variant="text"
                ></v-btn>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
};
</script>