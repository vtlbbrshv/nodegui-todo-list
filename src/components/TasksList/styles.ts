import { create } from 'nodegui-stylesheet';

export const styles = create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  task: {
    flex: 1,
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: '#e3ffff',
    border: '1px solid',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    margin: 5,
  },
  taskText: {
    textAlign: 'left',
    color: 'black',
  },
});
