<template>
    <!-- <v-locale-provider locale="ja"> -->
        <v-date-picker
            v-model="dateComputed"
            color="primary"
            show-adjacent-months
        ></v-date-picker>
    <!-- </v-locale-provider> -->
</template>

<script>
export default {
    props: {
        date: Number,
    },
    data() {
        return {
            tmpDate: null,
        };
    },
    created() {
        this.tmpDate = this.date;
    },
    computed: {
        dateComputed: {
            get() {
                return new Date(this.$formatDateHyphen(String(this.tmpDate)));
            },
            set (value) {
                this.tmpDate = this.$formatDate(value);
                this.$emit('update:date', this.tmpDate);
                this.$emit('changeDate');
            }
        }
    },
}
</script>