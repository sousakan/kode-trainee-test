export default function formatTel(tel: string) {
  const p1 = tel.slice(1, 2);
  const p2 = tel.slice(2, 5);
  const p3 = tel.slice(5, 8);
  const p4 = tel.slice(8, 10);
  const p5 = tel.slice(10, 12);

  return `+${p1} (${p2}) ${p3} ${p4} ${p5}`;
}
