import { StringFilter } from "../../util/StringFilter";
import { RuleWhereUniqueInput } from "../rule/RuleWhereUniqueInput";

export type RuleItemWhereInput = {
  id?: StringFilter;
  ruleId?: RuleWhereUniqueInput;
  ruleText?: StringFilter;
};
