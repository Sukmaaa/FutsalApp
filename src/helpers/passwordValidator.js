export function passwordValidator(password) {
  if (!password) return "Password tidak boleh kosong."
  if (password.length < 5) return 'Password minimal harus 5 karakter.'
  return ''
}
