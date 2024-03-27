<template>
    <v-container>
        <SearchFilter
            :filter="filter"
            @search="search"
        />
        <TitleBar title="顧客一覧">
            <template v-slot>
                <v-btn
                    color="blue-lighten-4"
                    prepend-icon="mdi-plus"
                    variant="elevated"
                    @click="addCustomer"    
                >
                    新規追加
                </v-btn>
            </template>
        </TitleBar>
        <TableComponent
            :headers="headers"
            :items="items"
            @dialogHandler="dialogHandler"
        />
        <CustomerDetail
            :dialog="detailDialog"
            :item="itemDetail"
            @updateDialog="updateDialog"
            @updateItem="updateItem"
        />
    </v-container>
</template>

<script>
import SearchFilter from '@/components/SearchFilter.vue';
import TableComponent from '@/components/Table.vue'; 
import CustomerDetail from '@/components/CustomerDetail.vue';
import TitleBar from '@/components/TitleBar.vue';

export default {
    components: {
        SearchFilter,
        TableComponent,
        CustomerDetail,
        TitleBar,
    },
    data() {
        return {
            headers: [
                {
                    title: 'ID',
                    key: 'id',
                    align: 'start',
                },
                {
                    title: '名前',
                    key: 'name',
                },
                {
                    title: 'フリガナ',
                    key: 'kana',
                },
                {
                    title: '年齢',
                    key: 'birthday',
                },
                {
                    title: '職業',
                    key: 'occupation',
                },
                {
                    title: '住所',
                    key: 'address',
                },
                {
                    title: '電話番号',
                    key: 'tel',
                },
                {
                    title: '最終来店',
                    key: 'latest',
                },
                // {
                //     title: '',
                //     key: 'action',
                // },
            ],
            items: [
                {
                    id: 1,
                    name: '田中太郎',
                    kana: 'タナカタロウ',
                    birthday: 19900101,
                    occupation: 1,
                    address: '宇和島市吉田町',
                    tel: '09012345678',
                    latest: '⚪︎日前',
                    memo: 'アイウエオかきくけこさしすせそたちつてと',
                    action: 1,
                },
                {
                    id: 2,
                    name: '山田花子',
                    kana: 'ヤマダハナコ',
                    birthday: 19900101,
                    occupation: 1,
                    address: '宇和島市吉田町',
                    tel: '09012345678',
                    latest: '⚪︎日前',
                    memo: 'アイウエオかきくけこさしすせそたちつてと',
                    action: 2,
                },
                {
                    id: 3,
                    name: '佐藤次郎',
                    kana: 'サトウジロウ',
                    birthday: 19900101,
                    occupation: 1,
                    address: '宇和島市吉田町',
                    tel: '09012345678',
                    latest: '⚪︎日前',
                    memo: 'アイウエオかきくけこさしすせそたちつてと',
                    action: 3,
                },
            ],
            filter: {
                name: '',
                occupation: 0,
                age: 0,
            },
            detailDialog: false,
            itemDetail: [],
            newCustomer: {
                id: 0,
                name: '',
                kana: '',
                age: 0,
                occupation: 0,
                address: '',
                tel: '',
                memo: '',
            },
        };
    },
    async created() {
        await this.search();
    },
    methods: {
        async search() {
            const res = await this.$axios.post('/api/customer/search', this.filter);
            console.log(res);
        },
        dialogHandler(item) {
            this.itemDetail = item;
            this.detailDialog = true;
        },
        updateDialog(value) {
            this.detailDialog = value;
        },
        addCustomer() {
            this.itemDetail = this.newCustomer;
            this.detailDialog = true;
        },
        updateItem(value) {
            const index = this.items.findIndex(item => item.id === value.id);
            if (index !== -1) {
                this.items[index] = value;
            }

            this.detailDialog = false;
        },
    },
}
</script>