<template>
    <div class="tiptap-toolbar">
        <Compact block :wrap="true">
            <Button size="small" v-for="btn in tools" @click="btn.action(editor)" :key="btn.icon" class="toolbar-btn">
                <component :is="icon(btn.icon)" />
            </Button>
        </Compact>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { IconMap } from '../icons/index'
import { Button, Compact } from 'ant-design-vue';

const props = defineProps<{
    editor: any,
    buttons: Array<{
        icon: string,
        action: (editor: any) => void
    }>
}>()

const tools = computed(() => props.buttons)

const icon = (name: string) => IconMap[name]
</script>

<style scoped></style>