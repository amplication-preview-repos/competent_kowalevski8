import { RuleItemWhereUniqueInput } from "../ruleItem/RuleItemWhereUniqueInput";

export type RuleCreateInput = {
  ruleDescription: string;
  rulesRuleItems?: RuleItemWhereUniqueInput | null;
};
