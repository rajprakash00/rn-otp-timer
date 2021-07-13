/**
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

// @ts-ignore
import RnOtpTimer from 'rn-otp-timer';

const App = () => {
  return (
    <View style={styles.container}>
      <RnOtpTimer
        minutes={0}
        seconds={40}
        timerStyle={styles.timer}
        resendButtonAction={() => {
          console.log('otp resent!');
        }}
        resendButtonText="Resend OTP"
        resendButtonStyle={styles.button}
        resendButtonTextStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  timer: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default App;
