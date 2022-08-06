describe('The function;', () => {
    test('Increases 0 comments to 1', () => {
      expect(typeof counter).toBe('function');
    });
    test('is defined', () => {
      expect(counter).toBeDefined();
    });
    test('Increases 0 comments to 1', () => {
      expect(counter(0)).toBe(1);
    });
    test('Increases 100 comments to 101', () => {
      expect(counter(100)).toBe(101);
    });
  });
   
   
   
  const counter = (value) => {
    value += 1;
    return value;
  };
  