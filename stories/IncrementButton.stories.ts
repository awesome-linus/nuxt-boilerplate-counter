import { storiesOf } from '@storybook/vue';
import IncrementButton from '../src/components/IncrementButton/index';

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
