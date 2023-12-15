import * as graphql from "@nestjs/graphql";
import { RuleItemResolverBase } from "./base/ruleItem.resolver.base";
import { RuleItem } from "./base/RuleItem";
import { RuleItemService } from "./ruleItem.service";

@graphql.Resolver(() => RuleItem)
export class RuleItemResolver extends RuleItemResolverBase {
  constructor(protected readonly service: RuleItemService) {
    super(service);
  }
}
