import { styled } from '@/config/stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  margin: 'auto',

  variants: {
    size: {
      '1': {
        maxWidth: '$container',
      },
    },
    padding: {
      true: {
        paddingTop: 120,
      },
      false: {
        paddingTop: 0,
      },
    },
  },
  defaultVariants: {
    size: '1',
    padding: false,
  },
});
