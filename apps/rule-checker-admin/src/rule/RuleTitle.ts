import { Rule as TRule } from "../api/rule/Rule";

export const RULE_TITLE_FIELD = "ruleDescription";

export const RuleTitle = (record: TRule): string => {
  return record.ruleDescription?.toString() || String(record.id);
};
