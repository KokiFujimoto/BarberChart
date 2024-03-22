<template>
    <v-toolbar color="primary" flat>
        <v-toolbar-title class="font-weight-bold">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <slot></slot>
    </v-toolbar>
</template>

<script>
export default {
    props: {
        title: String,
    },
}
</script>