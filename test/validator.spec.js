// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe("object");
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe("function");
    });

    it('debería retornar true para "4083952015263"', () => {
      expect( validator.isValid(4083952015263)).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect( validator.isValid(79927398713)).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect( validator.isValid(1234567890)).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe("function");
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify(4556364607935616)).toBe("############5616");
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify(1)).toBe("1");
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe("######orld");
    });
  });

  describe('validator.getIssuer', () => {
    it('debería ser una función', () => {
      expect(typeof validator.getIssuer).toBe("function");
    });

    it('Debería retornar "JCB" para "1800154269778595"', () => {
      expect(validator.getIssuer(1800154269778595)).toBe("JCB");
    });

    it('Debería retornar "Diners Club" para "3689454587886215"', () => {
      expect(validator.getIssuer(3689454587886215)).toBe("Diners Club");
    });

    it('Debería retornar "American Express" para "3456748596523158"', () => {
      expect(validator.getIssuer(3456748596523158)).toBe("American Express");
    });

    it('Debería retornar "Visa" para "4521896354217896"', () => {
      expect(validator.getIssuer(4521896354217896)).toBe("Visa");
    });

    it('Debería retornar "Mastercard" para "5454858596963232"', () => {
      expect(validator.getIssuer(5454858596963232)).toBe("Mastercard");
    });

    it('Debería retornar "Discover" para "6011536298748524"', () => {
      expect(validator.getIssuer(6011536298748524)).toBe("Discover");
    });

    it('Debería retornar "Diners Club" para "3009454587886215"', () => {
      expect(validator.getIssuer(3009454587886215)).toBe("Diners Club");
    });

    it('Debería retornar "Diners Club" para "2149454587886215"', () => {
      expect(validator.getIssuer(2149454587886215)).toBe("Diners Club");
    });

    it('Debería retornar "JCB" para "3900154269778595"', () => {
      expect(validator.getIssuer(3900154269778595)).toBe("JCB");
    });
  });
});
