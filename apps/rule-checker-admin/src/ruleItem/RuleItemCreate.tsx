import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { RuleTitle } from "../rule/RuleTitle";

export const RuleItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="ruleId.id" reference="Rule" label="rule_id">
          <SelectInput optionText={RuleTitle} />
        </ReferenceInput>
        <TextInput label="rule_text" multiline source="ruleText" />
      </SimpleForm>
    </Create>
  );
};
