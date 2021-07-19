const env = require('env-var');

export class AppConstants {
  static FIREBASE_API_KEY: string = env
    .get('REACT_APP_FIREBASE_API_KEY')
    .asString();
  static FIREBASE_AUTH_DOMAIN: string = env
    .get('REACT_APP_FIREBASE_AUTH_DOMAIN')
    .asString();
  static FIREBASE_PROJECT_ID: string = env
    .get('REACT_APP_FIREBASE_PROJECT_ID')
    .asString();
  static FIREBASE_STORAGE_BUCKET: string = env
    .get('REACT_APP_FIREBASE_STORAGE_BUCKET')
    .asString();
  static FIREBASE_MESSAGING_SENDER_ID: string = env
    .get('REACT_APP_FIREBASE_MESSAGING_SENDER_ID')
    .asString();
  static FIREBASE_APP_ID: string = env
    .get('REACT_APP_FIREBASE_APP_ID')
    .asString();
  static FIREBASE_MEASUREMENT_ID: string = env
    .get('REACT_APP_FIREBASE_MEASUREMENT_ID')
    .asString();
}
