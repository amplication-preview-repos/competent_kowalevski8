import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RuleItemService } from "./ruleItem.service";
import { RuleItemControllerBase } from "./base/ruleItem.controller.base";

@swagger.ApiTags("ruleItems")
@common.Controller("ruleItems")
export class RuleItemController extends RuleItemControllerBase {
  constructor(protected readonly service: RuleItemService) {
    super(service);
  }
}
