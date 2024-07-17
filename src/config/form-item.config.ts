import type { IConfig } from "../interface/i-config";

export const FormItemConfig: IConfig = {
  templateRoot: "/root/workspace/personal/code-generate/gct-template/form-item",
  targetRoot: "/root/workspace/gct/pass",
  fileList: [
    // 接口
    {
      origin: "i-form-item.controller.hbs",
      target:
        "packages/runtime/src/interface/controller/form-{{kebabCase}}/form-{{kebabCase}}.controller.ts",
    },
    {
      origin: "i-form-item.hbs",
      target: "packages/runtime/src/interface/form/i-form/i-form-{{kebabCase}}.ts",
    },
    {
      origin: "i-form-item.state.hbs",
      target: "packages/runtime/src/interface/state/form-{{kebabCase}}/form-{{kebabCase}}.state.ts",
    },
    // 实现
    {
      origin: "form-item.controller.hbs",
      target: "packages/runtime/src/controller/form-{{kebabCase}}/form-{{kebabCase}}.controller.ts",
    },
    {
      origin: "form-item.state.hbs",
      target: "packages/runtime/src/state/form-{{kebabCase}}/form-{{kebabCase}}.state.ts",
    },
    // 组件
    {
      origin: "gct-form-item.provider.hbs",
      target:
        "packages/runtime/src/widgets/gct-form/gct-form-{{kebabCase}}/gct-form-{{kebabCase}}.provider.ts",
    },
    {
      origin: "gct-form-item.scss.hbs",
      target:
        "packages/runtime/src/widgets/gct-form/gct-form-{{kebabCase}}/gct-form-{{kebabCase}}.scss",
    },
    {
      origin: "gct-form-item.tsx.hbs",
      target:
        "packages/runtime/src/widgets/gct-form/gct-form-{{kebabCase}}/gct-form-{{kebabCase}}.tsx",
    },
    {
      origin: "component-index.hbs",
      target: "packages/runtime/src/widgets/gct-form/gct-form-{{kebabCase}}/index.ts",
    },
  ],
  addition: [
    {
      target: "packages/runtime/src/interface/controller/index.ts",
      insertTag: "// 表单项",
      content:
        "export type { IForm{{pascalCase}}Controller } from './form-{{kebabCase}}/form-{{kebabCase}}.controller';",
    },
    {
      target: "packages/runtime/src/interface/form/index.ts",
      insertTag: "// 表单项",
      content:
        "export type { IForm{{pascalCase}} } from './i-form/i-form-{{kebabCase}}';",
    },
    {
      target: "packages/runtime/src/interface/state/index.ts",
      insertTag: "// 表单项",
      content:
        "export type { IForm{{pascalCase}}State } from './form-{{kebabCase}}/form-{{kebabCase}}.state';",
    },
    {
      target: "packages/runtime/src/controller/index.ts",
      insertTag: "// 表单项",
      content:
        "export { Form{{pascalCase}}Controller } from './form-{{kebabCase}}/form-{{kebabCase}}.controller';",
    },
    {
      target: "packages/runtime/src/state/index.ts",
      insertTag: "// 表单项",
      content:
        "export { Form{{pascalCase}}State } from './form-{{kebabCase}}/form-{{kebabCase}}.state';",
    },
    {
      target: "packages/runtime/src/widgets/gct-form/index.ts",
      insertTag: "// 导入表单项组件",
      content:
        "import GctForm{{pascalCase}} from './gct-form-{{kebabCase}}';",
    },
    {
      target: "packages/runtime/src/widgets/gct-form/index.ts",
      insertTag: "// 注册表单项组件",
      content:
        "app.use(GctForm{{pascalCase}});",
    },
  ],
};