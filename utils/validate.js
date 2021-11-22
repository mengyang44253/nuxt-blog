/**
 * 邮箱校验
 * @param {*} email
 * @returns
 */
export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * 随机数字
 * @param {*} min
 * @param {*} max
 */
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 一维数组转化为树结构
 * @param arr
 * @returns {*}
 */
export function tree(arr) {
  let parents = arr.filter((item) => item.parent_id === null);
  let children = arr.filter((item) => item.parent_id !== null);
  function translator(parents, children) {
    parents.forEach((parent, vv) => {
      children.forEach((child, vvv) => {
        if (child.parent_id === parent.id) {
          let temp = JSON.parse(JSON.stringify(children));
          temp.splice(vvv, 1);
          parent.children
            ? parent.children.push(child)
            : (parent.children = [child]);
          translator([child], temp);
        }
      });
    });
  }
  translator(parents, children);
  return parents;
}
