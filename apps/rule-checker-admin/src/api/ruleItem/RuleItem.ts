import { Rule } from "../rule/Rule";

export type RuleItem = {
  createdAt: Date;
  id: string;
  ruleId?: Rule | null;
  ruleText: string;
  updatedAt: Date;
};
