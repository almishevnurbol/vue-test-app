<script>
    export default {
        components: {
            PackageList: () => import('@/entities/package/ui/package-list/index.vue')
        }
    }
</script>

<template>
    <v-app>
        <PackageList />
    </v-app>
</template>