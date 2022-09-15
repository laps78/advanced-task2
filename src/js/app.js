// TODO: write your code here
export default function specialAttack(character) {
  const { special = [] } = character;
  return special.map((attack) => ({
    description: 'описание недоступно',
    ...attack,
  }));
}
