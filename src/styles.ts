import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  otpViewStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  otpViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
