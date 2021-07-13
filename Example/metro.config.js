/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const Resolver = require('metro-resolver');

const reactNativeOtpTimerRoot = path.resolve(__dirname, '..');

module.exports = {
  watchFolders: [reactNativeOtpTimerRoot],
  resolver: {
    blacklistRE: blacklist([
      new RegExp(`${reactNativeOtpTimerRoot}/node_modules/react-native/.*`),
    ]),
    // Make sure we use the local copy of react and react-native
    resolveRequest: (context, realModuleName, platform, moduleName) => {
      const clearContext = {...context, resolveRequest: undefined};
      const module =
        moduleName === 'react' || moduleName === 'react-native'
          ? path.join(__dirname, 'node_modules', realModuleName)
          : realModuleName;
      return Resolver.resolve(clearContext, module, platform);
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
