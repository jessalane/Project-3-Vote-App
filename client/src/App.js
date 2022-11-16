import React from 'react';
import usePoll from 'react-use-poll';

export default function MyComponent({ prop1 }) {
  usePoll(() => {
    console.log('Hello world!');
  }, [prop1]);
}