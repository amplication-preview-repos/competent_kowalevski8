import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RuleItemTitle } from "../ruleItem/RuleItemTitle";

export const RuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="ruleDescription" />
        <ReferenceInput
          source="rulesRuleItems.id"
          reference="RuleItem"
          label="rules_rule_items"
        >
          <SelectInput optionText={RuleItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
