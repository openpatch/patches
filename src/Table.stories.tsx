import { Story, Meta } from "@storybook/react/types-6-0";

import { Table, TableProps } from "./Table";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableBody } from "./TableBody";
import { Card } from "./Card";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
} as Meta;

const Template: Story<TableProps> = (args) => (
  <Card>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell isHeader>Heading 1</TableCell>
          <TableCell isHeader>Heading 2</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 3</TableCell>
          <TableCell>Cell 4</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

export const Default = Template.bind({});
