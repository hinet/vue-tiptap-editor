
import TiptapColor from '@tiptap/extension-color';
import { VueNodeViewRenderer } from "@tiptap/vue-3";
import ColorPicker from '../components/commands/ColorPicker.vue';

const Color = TiptapColor.extend({
  inline() {
		return true;
	},
	group() {
		return "inline";
	},

  addAttributes() {
    return {
      color: {
        default: '#000000',
        parseHTML: (element: { style: { color: any; }; }) => element.style.color || '#000000',
        renderHTML: (attrs: { color: any; }) => {
          return {
            style: `color: ${attrs.color}`,
          };
        },
      },
      display:{
        default: 'inline',
        parseHTML: () => {
          return 'inline';
        },
        renderHTML: (attributes: { display: any; }) => {
          return {
            ["data-display"]: attributes.display,
          };
        },
      }
    };
  },

  addNodeView() {
		return VueNodeViewRenderer(ColorPicker);
	},

  parseHTML() {
    return [
      {
        tag: 'span[style*="color"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setColor: (color: string) => ({ chain }) => {
        return chain().focus().setColor(color).run();
      },
    };
  },
});

export default Color;