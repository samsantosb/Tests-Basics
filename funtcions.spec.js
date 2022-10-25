const { describe, it, expect } = require('@jest/globals');
const { multiplyArray,
    multiplyNumber,
    parseJson } = require('./functions');

describe('functions', () => {
    describe('multiplyArray', () => {
        it('should return an array', () => {
            expect(Array.isArray(multiplyArray([1, 2, 3], 2))).toBe(true);
        });
        it('should return an array with the same length as the input array', () => {
            expect(multiplyArray([1, 2, 3], 2).length).toBe(3);
        });
        it('should return an array with the correct values', () => {
            expect(multiplyArray([1, 2, 3], 2)).toEqual([2, 4, 6]);
        });
        it('should return an error message if the first argument is not an array', () => {
            expect(multiplyArray('not an array', 2)).toBe('Not an array')
        });
        it('should return an error message if the second argument is not a number', () => {
            expect(multiplyArray([1, 2, 3], 'not a number')).toBe('Not a number')
        });
    });

    describe('multiplyNumber', () => {
        it('should return a number', () => {
            expect(typeof multiplyNumber(2, 2)).toBe('number');
        });
        it('should return the correct value', () => {
            expect(multiplyNumber(2, 2)).toBe(4);
        });
        it('should return an error message if the first argument is not a number', () => {
            expect(multiplyNumber('not a number', 2)).toBe('Not a number')
        });
        it('should return an error message if the second argument is not a number', () => {
            expect(multiplyNumber(2, 'not a number')).toBe('Not a number')
        });
    });

    describe('parseJson', () => {
        it('should return an object', () => {
            expect(typeof parseJson('{"name": "John"}')).toBe('object');
        });
        it('should return the correct value', () => {
            expect(parseJson('{"name": "John"}')).toEqual({ name: 'John' });
        });
        it('should throw an error if the argument is not valid JSON', () => {
            expect(() => parseJson('not valid JSON')).toThrow('Invalid JSON');
        });
    });
});