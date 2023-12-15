import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RuleItemTitle } from "../ruleItem/RuleItemTitle";

export const RuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
