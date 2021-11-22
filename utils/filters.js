import dayjs from 'dayjs'
//普通文本过滤器
export function textFormat(input) {
  try {
    if (
      input === null ||
      input === undefined ||
      input === "" ||
      input === "null" ||
      input === "undefined"
    ) {
      return "-";
    }
    return input;
  } catch (error) {
    return input;
  }
}

//时间戳过滤器
export function secondFormat(input, format) {
  if (input === "" || input === null || input === undefined || input === 0) {
    return "-";
  }
  format = format || "LLLL";
  const formatKey = {
    YM: "YYYY-MM",
    L: "MM-DD",
    L1: "MM/DD",
    LL: "YYYY-MM-DD",
    LLL: "YYYY-MM-DD HH:mm",
    LLLL: "YYYY-MM-DD HH:mm:ss",
    LLLLSS: "YYYY-MM-DD HH:mm:ss SS",
    T: "HH:mm",
    TT: "HH:mm:ss",
    LT: "MM-DD HH:mm",
    DD: "DD",
    MM: "MM",
  };
  format = formatKey[format];
  const date = dayjs(input * 1000);
  if (date.isValid()) {
    input = date.format(format);
  } else {
    input = "-";
  }
  return input;
}

//将富文本过滤为纯文本
export const fullTextFormat = function (input, length) {
  let str = input.replace(/<[^<>]+>/g, '').replace(/&nbsp;/ig, '').replace(/\s+/g, "")
  let result
  if (str.length > length) {
      result = str.slice(0, length) + '...';
  } else {
      result = str.slice(0, length);
  }
  return result;
}
