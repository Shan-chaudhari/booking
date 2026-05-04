import { TextStyle } from 'react-native';

export const Typography = {
  // Heading styles
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
  } as TextStyle,
  
  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  } as TextStyle,
  
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  } as TextStyle,
  
  h4: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  } as TextStyle,
  
  // Body styles
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  } as TextStyle,
  
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  } as TextStyle,
  
  // Caption styles
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  } as TextStyle,
  
  // Button styles
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  } as TextStyle,
  
  buttonSmall: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  } as TextStyle,
  
  // Input styles
  input: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  } as TextStyle,
  
  // Link styles
  link: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    textDecorationLine: 'underline',
  } as TextStyle,
};
