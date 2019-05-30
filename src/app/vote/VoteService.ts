import { Service } from "../../util/DependencyInjection/ServiceDecorator";

@Service()
export class VoteService {
    getInitialValue(): number {
        return 0;
    }
}
