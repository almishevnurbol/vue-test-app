<script>
    export default {
        components: {
            PackageList: () => import('../../entities/package/ui/package-list/index.vue')
        }
    }
</script>

<template>
    <v-container class="ms-container">
        <PackageList />
    </v-container>
</template>