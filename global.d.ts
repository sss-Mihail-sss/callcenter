// Use type safe message keys with `next-intl`
type Messages = typeof import('./messages/ro.json');

declare interface IntlMessages extends Messages {
}
