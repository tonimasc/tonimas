import { styled } from '@/config/stitches.config';

export const Button = styled('button', {
  // Reset
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  appearance: 'none',
  display: 'inline-flex',
  lineHeight: '1',
  margin: '0',
  padding: '0',
  border: '0',
  outline: 'none',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  //Shared
  borderRadius: '$1',
  height: '$42',
  fontSize: '$button',
  px: '$medium',
  '@bp1': {
    height: '38px',
    padding: '0px 12px',
  },

  '&:disabled': {
    backgroundColor: '#F3F3F3',
    color: '#7D7D7D',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      white: {
        backgroundColor: '$white',
        color: '$black',
        '@bp1': {
          height: '38px',
          px: '12px',
          fontSize: '14px',
        },
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
      },
      black: {
        backgroundColor: '$black',
        color: '$white',
        '@bp1': {
          height: '38px',
          px: '12px',
          fontSize: '14px',
        },
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $purple100',
          backgroundColor: '$black',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
      },
      gray: {
        backgroundColor: '$gray100',
        color: '#4C4C4C',
        '@bp1': {
          height: '38px',
          px: '12px',
          fontSize: '14px',
        },
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
      },
      outlineGray: {
        backgroundColor: '$white',
        color: '#706D70',
        boxShadow: '-1px 2px 2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #E2E2E2',
        transition: ' 120ms ease-in 0s',
        '&:hover': {
          boxShadow: '-1px 2px 2px rgba(0, 0, 0, 0)',
          background: '#F8F8F8',
        },
        '&:active': {
          boxShadow: '-1px 2px 2px rgba(0, 0, 0, 0)',
        },
        '&:focus': {
          boxShadow: '-1px 2px 2px rgba(0, 0, 0, 0)',
        },
      },
      danger: {
        backgroundColor: '#E43D3D',
        color: '$white',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px #E43D3D',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 1px #E43D3D',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px #E43D3D',
        },
      },
      purplePrimary: {
        backgroundColor: '$purple100',
        color: '$white',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $purple200',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 1px $purple200',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $purple200',
        },
        '&:disabled': {
          opacity: 0.25,
          background: '$purple100',
          color: '$white',
        },
      },
      purpleSecondary: {
        backgroundColor: '$purple200',
        color: '$purple100',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
        '&:active': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $purple100',
        },
      },
      transparent: {
        backgroundColor: 'transparent',
        color: '$black',

        '&:hover': {},
        '&:active': {},
        '&:focus': {},
      },
    },
  },

  defaultVariants: {
    variant: 'black',
  },
});
