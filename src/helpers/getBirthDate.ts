export default function getBirthDate(birthday: string) {
  return new Date(birthday)
    .toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);
}
