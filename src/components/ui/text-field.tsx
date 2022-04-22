import { styled } from '@/config/stitches.config';

export const TextField = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '#FBFBFB',
  boxShadow: 'inset 0 0 0 1px #ECEBEC',
  color: '$black',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px #ECEBEC, inset 0 0 0 100px #ECEBEC',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$circular',
    color: '$black',
  },

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $purple100, 0px 0px 0px 1px $purple100',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $purple100, 0px 0px 0px 1px $purple100, inset 0 0 0 100px $purple100',
    },
  },
  '&::placeholder': {
    color: '#7D7D7D',
  },
  '&:disabled': {
    backgroundColor: '#FBFBFB',
    color: '#7D7D7D',
    cursor: 'not-allowed',
  },
  '&:read-only': {
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px #ECEBEC',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '48px',
        fontSize: '$body1',
        px: '20px',
        lineHeight: '$1',
        '&:-webkit-autofill::first-line': {
          fontSize: '$body1',
        },
      },
    },
    invalid: {
      true: {
        boxShadow: 'inset 0px 0px 0px 1px #E43D3D, 0px 0px 0px 1px #E43D3D',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px #E43D3D, 0px 0px 0px 1px #E43D3D',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});
