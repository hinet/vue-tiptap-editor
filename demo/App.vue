<template>
    <div>
        <h2>Vue Tiptap Editor Demo</h2>
        <editor v-model="content" />
        <pre>{{ content }}</pre>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const content = ref('<p>Hello, Tiptap!</p>')
</script>
<style scoped></style>