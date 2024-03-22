<template>
    <v-card>
        <v-data-table
            :headers="headers"
            :items="items"
            @click:row="onRowClick"
        >
            <template v-slot:item.birthday="{ value }">
                {{ calculateAge(value) }}
            </template>
            <template v-slot:item.occupation="{value}">
                {{ getOccupationName(value) }}
            </template>
            <template v-slot:item.tel="{ value }">
                {{ value }}
            </template>
            <template v-slot:item.action="{ value }">
                <v-btn
                    color="primary"
                >
                    カルテ
                </v-btn>
            </template>
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
    },
    data() {
        return {
            occupations: this.$occupations,
        };
    },
    methods: {
        onRowClick(click, row) {
            this.$emit('dialogHandler', row.item);
        },
        calculateAge(birthday) {
            return this.$calculateAge(birthday);
        },
        getOccupationName(occupationId) {
            const index = this.occupations.findIndex(item => item.value === occupationId);
            return this.occupations[index].title;
        }
    }
}
</script>