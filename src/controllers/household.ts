// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { findAll } from '../services/Household/roofOfHouse';
import { percentageFormatter } from '../utils/helpers';

const getSortedData = (data: any) => {
  const sortableObj = Object.entries(data)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [currKey, currVal]) => ({ ...acc, [currKey]: currVal }), {});
  return sortableObj;
};

// barchart
const getRoofOfHouseData = async (req: any, res: any, next: any) => {
  try {
    const { province: reqQueryProvince, district: reqQueryDistrict } =
      req.query;

    let where = { area: 12 };

    const attributes = {
      total: true,
      galvanized_sheet: true,
      cemented: true,
      thatch: true,
      tile: true,
      stone: true,
      wood: true,
      mud: true,
      others: true
    };

    if (reqQueryProvince) {
      where = { area: 80, province: +req.query.province };
    }
    if (reqQueryDistrict) {
      where = { area: 90, district: +req.query.district };
    }

    const dbData = await findAll({ where, attributes });

    if (!dbData) {
      // throw new ApiError(
      //     httpStatus.NOT_FOUND,
      //     'Please make sure you have data'
      // );
    }

    const sortedData = getSortedData(dbData);
    const dataWithoutTotal = { ...sortedData };

    delete dataWithoutTotal.total;

    const total = sortedData.total;
    const categories = Object.keys(dataWithoutTotal);
    const countSeries = Object.values(dataWithoutTotal);
    const series = Object.values(dataWithoutTotal).map((val) =>
      percentageFormatter(val, total, false)
    );

    const formattedData = {
      categories,
      countSeries,
      series
    };

    return formattedData;
  } catch (error) {
    next(error);
  }
};

// response
export const getHouseholdData = async (req: any, res: any, next: any) => {
  try {
    const data = {
      roofOfHouse: await getRoofOfHouseData(req, res, next)
    };

    res.json({
      status: 'OK',
      code: 200,
      success: true,
      data,
      message: 'Data for household listed successfully'
    });
  } catch (error) {
    next(error);
  }
};
