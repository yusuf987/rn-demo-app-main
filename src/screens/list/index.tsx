import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';

export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}

// TODO: ustilize FlatList property onEndReached & onEndReachedThreshold to load items lazyly(eg: load +50 records on each scroll end)

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <FlatList
        data={ListData}
        renderItem={({item}) => <ListItem key={item.id} item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
