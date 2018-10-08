export interface MomentConfig {
  months: string[];
  monthsShort: string[];
  monthsParseExact: string;
  weekdays: string[];
  weekdaysShort: string[];
  weekdaysMin: string[];
  weekdaysParseExact: string;
  longDateFormat: LongDateFormat;
  calendar: Calendar;
  relativeTime: RelativeTime;
  dayOfMonthOrdinalParse: string;
  ordinal: string;
  meridiemParse: string;
  isPM: string;
  meridiem: string;
  week: Week;
}

interface Week {
  dow: string;
  doy: string;
}

interface RelativeTime {
  future: string;
  past: string;
  s: string;
  m: string;
  mm: string;
  h: string;
  hh: string;
  d: string;
  dd: string;
  M: string;
  MM: string;
  y: string;
  yy: string;
}

interface Calendar {
  sameDay: string;
  nextDay: string;
  nextWeek: string;
  lastDay: string;
  lastWeek: string;
  sameElse: string;
}

interface LongDateFormat {
  LT: string;
  LTS: string;
  L: string;
  LL: string;
  LLL: string;
  LLLL: string;
}
