<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import TheDrawer from './components/TheDrawer.vue'

const leftDrawer = ref(false)

const toggleDrawer = () => {
  leftDrawer.value = !leftDrawer.value
}
</script>

<template>
  <q-layout view="lHh lpR lFf">
    <TheNavbar @toggle-drawer="toggleDrawer" />

    <TheDrawer v-model="leftDrawer" />

    <q-page-container>
      <RouterView />
    </q-page-container>

    <TheFooter />
  </q-layout>
</template>

<style></style>
