# rn-otp-timer

A standalone , fully customizable Otp timer you can easily use.

## Installation

```sh
npm install rn-otp-timer
```

## Usage

```js
import RnOtpTimer from 'rn-otp-timer';

<RnOtpTimer
  minutes={0}
  seconds={40}
  resendButtonStyle={styles.button}
  resendButtonTextStyle={styles.buttonText}
  resendButtonAction={() => {
    console.log('otp resent!');
  }}
/>;
```

## Parameters

| Parameter             | Required | Description                                       |
| --------------------- | -------- | ------------------------------------------------- |
| minutes               | No       | Number of minutes for which the timer must be set |
| seconds               | No       | Number of seconds for which the timer must be set |
| resendButtonText      | No       | Set resend button text content                    |
| resendButtonAction    | Yes      | Callback when resend button is clicked            |
| timerStyle            | No       | Props for styling timer content                   |
| resendButtonStyle     | Yes      | Props for styling resend button                   |
| resendButtonTextStyle | Yes      | Props for styling resend button text              |

## Development workflow

To get started with the project, run `yarn` in the root directory to install the required dependencies for each package:

```sh
yarn
```

> While it's possible to use [`npm`](https://github.com/npm/cli), the tooling is built around [`yarn`](https://classic.yarnpkg.com/), so you'll have an easier time if you use `yarn` for development.

While developing, you can run the [example app](/example/) to test your changes.

To run the example app on Android, go to example app directory and run:

```sh
yarn android
```

## Contributing

Pull requests are welcome . For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Credits

[react-native-bob-builder](https://github.com/callstack/react-native-builder-bob)
