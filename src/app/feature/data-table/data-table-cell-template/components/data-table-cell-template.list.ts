import { ExampleFile, FileType } from '../../../../shared/models';

export const cellTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'cell-template-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/cell-template-usage/cell-template-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'cell-template-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/cell-template-usage/cell-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'cell-template-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/cell-template-usage/cell-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'sample-data.ts',
    content: require('!!raw-loader?lang=typescript!../../../../shared/data/sample-data.ts')
  }
];

export const demoSnippet: any = {
  base_template: require('!!raw-loader?lang=typescript!./docs/base_template.md'),
  cell_template: require('!!raw-loader?lang=typescript!./docs/cell_template.md'),
  column_property_template: require('!!raw-loader?lang=typescript!./docs/column_property_template.md'),
  row_property_template: require('!!raw-loader?lang=typescript!./docs/row_property_template.md'),
  row_span_property_template: require('!!raw-loader?lang=typescript!./docs/row_span_property_template.md'),
  span_index_property_template: require('!!raw-loader?lang=typescript!./docs/span_index_property_template.md')
};

