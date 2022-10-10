export default function getShortBirthDate(birthday: string) {
  return new Date(birthday)
    .toLocaleString('ru', {
      month: 'short',
      day: 'numeric',
    })
    .replace('.', '');
}
