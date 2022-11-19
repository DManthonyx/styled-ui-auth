import React from 'react';
import { storiesOf } from '@storybook/react';

import HelloWorld from '../components/HelloWorld';

const stories = storiesOf('Hello world', module);

stories.add("Hello world", () => {
    return (<HelloWorld />)
});