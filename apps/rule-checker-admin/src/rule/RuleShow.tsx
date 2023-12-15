import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RULEITEM_TITLE_FIELD } from "../ruleItem/RuleItemTitle";

export const RuleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="ruleDescription" />
        <ReferenceField
          label="rules_rule_items"
          source="ruleitem.id"
          reference="RuleItem"
        >
          <TextField source={RULEITEM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
