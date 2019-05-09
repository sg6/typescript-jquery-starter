import { VoteService } from './vote/VoteService';
import { VoteComponent } from './vote/VoteComponent';

export class App {

    voteComponent: VoteComponent;

    constructor() {
        this.voteComponent = new VoteComponent(new VoteService());
    }
}
