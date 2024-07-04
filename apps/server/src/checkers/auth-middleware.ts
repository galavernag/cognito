import { AuthCheckerInterface, ResolverData } from "type-graphql";
import { ContextData } from "../context";

export class AuthChecker implements AuthCheckerInterface<ContextData> {
  check(data: ResolverData<ContextData>, roles: string[]) {
    if (data.context.user) {
      return true;
    }
    return false;
  }
}
