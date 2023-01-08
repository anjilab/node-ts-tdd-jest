import { prismaMock } from './../../singleton';
import { bulkCreate } from '../../src/services/Household/roofOfHouse';

test('should create bulk roof data ', async () => {
  const roof = [
    {
      area: 10,
      province: 1,
      district: 1,
      area_name: 'Nepal',
      total: 6400,
      galvanized_sheet: 800,
      cemented: 800,
      thatch: 800,
      tile: 800,
      stone: 800,
      wood: 800,
      mud: 800,
      others: 800
    }
  ];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  prismaMock.roof_of_house.createMany.mockResolvedValue(roof);

  await expect(bulkCreate(roof)).resolves.toEqual([
    {
      area: 10,
      province: 1,
      district: 1,
      area_name: 'Nepal',
      total: 6400,
      galvanized_sheet: 800,
      cemented: 800,
      thatch: 800,
      tile: 800,
      stone: 800,
      wood: 800,
      mud: 800,
      others: 800
    }
  ]);
});

test('should fail if bulk roof data type didnot matched', async () => {
  const roof = [
    {
      area: 10,
      province: 1,
      district: 1,
      area_name: 30,
      total: 6400,
      galvanized_sheet: 800,
      cemented: 800,
      thatch: 800,
      tile: 800,
      stone: 800,
      wood: 800,
      mud: 800,
      others: 800
    }
  ];

  prismaMock.roof_of_house.createMany.mockRejectedValue(
    new Error('Enter area_name string not number')
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await expect(bulkCreate(roof)).rejects.toEqual(
    new Error('Enter area_name string not number')
  );
});
