import { RuleWhereUniqueInput } from "../rule/RuleWhereUniqueInput";

export type RuleItemCreateInput = {
  ruleId?: RuleWhereUniqueInput | null;
  ruleText: string;
};
