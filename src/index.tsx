import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import styles from './styles';

interface OtpTimerProps {
  /**
   * timer showing minutes
   */
  minutes?: number;
  /**
   * timer showing seconds
   */
  seconds?: number;
  /**
   * styling of otp timer
   */
  timerStyle?: StyleProp<TextStyle>;
  /**
   * text content of resend button
   */
  resendButtonText?: string;
  /**
   * styling of resend button
   */
  resendButtonStyle: StyleProp<ViewStyle>;
  /**
   * styling of resend button text
   */
  resendButtonTextStyle: StyleProp<TextStyle>;
  /**
   * action to perform after clicking resend button
   */
  resendButtonAction: () => void;
}

const RnOtpTimer = (props: OtpTimerProps): JSX.Element => {
  const [minutes, setMinutes] = useState<number>(
    props.minutes ? props.minutes : 0
  );
  const [seconds, setSeconds] = useState<number>(
    props.seconds ? props.seconds : 30
  );
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

  useEffect(() => {
    let countDown: NodeJS.Timeout;
    if (isTimerActive) {
      countDown = setInterval(() => {
        if (!seconds) {
          if (!minutes) {
            clearInterval(countDown);
          } else {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          }
        }
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
    }

    if (!minutes && !seconds) {
      setIsTimerActive(false);
    }
    return () => clearInterval(countDown);
  }, [seconds, minutes, isTimerActive]);

  const handleButton = () => {
    setMinutes(props.minutes ? props.minutes : 0);
    setSeconds(props.seconds ? props.seconds : 30);
    setIsTimerActive(true);
    props.resendButtonAction();
  };

  return (
    <View style={styles.otpViewStyle}>
      {!minutes && !seconds ? (
        props.resendButtonText ? (
          <TouchableOpacity
            style={props.resendButtonStyle}
            onPress={handleButton}
          >
            <Text style={props.resendButtonTextStyle}>
              {props.resendButtonText}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={props.resendButtonStyle}
            onPress={handleButton}
          >
            <Text style={props.resendButtonTextStyle}>Resend</Text>
          </TouchableOpacity>
        )
      ) : (
        <Text style={props.timerStyle}>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      )}
    </View>
  );
};

export default RnOtpTimer;
