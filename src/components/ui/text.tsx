import { styled } from '@/config/stitches.config';

export const Text = styled('p', {
  // Reset
  margin: '0',
  fontFamily: '$circular',
  textAlign: 'left',
  textDecoration: 'none ',

  variants: {
    size: {
      body: {
        fontSize: '$body',
      },
      bodyLarge: {
        fontSize: '$bodyLarge',
        '@bp1': {
          fontSize: '18px',
        },
      },
      bodySmall: {
        fontSize: '$bodySmall',
      },
      bodyExtraSmall: {
        fontSize: '$bodyExtraSmall',
      },
      headline1: {
        fontSize: '$headline1',
        '@bp1': {
          fontSize: '$headline3',
        },
      },
      headline2: {
        fontSize: '$headline2',
        '@bp1': {
          fontSize: '$headline4',
        },
      },
      headline3: {
        fontSize: '$headline3',
        '@bp1': {
          fontSize: '$headline4',
        },
      },
      headline4: {
        fontSize: '$headline4',
        '@bp1': {
          fontSize: '$bodyLarge',
        },
      },
    },
    weight: {
      book: {
        fontWeight: '$book',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
      black: {
        fontWeight: '$black',
      },
    },
    color: {
      black: {
        color: '$black',
      },
      grey1: {
        color: '$textGrey1',
      },
      grey2: {
        color: '$textGrey2',
      },
      grey3: {
        color: '$textGrey3',
      },
      purple: {
        color: '$purple100',
      },
      white: {
        color: '$white',
      },
      warning: {
        color: '$textWarning',
      },
      danger: {
        color: '$danger',
      },
    },
    height: {
      '1': {
        lineHeight: '$1',
      },
      '2': {
        lineHeight: '$2',
      },
      '3': {
        lineHeight: '$3',
      },
    },
    variant: {
      mono: {
        fontFeatureSettings: "'tnum' on, 'lnum' on",
      },
    },
  },
  defaultVariants: {
    size: 'body',
    weight: 'book',
    color: 'black',
    height: '3',
  },
});
