import $ from 'jquery';

export class Helper {
    static setVoteValueToHtml(_currentValue: string | number) {
        $('#init').html(`${_currentValue}`);
    }
}