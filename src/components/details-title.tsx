import styled from '@emotion/native';
import {Typography} from './typography';

export const DetailsTitle = styled(Typography)({
  marginTop: 12,
});

DetailsTitle.defaultProps = {
  weight: 'bold',
  fontSize: 16,
  color: 'black',
};
