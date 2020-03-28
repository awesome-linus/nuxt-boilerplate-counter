import { storiesOf } from '@storybook/vue';
// @ts-ignore
import IncrementButton from '@/components/IncrementButton/index.vue';

storiesOf('IncrementButton', module).add(
  'should increment current value(But Mocked alert)',
  () => {
    return {
      components: {
        Mock: {
          extends: IncrementButton,
          methods: {
            increment() {
              alert('test');
            }
          }
        }
      },
      template: `<Mock />`
    };
  }
);
