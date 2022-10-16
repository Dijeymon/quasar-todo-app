<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggleDrawer'): void
}>()
</script>

<template>
  <q-header bordered class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="emit('toggleDrawer')" />
      <q-toolbar-title> Todo App </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
