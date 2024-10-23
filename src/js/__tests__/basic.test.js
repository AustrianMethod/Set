import Team, {Character} from '../app';

test('add func', () => {
  const team = new Team;
  const [char1, char2] = [new Character('Mike'), new Character('Mike')];
  team.add(char1, char2);

  const result1 = team.members.has('Mike');
  const result2 = team.members.size;
  expect(result1).toBe(true);
  expect(result2).toBe(1);
});

test('addAll func', () => {
  const team = new Team;
  const [char1, char2, char3] = [new Character('Mike'), new Character('Bo'), new Character('Mike')];
  team.addAll(char1, char2, char3);

  const result1 = team.members.has('Mike');
  const result2 = team.members.size;
  expect(result1).toBe(true);
  expect(result2).toBe(2);
});

test('toArray func', () => {
  const team = new Team;
  const [char1, char2, char3] = [new Character('Mike'), new Character('Bo'), new Character('Mike')];
  team.addAll(char1, char2, char3);

  const result = team.toArray();
  expect(result).toEqual(['Mike', 'Bo']);
});