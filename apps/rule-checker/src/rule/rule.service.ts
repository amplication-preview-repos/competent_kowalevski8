import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RuleServiceBase } from "./base/rule.service.base";

@Injectable()
export class RuleService extends RuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
