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
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item :to="{ name: 'CreateTodo' }" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="create" />
          </q-item-section>

          <q-item-section> Create Todo </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section> All Todos </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped></style>
