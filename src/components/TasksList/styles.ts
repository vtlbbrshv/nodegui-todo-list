import { create } from 'nodegui-stylesheet';

export const styles = create({
  list: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'flex-start',
  },
  task: {
    background: '#e3ffff',
    border: '1px solid',
    borderRadius: 10,
    paddingVertical: 10,
    margin: 5,
    maxHeight: 15,
    minHeight: 15,
  },
  taskText: {
    textAlign: 'left',
    color: 'black',
  },
});
