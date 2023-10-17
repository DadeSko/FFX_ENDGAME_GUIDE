import fs from 'fs/promises';

export async function getStoredMonsters() {
  const rawFileContent = await fs.readFile('monsters.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedMonsters = data.monsters ?? [];
  return storedMonsters;
}

export function storedMonsters(monsters) {
  return fs.writeFile('monsters.json', JSON.stringify({ monsters: monsters || [] }));
}