import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { RuleTitle } from "../rule/RuleTitle";

export const RuleItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="ruleId.id" reference="Rule" label="rule_id">
          <SelectInput optionText={RuleTitle} />
        </ReferenceInput>
        <TextInput label="rule_text" multiline source="ruleText" />
      </SimpleForm>
    </Edit>
  );
};
