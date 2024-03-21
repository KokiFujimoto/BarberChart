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
        name: {
            type: String,
            default: '',
        },
        occupation: {
            type: Number,
            default: 0,
        },
        age: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            tmpName: this.name,
            tmpOccupation: this.occupation,
            tmpAge: this.age,
        };
    },
    computed: {
        nameComputed: {
            get() {
                return this.name;
            },
            set(value) {
                this.tmpName = value;
                this.$emit('update:name', this.tmpName);
            }
        },
        occupationComputed: {
            get() {
                return this.occupation;
            },
            set(value) {
                this.tmpOccupation = value;
                this.$emit('update:occupation', this.tmpOccupation);
            }
        },
        ageComputed: {
            get() {
                return this.age;
            },
            set(value) {
                this.tmpAge = value;
                this.$emit('update:age', this.tmpAge);
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