import React, {useState, useEffect} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from '@emotion/native';

import {faker} from '@faker-js/faker';
import {RootStackParamList} from './stack';
import {getImage} from './utils/image';
import {Container} from './components/container';
import {Typography} from './components/typography';
import {DetailsLine} from './components/details-line';
import {DetailsTitle} from './components/details-title';
import {Cart} from './components/cart';
import {ITEM_IMAGE_SIZE} from './constants/images';
import {styles} from './styles/index';
import {ItemPrice} from './components/item-price';

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({min: 0.1, max: 10, precision: 0.1});

export const Item = () => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();
  const {params} = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  const [quantity, setQuantity] = useState<number>(5);

  useEffect(() => {
    nav.setOptions({
      title: params?.name,
    });
  }, [nav, params?.name]);

  return params ? (
    <React.Fragment>
      <ScrollView style={{backgroundColor: '#f9f9f9'}}>
        <Container>
          <ItemImage
            source={{uri: getImage(900, params.id)}}
            size={Dimensions.get('screen').width * ITEM_IMAGE_SIZE}
          />

          <Typography
            style={[styles.itemHeader, styles.fontLarg]}
            weight="bold">
            {params.name}
          </Typography>

          <ItemPrice
            salePrice={params.salePrice}
            price={params.price}></ItemPrice>
        </Container>

        <Container>
          <Typography>{params.description}</Typography>
        </Container>

        <Container>
          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{params.brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine isBold={true} label="SKU">
            {SPEC_2}
          </DetailsLine>

          <DetailsTitle>Specifications</DetailsTitle>

          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">{SPEC_4} kg</DetailsLine>
        </Container>
      </ScrollView>

      <Cart quantity={quantity} update={setQuantity} />
    </React.Fragment>
  ) : (
    <Typography>Loading ...</Typography>
  );
};

const ItemImage = styled.Image<{size: number}>(props => ({
  width: props.size,
  height: props.size,
  marginVertical: 16,
  paddingHorizontal: '5%',
  borderRadius: 9,
}));

Typography.defaultProps = {
  color: 'black',
};
