import * as amplitude from '@amplitude/analytics-browser';

const key = '0693400da5c26ab8f7de1da64e5436c3';
amplitude.init(key);

export const trackUserEvent = (eventType, eventProperties) => {
  amplitude.track(eventType, eventProperties);
};
