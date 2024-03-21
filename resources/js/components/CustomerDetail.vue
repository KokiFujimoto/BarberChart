<template>
    <v-dialog v-model="test">
        <v-card variant="elevated" class="mb-5">
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="font-weight-bold">顧客詳細</v-toolbar-title>
            </v-toolbar>
            <v-row class="ma-0">
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="名前"
                        variant="outlined"
                        v-model="nameComputed"
                        readonly
                    />
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="フリガナ"
                        variant="outlined"
                        v-model="kanaComputed"
                        readonly
                    />
                </v-col>
                <!-- <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="生年月日"
                        variant="outlined"
                        v-model="birthdayComputed"
                        @click="dateDialog = !dateDialog"
                        readonly
                    /> 
                    <v-locale-provider locale="ja">
                        <v-date-picker
                            v-if="dateDialog"
                            v-model="date"
                            color="primary"
                            show-adjacent-months
                            @update:modelValue="dateDialog = !dateDialog"
                        ></v-date-picker>
                    </v-locale-provider>
                </v-col> -->
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-select 
                        :items="occupations" 
                        label="職業"
                        variant="outlined"
                        v-model="occupationComputed"
                        dense
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="住所"
                        variant="outlined"
                        v-model="addressComputed"
                        readonly
                    />
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                    <v-text-field
                        label="電話番号"
                        variant="outlined"
                        v-model="telComputed"
                        readonly
                    />
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {},
        },
        dialog: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            dateDialog: false,
            occupations: this.$occupations,
            test: false,
        };
    },
    watch: {
        dialog(newValue) {
            this.test = newValue;
        },
        test(newValue) {
            this.$emit('update:dialog', newValue);
        }
    },
    created() {
        this.test = this.dialog;
    },
    computed: {
        nameComputed: {
            get() {
                return this.item.name;
            },
            set(value) {
                
            }
        },
        kanaComputed: {
            get() {
                return this.item.kana;
            },
            set(value) {
                
            }
        },
        birthdayComputed: {
            get() {
                return this.$formatDateSlash(new Date(this.$formatDateHyphen(String(this.item.age))));
            },
            set(value) {
                
            }
        },
        occupationComputed: {
            get() {
                return this.item.occupation;
            },
            set(value) {
                
            }
        },
        addressComputed: {
            get() {
                return this.item.address;
            },
            set(value) {
                
            }
        },
        telComputed: {
            get() {
                return this.item.tel;
            },
            set(value) {
                
            }
        },
    },
}
</script>