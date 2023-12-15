import { RuleItem as TRuleItem } from "../api/ruleItem/RuleItem";

export const RULEITEM_TITLE_FIELD = "id";

export const RuleItemTitle = (record: TRuleItem): string => {
  return record.id?.toString() || String(record.id);
};
