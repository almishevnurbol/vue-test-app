<template>
  <v-app-bar >
      <v-row
        class="d-flex justify-center"
      >
        <v-container>
          <SearchInuput />
        </v-container>
      </v-row>
  </v-app-bar>
</template>

<script>

export default {
  name: 'TheAppHeader',
  components: {
    SearchInuput: () => import('@/features/search/ui.vue')
  }
}
</script>
