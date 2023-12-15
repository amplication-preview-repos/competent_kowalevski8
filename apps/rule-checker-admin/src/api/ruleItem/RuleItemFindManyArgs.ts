import { RuleItemWhereInput } from "./RuleItemWhereInput";
import { RuleItemOrderByInput } from "./RuleItemOrderByInput";

export type RuleItemFindManyArgs = {
  where?: RuleItemWhereInput;
  orderBy?: Array<RuleItemOrderByInput>;
  skip?: number;
  take?: number;
};
