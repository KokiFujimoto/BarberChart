<template>
    <v-dialog v-model="tmpDialog">
        <v-card variant="elevated" class="mb-5">
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="font-weight-bold">顧客詳細</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon="mdi-pencil"
                    :color="isEditable ? 'accent' : ''"
                    @click="changeEditable" 
                />
                <v-btn
                    icon="mdi-window-close"
                    :color="isEditable ? 'accent' : ''"
                    @click="tmpDialog = false" 
                />
            </v-toolbar>
            <div class="py-3">
                <v-row class="ma-0">
                    <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                        <v-text-field
                            label="名前"
                            variant="outlined"
                            v-model="nameComputed"
                            :readonly="!isEditable"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                        <v-text-field
                            label="フリガナ"
                            variant="outlined"
                            v-model="kanaComputed"
                            :readonly="!isEditable"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                        <v-text-field
                            label="生年月日"
                            variant="outlined"
                            v-model="birthdayComputed"
                            @click="dateDialogHandler"
                            :readonly="!isEditable"
                        />
                        <v-dialog v-model="dateDialog">
                            <DatePicker :date="item.age" @changeDate="dateDialog = !dateDialog" @update:date="updateDate" />
                        </v-dialog>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                        <v-select 
                            :items="occupations" 
                            label="職業"
                            variant="outlined"
                            v-model="occupationComputed"
                            :readonly="!isEditable"
                            dense
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                        <v-text-field
                            label="住所"
                            variant="outlined"
                            v-model="addressComputed"
                            :readonly="!isEditable"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" class="pb-0">
                        <v-text-field
                            label="電話番号"
                            variant="outlined"
                            v-model="telComputed"
                            :readonly="!isEditable"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="12" class="pb-0">
                        <v-textarea
                            label="メモ"
                            variant="outlined"
                            v-model="memoComputed"
                            :readonly="!isEditable"
                        />
                    </v-col>
                </v-row>
                <div v-if="isEditable" class="px-3">
                    <v-btn @click="save" color="primary">保存する</v-btn>
                    <v-btn @click="close">キャンセル</v-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import DatePicker from '@/components/DatePicker.vue';

export default {
    components: {
        DatePicker,
    },
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
            tmpDialog: false,
            isEditable: false,
            tmpItem: {},
        };
    },
    watch: {
        dialog(newValue) {
            this.tmpDialog = newValue;
        },
        tmpDialog(newValue) {
            this.$emit('updateDialog', newValue);
        },
        item(newValue) {
            this.tmpItem = { ...newValue };
        },
    },
    created() {
        this.tmpDialog = this.dialog;
    },
    computed: {
        nameComputed: {
            get() {
                return this.tmpItem.name;
            },
            set(value) {
                console.log(this.item)
                console.log(value)
                this.tmpItem.name = value;
                console.log(this.item)
            }
        },
        kanaComputed: {
            get() {
                return this.tmpItem.kana;
            },
            set(value) {
                this.tmpItem.kana = value;
            }
        },
        birthdayComputed: {
            get() {
                return this.$formatDateSlash(String(this.tmpItem.age));
            },
            set(value) {
            }
        },
        occupationComputed: {
            get() {
                return this.tmpItem.occupation;
            },
            set(value) {
                this.tmpItem.occupation = value;
            }
        },
        addressComputed: {
            get() {
                return this.tmpItem.address;
            },
            set(value) {
                this.tmpItem.address = value;
            }
        },
        telComputed: {
            get() {
                return this.tmpItem.tel;
            },
            set(value) {
                this.tmpItem.tel = value;
            }
        },
        memoComputed: {
            get() {
                return this.tmpItem.memo;
            },
            set(value) {
                this.tmpItem.memo = value;
            }
        },
    },
    methods: {
        changeEditable() {
            this.isEditable = !this.isEditable;
        },
        updateDate(item) {
            this.tmpItem.age = Number(item);
        },
        dateDialogHandler() {
            if (!this.isEditable) {
                return;
            }
            this.dateDialog = !this.dateDialog;
        },
        close() {
            this.isEditable = false;
            this.tmpDialog = false;
        },
        save() {
            this.$emit('updateItem', this.tmpItem);
        },
    },
}
</script>