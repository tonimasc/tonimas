import { styled } from '@/config/stitches.config';
import { Text } from './text';

export const Link = styled('a', Text, {
  display: 'inline-block',
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: 'black',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  cursor: 'pointer',
  transition: ' 120ms ease-in 0s',

  variants: {
    hover: {
      opacityNone: {
        '&:hover': {
          opacity: 1,
        },
      },
      opacityMedium: {
        '&:hover': {
          opacity: 0.8,
        },
      },
      opacityHigh: {
        '&:hover': {
          opacity: 0.6,
        },
      },
    },
  },
  defaultVariants: {
    hover: 'opacityHigh',
  },

  '&:focus': {
    outlineWidth: '0px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
});
