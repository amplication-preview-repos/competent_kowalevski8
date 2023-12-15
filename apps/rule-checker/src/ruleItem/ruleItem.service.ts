import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RuleItemServiceBase } from "./base/ruleItem.service.base";

@Injectable()
export class RuleItemService extends RuleItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
