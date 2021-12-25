function contarOvejas(ovejas) {
  return ovejas.filter(({ name, color }) => {
    const letters = new Set(name.toLowerCase());
    return ['n', 'a'].every(l => letters.has(l)) &&
      color === 'rojo';
  });
}
