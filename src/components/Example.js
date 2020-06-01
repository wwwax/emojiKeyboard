import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import EmojiBoard from 'react-native-emoji-board';

export const Example = ({ setText }) => {
  const [show, setShow] = React.useState(true);

  const onClick = emoji => {
    setText(state => state.concat(emoji.code));
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text>Hello</Text>
      </TouchableOpacity>

      <EmojiBoard
        showBoard={show}
        onClick={onClick}
        tabBarPosition="top"
        hideBackSpace={true}
      />
    </View>
  );
};
