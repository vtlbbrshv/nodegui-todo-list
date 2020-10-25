import { View, Text } from '@nodegui/react-nodegui';
import React from 'react';
import { singleTaskStyles, textStyles } from './styles';

export const SingleTask = ({
  todo,
}: {
  todo: { text: string; isDone: boolean; id: number };
}) => {
  return (
    <View style={singleTaskStyles}>
      <Text style={textStyles}>{todo.text}</Text>
    </View>
  );
};
