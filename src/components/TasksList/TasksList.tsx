import { Text, View, Window } from '@nodegui/react-nodegui';
import React from 'react';
import { taskListStyles } from './styles';
import { SingleTask } from './SingleTask/SingleTask';

export const TasksList = ({
  todos,
  changeTodoStatus,
}: {
  todos?: any;
  changeTodoStatus: (id: number, checked: boolean) => void;
}) => {
  return (
    <View style={taskListStyles}>
      {todos.map((el: any) => (
        <SingleTask key={el.id} todo={el} changeTodoStatus={changeTodoStatus} />
      ))}
    </View>
  );
};
