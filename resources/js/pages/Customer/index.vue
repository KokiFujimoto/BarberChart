<template>
    <v-container>
        <SearchFilter
            :name="name"
            :occupation="occupation"
            :age="age"
            @search="search"
        />
        <TableComponent
            :headers="headers"
            :items="items"
            title="顧客一覧"
            @dialogHandler="dialogHandler"
        />
        <CustomerDetail
            :dialog="detailDialog"
            :item="itemDetail"
            @update:dialog="updateDialog"
        />
    </v-container>
</template>

<script>
import SearchFilter from '@/components/SearchFilter.vue';
import TableComponent from '@/components/Table.vue'; 
import CustomerDetail from '@/components/CustomerDetail.vue';

export default {
    components: {
        SearchFilter,
        TableComponent,
        CustomerDetail,
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
                    title: '年齢',
                    key: 'age',
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
                    age: 19900101,
                    occupation: 1,
                    address: '宇和島市吉田町',
                    tel: '09012345678',
                    latest: '⚪︎日前',
                    action: '',
                },
                {
                    id: 2,
                    name: '山田花子',
                    age: 19900101,
                    occupation: 1,
                    address: '宇和島市吉田町',
                    tel: '09012345678',
                    latest: '⚪︎日前',
                    action: '',
                },
                {
                    id: 3,
                    name: '佐藤次郎',
                    age: 19900101,
                    occupation: 1,
                    address: '宇和島市吉田町',
                    tel: '09012345678',
                    latest: '⚪︎日前',
                    action: '',
                },
            ],
            name: '',
            occupation: 0,
            age: 0,
            detailDialog: false,
            itemDetail: [],
        };
    },
    methods: {
        search() {

        },
        dialogHandler(item) {
            this.itemDetail = item;
            this.detailDialog = true;
            console.log(this.itemDetail)
            console.log(this.detailDialog)
        },
        updateDialog(value) {
            this.detailDialog = value;
        },
    },
}
</script>