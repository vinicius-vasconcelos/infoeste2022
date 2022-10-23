
const userValidation = (req, res, next) => {
  const { fullName, nickname } = req.body;
  if (!fullName) return res.status(400).json({ message: 'Full name é um campo obrigatório' });
  if (!nickname) return res.status(400).json({ message: 'Nickname é um campo obrigatório' });
  next();
}

const gameValidation = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name é um campo obrigatório' });
  next();
}

module.exports = {
  userValidation,
  gameValidation
};
