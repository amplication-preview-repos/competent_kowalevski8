import { RuleItem } from "../ruleItem/RuleItem";

export type Rule = {
  createdAt: Date;
  id: string;
  ruleDescription: string;
  rulesRuleItems?: RuleItem | null;
  updatedAt: Date;
};
