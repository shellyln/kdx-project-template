
import 'mocha';
import { expect } from 'chai';



mocha.setup('bdd');

describe('test 1', () => {
    it('test 1-1', () => {
        expect(1).to.equal(0);
    });
    it('test 1-2', () => {
        expect(1).to.equal(1);
    });
    it('test 1-3', () => {
        expect(1).to.equal(1);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('mocha')) {
        mocha.run();
    }
});
