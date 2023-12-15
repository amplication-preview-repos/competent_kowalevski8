import { Module } from "@nestjs/common";
import { RuleItemModuleBase } from "./base/ruleItem.module.base";
import { RuleItemService } from "./ruleItem.service";
import { RuleItemController } from "./ruleItem.controller";
import { RuleItemResolver } from "./ruleItem.resolver";

@Module({
  imports: [RuleItemModuleBase],
  controllers: [RuleItemController],
  providers: [RuleItemService, RuleItemResolver],
  exports: [RuleItemService],
})
export class RuleItemModule {}
