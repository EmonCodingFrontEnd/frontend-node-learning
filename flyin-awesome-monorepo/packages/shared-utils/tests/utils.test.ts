import { add, isEven, toUpperCase, VERSION, PI } from '../src/index';

describe('Simple Utils tests', () => {
  describe('Constants', () => {
    it('should have correct VERSION', () => {
      expect(VERSION).toBe('1.0.0');
    });

    it('should have correct PI value', () => {
      expect(PI).toBe(3.14159);
    });
  });

  describe('add function', () => {
    it('should add two numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
      expect(add(1.5, 2.5)).toBe(4);
    });
  });

  describe('isEven function', () => {
    it('should correctly identify even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(3)).toBe(false);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('toUpperCase function', () => {
    it('should convert string to uppercase', () => {
      expect(toUpperCase('hello')).toBe('HELLO');
      expect(toUpperCase('World')).toBe('WORLD');
      expect(toUpperCase('')).toBe('');
    });
  });
});