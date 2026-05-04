import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from './colors';

export const CommonStyles = {
  // Container styles
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  } as ViewStyle,
  
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  } as ViewStyle,
  
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  } as ViewStyle,
  
  // Card styles
  card: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  
  // Button styles
  button: {
    backgroundColor: Colors.buttonPrimary,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  } as ViewStyle,
  
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.buttonPrimary,
    minHeight: 50,
  } as ViewStyle,
  
  buttonDisabled: {
    backgroundColor: Colors.buttonDisabled,
  } as ViewStyle,
  
  // Input styles
  inputContainer: {
    marginBottom: 16,
  } as ViewStyle,
  
  input: {
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: Colors.inputBackground,
    color: Colors.textPrimary,
  } as ViewStyle,
  
  inputFocused: {
    borderColor: Colors.inputBorderFocused,
  } as ViewStyle,
  
  inputError: {
    borderColor: Colors.error,
  } as ViewStyle,
  
  // Text styles
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  
  buttonTextSecondary: {
    color: Colors.buttonPrimary,
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  
  buttonTextDisabled: {
    color: Colors.textDisabled,
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  
  errorText: {
    color: Colors.error,
    fontSize: 14,
    marginTop: 4,
  } as TextStyle,
  
  // Shadow styles
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  
  shadowLarge: {
    shadowColor: Colors.shadowDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 6,
  } as ViewStyle,
  
  // Spacing utilities
  marginSmall: {
    margin: 8,
  } as ViewStyle,
  
  marginMedium: {
    margin: 16,
  } as ViewStyle,
  
  marginLarge: {
    margin: 24,
  } as ViewStyle,
  
  paddingSmall: {
    padding: 8,
  } as ViewStyle,
  
  paddingMedium: {
    padding: 16,
  } as ViewStyle,
  
  paddingLarge: {
    padding: 24,
  } as ViewStyle,
};

export const createStyleSheet = <T extends Record<string, ViewStyle | TextStyle>>(styles: T) => {
  return StyleSheet.create(styles);
};
