import { StringFilter } from "../../util/StringFilter";
import { RuleItemWhereUniqueInput } from "../ruleItem/RuleItemWhereUniqueInput";

export type RuleWhereInput = {
  id?: StringFilter;
  ruleDescription?: StringFilter;
  rulesRuleItems?: RuleItemWhereUniqueInput;
};
