import { Window, View } from '@nodegui/react-nodegui';
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

  const doneTodos = React.useMemo(() => todos.filter((el: any) => el.isDone), [
    todos,
  ]);

  const notDoneTodos = React.useMemo(
    () => todos.filter((el: any) => !el.isDone),
    [todos],
  );

  const changeTodoStatus = (id: number, checked: boolean) => {
    changeTodos(
      todos.map((el: any) => (el.id === id ? { ...el, isDone: checked } : el)),
    );
  };

  const addTodo = () => {
    changeTodos([...todos, { id: todos.length, text: 'New task!', isDone: false }]);
  };

  return (
    <Window windowIcon={winIcon} windowTitle="Todo" minSize={minSize}>
      <View>
        <TopBar onAdd={addTodo} />
        <View style="flex: 1; flex-direction: 'row'; align-items: 'stretch';">
          <TasksList todos={notDoneTodos} changeTodoStatus={changeTodoStatus} />
          <View style="width: 1px; background: black;" />
          <TasksList todos={doneTodos} changeTodoStatus={changeTodoStatus} />
        </View>
      </View>
    </Window>
  );
};

export default MainWindow;
