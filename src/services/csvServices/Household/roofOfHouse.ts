import { TRoof } from './../../../@types/TRoof';
import ExcelJS from 'exceljs';
import path from 'path';
import { bulkCreate } from '../../Household/roofOfHouse';

const csvFileName = path.join(__dirname, '../../../assets/Roof.csv');

const roofOfHouseKeys = {
  1: 'area',
  2: 'province',
  3: 'district',
  4: 'area_name',
  5: 'total',
  6: 'galvanized_sheet',
  7: 'cemented',
  8: 'thatch',
  9: 'tile',
  10: 'stone',
  11: 'wood',
  12: 'mud',
  13: 'others'
};

const insertInDb = async (data: TRoof[]) => {
  console.log(data);
  return await bulkCreate(data);
};

const workbook = new ExcelJS.Workbook();

const roofOfHouse = async () => {
  console.log('>> Migrating roof of house csv data');

  const worksheet = await workbook.csv.readFile(csvFileName);
  const data: TRoof[] = [];

  worksheet.eachRow(function (row, rowNumber) {
    const eachData = {} as TRoof;
    if (+rowNumber !== 1) {
      if (row && row.values) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        row.values.forEach((value, index) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          eachData[roofOfHouseKeys[index]] = value;
        });
        data.push(eachData);
      }
    }
  });

  insertInDb(data);
  console.log('>> Migrated roof of house csv data', '\n');
};

console.log('Roof of the house', roofOfHouse());
