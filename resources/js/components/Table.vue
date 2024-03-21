<template>
    <v-card>
        <v-data-table
            :headers="headers"
            :items="items"
            @click:row="onRowClick"
        >
            <template v-slot:top>
                <v-toolbar color="primary" flat>
                    <v-toolbar-title class="font-weight-bold">{{ title }}</v-toolbar-title>
                </v-toolbar>
            </template>
            <template v-slot:item.tel="{ value }">
                {{ value }}
            </template>
            <!-- <template v-slot:item.action="{ value }">
                <v-btn
                    color="primary"
                >
                    カルテ
                </v-btn>
            </template> -->
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    props: {
        headers: {
            type: Array,
            default: [],
        },
        items: {
            type: Array,
            default: [],
        },
        dialog: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
    },
    methods: {
        onRowClick(click, row) {
            this.$emit('dialogHandler', row.item);
        }
    }
}
</script>