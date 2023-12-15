import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RULE_TITLE_FIELD } from "../rule/RuleTitle";

export const RuleItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"rule_items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="rule_id" source="rule.id" reference="Rule">
          <TextField source={RULE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="rule_text" source="ruleText" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
