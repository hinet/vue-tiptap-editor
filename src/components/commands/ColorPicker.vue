<template>
    <span class="color-mark">
        <node-view-wrapper :as="'span'" :style="{ color: props.node.attrs.color }">
            <!-- 显示一段文本（可以是插槽内容） -->
            <span @click="togglePicker">
                <slot />
            </span>

            <div v-if="showPicker" class="color-options">
                <div v-for="color in colors" :key="color" class="color-option" :style="{ backgroundColor: color }"
                    @click="applyColor(color)"></div>
            </div>
        </node-view-wrapper>
    </span>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { nodeViewProps } from '@tiptap/vue-3';

const props = defineProps(nodeViewProps);

const showPicker = ref(false);
const colors = [
    '#FF6347', '#FFD700', '#32CD32', '#1E90FF', '#8A2BE2',
    '#FF1493', '#A52A2A', '#D3D3D3', '#000000', '#FFFFFF',
];

const togglePicker = () => {
    showPicker.value = !showPicker.value;
};

const applyColor = (color: string) => {
    props.updateAttributes({ color });
    showPicker.value = false;
};
</script>

<style scoped>
.color-options {
    position: absolute;
    margin-top: 4px;
    background: white;
    border: 1px solid #ccc;
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.color-option {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
}
</style>
