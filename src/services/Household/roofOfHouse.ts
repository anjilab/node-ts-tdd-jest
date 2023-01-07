import { TRoof } from '../../@types/TRoof';
import prisma from '../index';

export async function bulkCreate(data: TRoof[]) {
  return prisma.roof_of_house.createMany({
    data
    // skipDuplicates: true
  });
}

// export function findAll(options) {
export function findAll(options: any) {
  console.log(options);
  return prisma.roof_of_house.findMany({
    where: options.where,
    select: options.attributes
  });
}
