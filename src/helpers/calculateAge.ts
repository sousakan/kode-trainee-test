export default function calculateAge(birthday: string) {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  switch (age % 10) {
    case 1:
      return `${age} год`;
    case 2:
    case 3:
    case 4:
      return `${age} года`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      return `${age} лет`;
  }
}
