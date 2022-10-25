const _isValidMinLength = (str) => str.length >= 3
const isValidFullName = (fullName) => _isValidMinLength(fullName) && fullName.length <= 40;
const isValidNickname = (nickname) => _isValidMinLength(nickname) && nickname.length <= 8;

module.exports = {
  isValidFullName,
  isValidNickname,
};
