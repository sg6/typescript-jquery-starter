import * as $ from 'jquery';
import { VoteService } from './VoteService';
import { Helper } from '../../util/common';

export class VoteComponent {

    voteIndex: number;
    helper: Helper;

    // dependency injection
    constructor(private voteService: VoteService) {
        this.resetVote();

        this.handleButtonClick();
    }

    addVote(): number {
        return ++this.voteIndex;
    }

    subtractVote(): number {
        return --this.voteIndex;
    }

    resetVote(): number {
        this.voteIndex = this.voteService.getInitialValue();
        return this.voteIndex;
    }

    
    handleButtonClick = () => {
        $('button').on('click', (evt): void => {
            console.log(evt.target.innerHTML);
        });

        $('#voteup').on('click', (): void => {
            Helper.setVoteValueToHtml(this.addVote());
        });

        $('#votedown').on('click', (): void => {
            Helper.setVoteValueToHtml(this.subtractVote());
        });

        $('#reset').on('click', (): void => {
            Helper.setVoteValueToHtml(this.resetVote());
        })
    }
}