import { View, Text, CheckBox, useEventHandler } from '@nodegui/react-nodegui';
import React from 'react';
import { QCheckBoxSignals } from '@nodegui/nodegui';
import { styles } from '../styles';

export const SingleTask = ({
  todo,
  changeTodoStatus,
}: {
  todo: { text: string; isDone: boolean; id: number };
  changeTodoStatus: (id: number, checked: boolean) => void;
}) => {
  const buttonHandler = useEventHandler<QCheckBoxSignals>(
    {
      clicked: (checked) => {
        changeTodoStatus(todo.id, checked);
      },
    },
    [changeTodoStatus],
  );

  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{todo.text}</Text>
      <CheckBox on={buttonHandler} checked={todo.isDone} />
    </View>
  );
};
