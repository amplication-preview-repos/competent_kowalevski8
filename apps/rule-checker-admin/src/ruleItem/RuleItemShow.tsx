import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RULE_TITLE_FIELD } from "../rule/RuleTitle";

export const RuleItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="rule_id" source="rule.id" reference="Rule">
          <TextField source={RULE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="rule_text" source="ruleText" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
