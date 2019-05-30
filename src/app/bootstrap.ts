import { VoteService } from './vote/VoteService';
import { VoteComponent } from './vote/VoteComponent';
import { Injector } from '../util/DependencyInjection/Injector';

export class App {

    voteComponent: VoteComponent;

    constructor() {
        // register components in app
        this.voteComponent = new VoteComponent(Injector.resolve<VoteService>(VoteService));
    }
}
