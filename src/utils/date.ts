const regList = [{
  reg: /YYYY/,
  func: 'getFullYear',
}, {
  reg: /MM/,
  func: 'getMonth',
  add: 1,
}, {
  reg: /DD/,
  func: 'getDate',
}, {
  reg: /hh/,
  func: 'getHours',
}, {
  reg: /mm/,
  func: 'getMinutes',
}, {
  reg: /ss/,
  func: 'getSeconds',
}];

// 获得格式化时间
export function getFormatDate(rule = 'YYYY-MM-DD hh:mm:ss', d: number | string | Date = '') {
  let result = rule;
  let date = d;
  if (date === '' || date === undefined || date === null) {
    return '';
  }
  const type = typeof date;
  if ((type === 'string' || type === 'number')) {
    date = new Date(+date);
  }

  const dateAsAny: any = date;
  regList.forEach((o) => {
    const { reg, func } = o;
    if (reg.test(rule)) {
      result = result.replace(reg, `${dateAsAny[func]() + (o.add ? o.add : 0)}`.padStart(2, '0'));
    }
  });

  return result;
}