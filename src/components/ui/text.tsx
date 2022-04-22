import { styled } from '@/config/stitches.config';

export const Text = styled('p', {
  // Reset
  margin: '0',
  fontFamily: '$inter',
  textAlign: 'left',
  textDecoration: 'none ',

  variants: {
    size: {
      body: {
        fontSize: '$body',
      },
      headline: {
        fontSize: '$headline',
      },
    },
    weight: {
      book: {
        fontWeight: '$book',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    color: {
      black: {
        color: '$black',
      },
      grey: {
        color: '$black',
      },
    },
    height: {
      '1': {
        lineHeight: '$1',
      },
    },
  },
  defaultVariants: {
    size: 'body',
    weight: 'book',
    color: 'black',
    height: '1',
  },
});
