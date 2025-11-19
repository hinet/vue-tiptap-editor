<template>
    <div class="tiptap-editor">
        <Toolbar :editor="editor" :buttons="toolbar" />
        <editor-content :editor="editor" class="editor-content" />
    </div>
</template>

<script lang="ts" setup>
import { Editor, EditorContent } from '@tiptap/vue-3'
import type { AnyExtension } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar.vue'
import Color from "@tiptap/extension-color";

// 控制按钮的禁用状态
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const props = defineProps<{
    modelValue?: string
    toolbar?: Array<{ icon: string; action: (editor: Editor) => void }>
    extensions?: AnyExtension[]
}>()

const toolbar = props.toolbar || [
    { icon: 'bold', action: (editor: Editor) => editor.chain().focus().toggleBold().run() },
    { icon: 'italic', action: (editor: Editor) => editor.chain().focus().toggleItalic().run() },
    { icon: 'underline', action: (editor: Editor) => editor.chain().focus().setUnderline?.().run?.() },
    { icon: 'strike', action: (editor: Editor) => editor.chain().focus().toggleStrike().run() },
    //{ icon: 'link', action: (editor: Editor) => editor.chain().focus().setLink().run() },
    { icon: 'fontColors', action: (editor: Editor) => editor.chain().focus().toggleColor().run() },
    { icon: 'heading', action: (editor: Editor) => editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { icon: 'orderedList', action: (editor: Editor) => editor.chain().focus().toggleOrderedList().run() },
    { icon: 'unorderedList', action: (editor: Editor) => editor.chain().focus().toggleUnderline().run() },
    { icon: 'blockquote', action: (editor: Editor) => editor.chain().focus().toggleBlockquote().run() },
]

const editor = new Editor({
    content: props.modelValue || '',
    extensions: [
        StarterKit,
        Color,
        ...(props.extensions || [])
    ],
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML())
    }
})
</script>

<style scoped></style>
