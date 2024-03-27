<template>
    <v-card variant="elevated" class="mb-5">
        <v-row class="pt-2 px-3">
            <v-col cols="12" sm="3" md="3" lg="3" class="pb-0">
                <v-text-field
                    v-model="nameComputed"
                    label="名前もしくはフリガナ"
                    variant="solo"
                    dense
                    @change="search"
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" class="pb-0">
                <v-select 
                    v-model="occupationComputed"
                    :items="$occupations" 
                    label="職業"
                    variant="solo"
                    dense
                    @change="search"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" class="pb-0">
                <v-select 
                    v-model="ageComputed"
                    :items="$ages" 
                    label="年齢"
                    variant="solo"
                    dense
                    @change="search"
                ></v-select>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: {
        filter: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            tmpFilter: this.filter,
        };
    },
    computed: {
        nameComputed: {
            get() {
                return this.tmpFilter.name;
            },
            set(value) {
                this.tmpFilter.name = value;
                this.$emit('update:name', this.tmpFilter.name);
            }
        },
        occupationComputed: {
            get() {
                return this.tmpFilter.occupation;
            },
            set(value) {
                this.tmpFilter.occupation = value;
                this.$emit('update:occupation', this.tmpFilter.occupation);
            }
        },
        ageComputed: {
            get() {
                return this.tmpFilter.age;
            },
            set(value) {
                this.tmpFilter.age = value;
                this.$emit('update:age', this.tmpFilter.age);
            }
        },
    },
    methods: {
        search() {
            this.$emit('search');
        }
    },
}
</script>