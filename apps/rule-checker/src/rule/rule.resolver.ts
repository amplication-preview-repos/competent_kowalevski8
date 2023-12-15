import * as graphql from "@nestjs/graphql";
import { RuleResolverBase } from "./base/rule.resolver.base";
import { Rule } from "./base/Rule";
import { RuleService } from "./rule.service";

@graphql.Resolver(() => Rule)
export class RuleResolver extends RuleResolverBase {
  constructor(protected readonly service: RuleService) {
    super(service);
  }
}
