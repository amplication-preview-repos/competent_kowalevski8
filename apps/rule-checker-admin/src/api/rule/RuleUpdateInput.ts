import { RuleItemWhereUniqueInput } from "../ruleItem/RuleItemWhereUniqueInput";

export type RuleUpdateInput = {
  ruleDescription?: string;
  rulesRuleItems?: RuleItemWhereUniqueInput | null;
};
