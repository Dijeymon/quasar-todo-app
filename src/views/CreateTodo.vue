<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const todoForm = ref<HTMLFormElement | null>(null)

type NewTodo = {
  title: string
  description?: string
  done: boolean
}

let newTodo: NewTodo = reactive({
  title: '',
  description: '',
  done: false,
})

const submitForm = (): void => {
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Submitted',
    position: 'top',
  })
}

const resetForm = () => {
  newTodo.title = ''
  newTodo.description = ''
  newTodo.done = false
}
</script>

<template>
  <q-page padding class="column justify-center items-center">
    <h1 class="text-h4 q-mb-xl">Add new todo</h1>
    <q-form
      ref="todoForm"
      class="q-gutter-y-lg q-px-lg bg-grey-2"
      @submit="submitForm"
      @reset="resetForm"
    >
      <q-input
        v-model="newTodo.title"
        label="Title"
        filled
        :rules="[(v) => !!v || 'Title is required']"
      />

      <q-input v-model="newTodo.description" label="Description" filled />

      <q-toggle label="Done" v-model="newTodo.done" />

      <div class="q-pa-sm row justify-end q-mb-xs">
        <q-btn label="Reset" type="reset" color="secondary" flat class="q-ml-sm" />
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<style scoped></style>
