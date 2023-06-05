import {View} from 'react-native';
import {Typography} from './typography';
import {styles} from '../styles';

export const ItemPrice: React.FC<{
  salePrice: string;
  price: string;
  size?: number;
}> = ({salePrice, price, size = 18}) => {
  return (
    <View>
      {salePrice ? (
        <Typography>
          <Typography
            style={[styles.discounted, styles.itemPrice]}
            fontSize={size}>
            SAR {price}
          </Typography>
          <Typography fontSize={size} color="red">
            {'  '}
            SAR {price}
          </Typography>
        </Typography>
      ) : (
        <Typography color="black" fontSize={size}>
          SAR {price}
        </Typography>
      )}
    </View>
  );
};
