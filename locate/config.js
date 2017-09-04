moment.locale('mn', {
  months: '1-р сар,2-р сар,3-р сар,4-р сар,5-р сар,6-р сар,7-р сар,8-р сар,9-р сар,10-р сар,11-р сар,12-р сар'.split(','),
  monthsShort: '1 сар,2 сар,3 сар,4 сар,5 сар,6 сар,7 сар,8 сар,9 сар,10 сар,11 сар,12 сар'.split(','),
  weekdays: 'Ням,Даваа,Мягмар,Лхагва,Пүрэв,Баасан,Бямба'.split(','),
  weekdaysShort: 'Ня,Да,Мя,Лха,Пү,Ба,Бя'.split(','),
  weekdaysMin : 'Ня,Да,Мя,Лха,Пү,Ба,Бя'.split(','),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'M сар D өдөр',
    LL: 'YYYY  M сар DD өдөр',
    LLL: 'YYYY-MM-DD HH:mm',
    LLLL: 'YYYY-MM-DD HH:mm:ss',
    l: 'M/D',
    ll: 'YY/M/D',
    lll: 'YYYY-MM-DD HH:mm',
    llll: 'YYYY-MM-DD HH:mm:ss'
  },
  calendar : {
    sameDay: '[өнөөдөр] LT',
    nextDay: '[маргааш] LT',
    nextWeek: 'dddd [нд] LT',
    lastDay: '[өчигдөр] LT',
    lastWeek: 'dddd [нд] LT',
    sameElse: 'L'
  },
  ordinalParse: /\d{1,2}(өдөр|сар|7 хоног)/,
  ordinal: function (number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return number + 'өдөр';
      case 'M':
        return number + 'сар';
      case 'w':
      case 'W':
        return number + '7 хоног';
      default:
        return number;
    }
  },
  relativeTime : {
    future : 'хойш %s',
    past : '%s өмнө',
    s : 'сеунд',
    m : 'минут',
    mm : '%d минут',
    h : 'цаг',
    hh : '%d цаг',
    d : 'өдөр',
    dd : '%d өдөр',
    M : 'сар',
    MM : '%d сар',
    y : 'жил',
    yy : '%d жил'
  },
  week: {
    dow: 1,
    doy: 4 
  }
});