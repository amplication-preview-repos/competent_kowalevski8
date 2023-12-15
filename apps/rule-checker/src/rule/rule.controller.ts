import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RuleService } from "./rule.service";
import { RuleControllerBase } from "./base/rule.controller.base";

@swagger.ApiTags("rules")
@common.Controller("rules")
export class RuleController extends RuleControllerBase {
  constructor(protected readonly service: RuleService) {
    super(service);
  }
}
