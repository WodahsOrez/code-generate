import fs from "fs-extra";

export function insertAfterString(filePath: string, searchString: string, insertContent: string): void {
  // 读取文件内容
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // 将文件内容按行拆分成数组
  const lines = fileContent.split("\n");

  // 查找指定字符串的位置
  let index = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchString)) {
      index = i;
      break;
    }
  }

  // 如果找到指定字符串的位置，在其下一行插入新内容
  if (index !== -1) {
    lines.splice(index + 1, 0, insertContent);
  } else {
    console.log(`String "${searchString}" not found in the file.`);
    return;
  }

  // 将修改后的内容重新组合成一个字符串
  const newContent = lines.join("\n");

  // 写回文件
  fs.writeFileSync(filePath, newContent, "utf-8");
}

export function appendString(filePath: string, insertContent: string): void {
  // 读取文件内容
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // 将文件内容按行拆分成数组
  const lines = fileContent.split("\n");

  // 在最后一行插入新内容
  lines.push(insertContent);

  // 将修改后的内容重新组合成一个字符串
  const newContent = lines.join("\n");

  // 写回文件
  fs.writeFileSync(filePath, newContent, "utf-8");
}

// 示例用法
// const filePath = path.join(__dirname, "example.txt"); // 你的文件路径
// const searchString = "search this line"; // 你要查找的字符串
// const insertContent = "This is the inserted content."; // 你要插入的内容

// insertAfterString(filePath, searchString, insertContent);
// console.log("Content inserted successfully!");
