import { getISIShortname } from './format';

describe('format utils', () => {
  describe('getISIShortname', () => {
    it('should return string all lowercase without symbol', () => {
      expect(
        getISIShortname('BOTOX® Cosmetic (onabotulinumtoxinA) injection')
      ).toEqual('botox');
      expect(getISIShortname('CoolSculpting®')).toEqual('coolsculpting');
      expect(getISIShortname('LoNg ISI Brand Name MARK™')).toEqual(
        'long isi brand name mark'
      );
    });
  });
});
