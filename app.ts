import { VoteService } from './src/app/vote/VoteService';
import { VoteComponent } from './src/app/vote/VoteComponent';
import * as $ from 'jquery';
import { App } from './src/app/bootstrap';


const voteService = new VoteService();
const voteComponent = new VoteComponent(voteService);


const setVoteValueToHtml = (_currentValue) => {
    $('#init').html(`${_currentValue}`);
}

const bootstrap = (): void => {
    new App();
}

bootstrap();