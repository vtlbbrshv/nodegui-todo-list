import { View, Button, useEventHandler } from '@nodegui/react-nodegui';
import React from 'react';
import { QPushButtonSignals } from '@nodegui/nodegui';

const TopBar = ({ onAdd }: { onAdd: () => void }) => {
  const buttonHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => {
        onAdd();
      },
    },
    [onAdd],
  );

  return (
    <View maxSize={{ width: 500, height: 30 }} style="height: 30px;">
      <Button on={buttonHandler} text="+" />
    </View>
  );
};

export default TopBar;
