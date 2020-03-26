import getName from '../Exercise7/ex7_1';

describe('function getName', () => {
    it('Should show the name Arceus', async () => {
         const result =  await getName();

         expect(result).toBe("Arceus");
    });
});