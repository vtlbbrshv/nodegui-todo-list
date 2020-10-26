import { View } from '@nodegui/react-nodegui';
import React from 'react';
import { styles } from './styles';
import { SingleTask } from './SingleTask/SingleTask';

export const TasksList = ({
  todos,
  changeTodoStatus,
}: {
  todos?: any;
  changeTodoStatus: (id: number, checked: boolean) => void;
}) => {
  return (
    <View style={styles.list}>
      {todos.map((el: any) => (
        <SingleTask key={el.id} todo={el} changeTodoStatus={changeTodoStatus} />
      ))}
    </View>
  );
};
