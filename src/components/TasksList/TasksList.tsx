import { BoxView } from '@nodegui/react-nodegui';
import React from 'react';
import { SingleTask } from './SingleTask/SingleTask';
import { Direction } from '@nodegui/nodegui';

export const TasksList = ({
  todos,
  changeTodoStatus,
}: {
  todos?: any;
  changeTodoStatus: (id: number, checked: boolean) => void;
}) => {
  return (
    <BoxView direction={Direction.TopToBottom}>
      {todos.map((el: any) => (
        <SingleTask key={el.id} todo={el} changeTodoStatus={changeTodoStatus} />
      ))}
    </BoxView>
  );
};
