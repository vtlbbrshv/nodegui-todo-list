import { Window, hot, Text, View } from '@nodegui/react-nodegui';
import React from 'react';
import { QIcon } from '@nodegui/nodegui';
import nodeguiIcon from '../assets/nodegui.jpg';
import { TasksList } from './components/TasksList/TasksList';
import initialTodos from './todos';

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

const App = () => {
  const [todos, changeTodos] = React.useState<any>(initialTodos);
  console.log('STATE: ', todos);
  const doneTodos = React.useMemo(() => todos.filter((el: any) => el.isDone), [
    todos,
  ]);

  const notDoneTodos = React.useMemo(
    () => todos.filter((el: any) => !el.isDone),
    [todos],
  );

  // функция почему-то юзает старый список туду
  // возможно дело в том что в ивент хендлер у чекбокса передается именно колбек
  const changeTodoStatus = (id: number, checked: boolean) => {
    console.log('FUNCTION: ', todos);
    changeTodos([
      ...todos.map((el: any) =>
        el.id === id ? { ...el, isDone: checked } : el,
      ),
    ]);
  };

  return (
    <Window windowIcon={winIcon} windowTitle="Todo" minSize={minSize}>
      <View style="flex: 1; flex-direction: 'row'; align-items: 'stretch';">
        <TasksList todos={notDoneTodos} changeTodoStatus={changeTodoStatus} />
        <View style="width: 1px; background: black;" />
        <TasksList todos={doneTodos} changeTodoStatus={changeTodoStatus} />
      </View>
    </Window>
  );
};

export default hot(App);
