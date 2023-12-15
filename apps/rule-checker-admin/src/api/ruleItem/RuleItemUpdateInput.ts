import { RuleWhereUniqueInput } from "../rule/RuleWhereUniqueInput";

export type RuleItemUpdateInput = {
  ruleId?: RuleWhereUniqueInput | null;
  ruleText?: string;
};
