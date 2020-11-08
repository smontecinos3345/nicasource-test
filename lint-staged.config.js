module.exports = {
  '{src,test}/**/*.{js}': ['prettier --write', 'npm run lint', 'npm run test'],
  '{src,test}/**/*.json': ['prettier --write',],
};
