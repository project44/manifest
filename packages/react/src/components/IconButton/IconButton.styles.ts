import { Button } from '../Button';
import { styled } from '../../styles';

export const StyledIconButton = styled(Button, {
  justifyContent: 'center',

  variants: {
    size: {
      medium: {
        padding: '$small',
      },
      small: {
        padding: '$x-small',
      },
    },
  },
});
