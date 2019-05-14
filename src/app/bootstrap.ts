import { VoteService } from './vote/VoteService';
import { VoteComponent } from './vote/VoteComponent';

export class App {

    voteComponent: VoteComponent;

    constructor() {
        // register components in app
        this.voteComponent = new VoteComponent(new VoteService());
    }
}
