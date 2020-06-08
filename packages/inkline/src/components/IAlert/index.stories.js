import { withKnobs, text, select } from '@storybook/addon-knobs';
import IAlert from '@inkline/inkline/src/components/IAlert';

export default {
    title: 'IAlert',
    decorators: [ withKnobs ]
};

// Assign `props` to the story's component, calling
// knob methods within the `default` property of each prop,
// then pass the story's prop data to the component’s prop in
// the template with `v-bind:` or by placing the prop within
// the component’s slot.
export const exampleWithKnobs = () => ({
    components: { IAlert },
    props: {
        variant: {
            default: select('Variant', false)
        },
        text: {
            default: text('Text', 'Hello Storybook')
        }
    },
    template: `<i-alert :variant="variant">{{ text }}</i-alert>`
});
