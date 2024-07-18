import type { IConfig } from "../interface/i-config";

export const DesignEditorConfig: IConfig = {
  templateRoot: "/root/workspace/personal/code-generate/gct-template/form-editor",
  targetRoot: "/root/workspace/gct/pass",
  fileList: [
    // 接口
    {
      origin: "i-form-editor.controller.hbs",
      target:
        "packages/design/src/interface/editor/{{kebabCase}}/i-{{kebabCase}}.controller.ts",
    },
    {
      origin: "i-form-editor.hbs",
      target: "packages/design/src/interface/editor/{{kebabCase}}/i-{{kebabCase}}.ts",
    },
    // 组件
    {
      origin: "form-editor.controller.hbs",
      target: "packages/design/src/editor/{{kebabCase}}/{{kebabCase}}.controller.ts",
    },
    {
      origin: "form-editor.provider.hbs",
      target:
        "packages/design/src/editor/{{kebabCase}}/{{kebabCase}}.provider.ts",
    },
    {
      origin: "form-editor.scss.hbs",
      target:
        "packages/design/src/editor/{{kebabCase}}/{{kebabCase}}.scss",
    },
    {
      origin: "form-editor.tsx.hbs",
      target:
        "packages/design/src/editor/{{kebabCase}}/{{kebabCase}}.tsx",
    },
    {
      origin: "index.ts.hbs",
      target: "packages/design/src/editor/{{kebabCase}}/index.ts",
    },
  ],
  addition: [
    {
      target: "packages/design/src/constant/design-editor-type.ts",
      insertTag: "// 样式区编辑器",
      content:
        `
  /**
   * {{chineseText}}编辑器
   */
  {{constantCase}} = '{{kebabCase}}',`,
    },
    {
      target: "packages/design/src/editor/index.ts",
      insertTag: "// 导入编辑器",
      content:
        `import {{pascalCase}} from './{{kebabCase}}';`,
    },
    {
      target: "packages/design/src/editor/index.ts",
      insertTag: "// 注册编辑器",
      content:
        `    app.use({{pascalCase}});`,
    },
    {
      target: "packages/design/src/interface/editor/index.ts",
      insertTag: "lastLine",
      content:
        `export type { I{{pascalCase}} } from './{{kebabCase}}/i-{{kebabCase}}';
export type { I{{pascalCase}}Controller } from './{{kebabCase}}/i-{{kebabCase}}.controller';`,
    },
  ],
};