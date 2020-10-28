import { GridView } from '@nodegui/react-nodegui';
import { GridRow } from '@nodegui/react-nodegui/dist/components/GridView/GridRow';

import React from 'react';
import { SingleTask } from './SingleTask/SingleTask';
import { GridColumn } from '@nodegui/react-nodegui/dist/components/GridView/GridColumn';

export const TasksList = ({
  todos,
  changeTodoStatus,
}: {
  todos?: any;
  changeTodoStatus: (id: number, checked: boolean) => void;
}) => {
  // GridRow к сожалению не ререндерится при изменении пропсов,
  // поэтому если просто промапить массив, то работать не будет
  // в rowProps всегда будет лежать первая версия объекта

  const rowProps = {
    '0': { stretch: 1 },
    '1': { stretch: 1 },
    '2': { stretch: 1 },
    '3': { stretch: 1 },
    '4': { stretch: 1 },
    '5': { stretch: 1 },
    '6': { stretch: 1 },
    '7': { stretch: 1 },
    '8': { stretch: 1 },
    '9': { stretch: 1 },
    '10': { stretch: 1 },
    '11': { stretch: 1 },
    '12': { stretch: 1 },
    '13': { stretch: 1 },
    '14': { stretch: 1 },
  };

  return (
    <GridView rowProps={rowProps}>
      {todos.map((el: any) => (
        <GridRow key={el.id}>
          <GridColumn>
            <SingleTask
              key={el.id}
              todo={el}
              changeTodoStatus={changeTodoStatus}
            />
          </GridColumn>
        </GridRow>
      ))}
    </GridView>
  );
};
