import type { PropertyValue } from '@stitches/react';
import { createStitches } from '@stitches/react';

export type { CSS, VariantProps } from '@stitches/react';

export const mediaBreakPoints = {
  bp1: '(max-width: 640px)',
  bp2: '(max-width: 900px)',
  bp3: '(max-width: 1090px)',
};

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#272627',
      grey: '#F5F5F7',
      textGrey: 'rgba(0, 0, 0, 0.3)',
    },
    space: {
      small: '8px',
      medium: '16px',
      big: '32px',
    },
    sizes: {
      container: '1200px',
    },
    fonts: {
      inter: 'Inter, -apple-system, system-ui, sans-serif',
    },
    fontWeights: {
      book: 400,
      bold: 600,
    },
    fontSizes: {
      body: '16px',
      headline: '24px',
    },
    lineHeights: {
      1: 1.15,
      2: 1.3,
      3: 1.55,
    },
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '6px',
    },
    shadows: {
      purple100: 'hsl(245,76%,57%)',
      purple200: 'hsla(245,76%,57%, 5%)',
    },
    zIndices: {},
    transitions: {},
  },
  utils: {
    spacingY: (value: PropertyValue<'marginBlock'>) => ({
      '& > :not(style) ~ :not(style)': {
        marginBlock: `${value} 0`,
      },
    }),
    spacingX: (value: PropertyValue<'marginInline'>) => ({
      '& > :not(style) ~ :not(style)': {
        marginInline: `${value} 0`,
      },
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: mediaBreakPoints,
});

export const colorToGradient = {
  green: 'linear-gradient(213.36deg, #BBF8F8 22.83%, #CEF6E3 89.94%)',
  blue: 'linear-gradient(213.36deg, #BBD3F8 22.83%, #CEF6F4 89.94%)',
  violet: 'linear-gradient(213.36deg, #DDBBF8 22.83%, #CED2F6 89.94%)',
  red: 'linear-gradient(213.36deg, #F8BBD1 22.83%, #ECCEF6 89.94%)',
  orange: 'linear-gradient(213.36deg, #F8D8BB 22.83%, #F6CECE 89.94%)',
  yellow: 'linear-gradient(213.36deg, #F8F6BB 22.83%, #F6E1CE 89.94%)',
};

export const ease = [0.165, 0.84, 0.44, 1];
