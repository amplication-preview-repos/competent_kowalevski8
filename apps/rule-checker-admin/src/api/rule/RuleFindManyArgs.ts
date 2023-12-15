import { RuleWhereInput } from "./RuleWhereInput";
import { RuleOrderByInput } from "./RuleOrderByInput";

export type RuleFindManyArgs = {
  where?: RuleWhereInput;
  orderBy?: Array<RuleOrderByInput>;
  skip?: number;
  take?: number;
};
