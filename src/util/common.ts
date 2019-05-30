import * as $ from 'jquery';

export class Helper {
    static setVoteValueToHtml(_currentValue) {
        $('#init').html(`${_currentValue}`);
    }
}