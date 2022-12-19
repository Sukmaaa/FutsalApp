export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email tidak boleh kosong."
  if (!re.test(email)) return 'Ooops! kami membutuhkan email yang valid.'
  return ''
}
