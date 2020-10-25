import { Window, hot } from '@nodegui/react-nodegui';
import React from 'react';
import { QIcon } from '@nodegui/nodegui';
import nodeguiIcon from '../assets/nodegui.jpg';
import { TasksList } from './components/TasksList/TasksList';
import initialTodos from './todos';

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

// <Text>{'<hr/>'}</Text>

const App = () => {
  const [todos, changeTodos] = React.useState<any>(initialTodos);

  return (
    <Window windowIcon={winIcon} windowTitle="Todo" minSize={minSize}>
      <TasksList todos={todos} />
    </Window>
  );
};

export default hot(App);
