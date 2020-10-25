import { View } from '@nodegui/react-nodegui';
import React from 'react';
import { taskListStyles } from './styles';
import { SingleTask } from './SingleTask/SingleTask';

export const TasksList = ({ todos }: { todos?: any }) => {
  return (
    <View style={taskListStyles}>
      {todos.map((el: any) => (
        <SingleTask key={el.id} todo={el} />
      ))}
    </View>
  );
};
