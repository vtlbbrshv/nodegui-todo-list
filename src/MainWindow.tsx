import { Window, View, ScrollArea } from '@nodegui/react-nodegui';
import React from 'react';
import { QIcon } from '@nodegui/nodegui';
import nodeguiIcon from '../assets/nodegui.jpg';
import { TasksList } from './components/TasksList/TasksList';
import initialTodos from './todos';
import TopBar from './components/TopBar/TopBar';

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

const MainWindow = () => {
  const [todos, changeTodos] = React.useState<any>(initialTodos);

  const doneTodos = todos.filter((el: any) => el.isDone);
  const notDoneTodos = todos.filter((el: any) => !el.isDone);

  const changeTodoStatus = (id: number, checked: boolean) => {
    changeTodos(
      todos.map((el: any) => (el.id === id ? { ...el, isDone: checked } : el)),
    );
  };

  const addTodo = () => {
    changeTodos([
      ...todos,
      { id: todos.length + 1, text: 'New task!', isDone: false },
    ]);
  };

  // TODO: переписать на гридвью
  return (
    <Window windowIcon={winIcon} windowTitle="Todo" minSize={minSize}>
      <View style="flex: 1; flex-direction: 'column'; align-items: 'stretch'">
        <TopBar onAdd={addTodo} />

        <ScrollArea style="flex: 1">
          <View style='flex: 1; flex-direction: "row";'>
            <TasksList
              todos={notDoneTodos}
              changeTodoStatus={changeTodoStatus}
            />
            <View style="width: 1px; background: black;" />
            <TasksList todos={doneTodos} changeTodoStatus={changeTodoStatus} />
          </View>
        </ScrollArea>
      </View>
    </Window>
  );
};

export default MainWindow;
