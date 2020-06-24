function convertUTCToLocaleTimezone(date) {
  /* This is to convert the date to the current timezone */
  let offset = new Date().getTimezoneOffset() * 60000;
  return new Date(date - offset);
}

function beautifulyDateTime(dateTime) {
  let formattedString =
    dateTime.substring(0, '####-##-##'.length) +
    '   ' +
    dateTime.substring(11, 16);

  return formattedString;
}

var LocalTimeUtils = {
  convertUTCToLocaleTimezone: convertUTCToLocaleTimezone,
  beautifulyDateTime: beautifulyDateTime,
};

module.exports = LocalTimeUtils;
