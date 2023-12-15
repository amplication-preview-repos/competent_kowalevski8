/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { RuleItem } from "./RuleItem";
import { RuleItemCountArgs } from "./RuleItemCountArgs";
import { RuleItemFindManyArgs } from "./RuleItemFindManyArgs";
import { RuleItemFindUniqueArgs } from "./RuleItemFindUniqueArgs";
import { CreateRuleItemArgs } from "./CreateRuleItemArgs";
import { UpdateRuleItemArgs } from "./UpdateRuleItemArgs";
import { DeleteRuleItemArgs } from "./DeleteRuleItemArgs";
import { Rule } from "../../rule/base/Rule";
import { RuleItemService } from "../ruleItem.service";
@graphql.Resolver(() => RuleItem)
export class RuleItemResolverBase {
  constructor(protected readonly service: RuleItemService) {}

  async _ruleItemsMeta(
    @graphql.Args() args: RuleItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RuleItem])
  async ruleItems(
    @graphql.Args() args: RuleItemFindManyArgs
  ): Promise<RuleItem[]> {
    return this.service.ruleItems(args);
  }

  @graphql.Query(() => RuleItem, { nullable: true })
  async ruleItem(
    @graphql.Args() args: RuleItemFindUniqueArgs
  ): Promise<RuleItem | null> {
    const result = await this.service.ruleItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RuleItem)
  async createRuleItem(
    @graphql.Args() args: CreateRuleItemArgs
  ): Promise<RuleItem> {
    return await this.service.createRuleItem({
      ...args,
      data: {
        ...args.data,

        ruleId: args.data.ruleId
          ? {
              connect: args.data.ruleId,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => RuleItem)
  async updateRuleItem(
    @graphql.Args() args: UpdateRuleItemArgs
  ): Promise<RuleItem | null> {
    try {
      return await this.service.updateRuleItem({
        ...args,
        data: {
          ...args.data,

          ruleId: args.data.ruleId
            ? {
                connect: args.data.ruleId,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RuleItem)
  async deleteRuleItem(
    @graphql.Args() args: DeleteRuleItemArgs
  ): Promise<RuleItem | null> {
    try {
      return await this.service.deleteRuleItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Rule, {
    nullable: true,
    name: "ruleId",
  })
  async getRuleId(@graphql.Parent() parent: RuleItem): Promise<Rule | null> {
    const result = await this.service.getRuleId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
