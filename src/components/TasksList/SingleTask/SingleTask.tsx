import {
  View,
  Text,
  CheckBox,
  useEventHandler,
  BoxView,
} from '@nodegui/react-nodegui';
import React from 'react';
import { Direction, QCheckBoxSignals } from '@nodegui/nodegui';
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
    <BoxView direction={Direction.LeftToRight} style={styles.task}>
      <Text style={styles.taskText}>{todo.text}</Text>

      {/* Позиционирование или флексы в данном случае
        почему-то не работают, поэтому так*/}
      <View style="flex: 1;" />
      <View style="flex: 1;" />
      <View style="flex: 1;" />
      <View style="flex: 1;" />

      <CheckBox on={buttonHandler} checked={todo.isDone} />
    </BoxView>
  );
};
