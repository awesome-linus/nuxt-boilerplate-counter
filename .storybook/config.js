import { configure } from '@storybook/vue';

const req = require.context('../stories', true, /\.stor(y|ies)\.tsx?$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
