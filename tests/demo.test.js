
    test("El amor es algo bonito", () => {
      const mensaje1 = "es verdad";
      const mensaje2 = mensaje1.trim();

      expect(mensaje1).toBe(mensaje2);
    });