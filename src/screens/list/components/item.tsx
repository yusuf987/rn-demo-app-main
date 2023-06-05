import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getImage} from '../../../utils/image';
import {Typography} from '../../../components/typography';
import {RootStackParamList} from '../../../stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IListItem} from '../index';
import {Avatar} from '../../../components/avatar';
import {SCREEN_NAME} from '../../../constants/routes';
import {THUMBNAIL_SIZE} from '../../../constants/images';
import {styles} from '../../../styles/index';
import {ItemPrice} from '../../../components/item-price';

export const ListItem: React.FC<{item: IListItem}> = ({item}) => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();

  return (
    <TouchableOpacity
      style={styles.ListItemContainer}
      onPress={() => nav.navigate(SCREEN_NAME.ITEM_SCREEN, item)}>
      <Avatar
        style={styles.image}
        source={{uri: getImage(THUMBNAIL_SIZE, item.id)}}
      />

      <View style={styles.flex}>
        <Typography style={styles.itemHeader}>{item.name}</Typography>

        <ItemPrice salePrice={item.salePrice} price={item.price} size={16} />

        <Typography style={styles.itemBrand}>Brand: {item.name}</Typography>
      </View>
    </TouchableOpacity>
  );
};
