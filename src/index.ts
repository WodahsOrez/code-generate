import Handlebars from "handlebars";
import fs from "fs-extra";
import type { IConfig } from "./interface/i-config";
import type { IContext } from "./interface/i-context";
import { camelCase, kebabCase, pascalCase, pascalSnakeCase } from "change-case";
import { fillTemplate } from "./utils/fill-template.js";
const { outputFileSync, readFileSync } = fs;
import pt from "path";
import { appendString, insertAfterString } from "./utils/insert-after-string.js";
import { FormItemConfig } from "./config/form-item.config.js";

function compileFile(filePath: string, context: IContext) {
  const fileText = readFileSync(filePath, "utf8");
  const template = Handlebars.compile(fileText);
  return template(context);
}

function start(config: IConfig, context: IContext) {
  // 新建文件
  config.fileList.forEach(({ origin, target }) => {
    const filePath = pt.join(config.templateRoot, origin);
    const compileStr = compileFile(filePath, context);
    const writePath = pt.join(config.targetRoot, fillTemplate(target, context));
    outputFileSync(writePath, compileStr);
  });

  // 插入内容
  config.addition.forEach(({ target, insertTag, content }) => {
    const writePath = pt.join(config.targetRoot, target);
    const insertContent = Handlebars.compile(content)(context);
    if (insertTag === "lastLine") {
      appendString(writePath, insertContent);
    }else{
      insertAfterString(writePath, insertTag, insertContent);
    }
  });
}

export function calcContext(opts: { tag: string; chineseText: string }) {
  return {
    chineseText: opts.chineseText,
    camelCase: camelCase(opts.tag),
    kebabCase: kebabCase(opts.tag),
    pascalCase: pascalCase(opts.tag),
    pascalSnakeCase: pascalSnakeCase(opts.tag),
  };
}

export function generateFormItem(opts: { tag: string; chineseText: string }) {
  const context = calcContext(opts);
  start(FormItemConfig, context);
}
