export function fillTemplate(templateString: string, data: any) {
  // 使用正则表达式匹配模板字符串中的变量，并替换为对象中对应的属性值
  return templateString.replace(/{{(.*?)}}/g, (match, key) => {
    // 从数据对象中获取对应的属性值
    const value = data[key.trim()];
    // 如果属性值是字符串或数字，返回属性值；否则返回空字符串
    return typeof value === "string" || typeof value === "number" ? value+'' : "";
  });
}

// 示例用法
// const template = "Hello, ${name}! Today is ${date}.";
// const data = {
//   name: "Alice",
//   date: new Date().toLocaleDateString()
// };

// const filledString = fillTemplate(template, data);
// console.log(filledString); // 输出类似：Hello, Alice! Today is 7/15/2024.
