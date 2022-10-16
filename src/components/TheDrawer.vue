<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const drawer = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <q-drawer v-model="drawer" side="left" elevated>
    <!-- drawer content -->
  </q-drawer>
</template>

<style scoped></style>
