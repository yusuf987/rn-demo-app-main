import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen, {IListItem} from './screens/list';
import {Item} from './item';
import {SCREEN_NAME} from './constants/routes';

import {ThemeFont} from './components/typography';

//
//

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen?: IListItem;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      initialRouteName={SCREEN_NAME.LIST_SCREEN}
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: '#eee',
        },
      }}>
      <RootStack.Screen
        name={SCREEN_NAME.LIST_SCREEN}
        component={ListScreen}
        options={{title: 'Items'}}
      />
      <RootStack.Screen
        name={SCREEN_NAME.ITEM_SCREEN}
        component={Item}
        options={{title: 'Item'}}
      />
    </RootStack.Navigator>
  );
};

export default Stack;
