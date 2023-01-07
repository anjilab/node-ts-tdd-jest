export type TRoof = {
  area: number;
  province: number;
  district: number;
  area_name: string;
  total: number;
  galvanized_sheet: number;
  cemented: number;
  thatch: number;
  tile: number;
  stone: number;
  wood: number;
  mud: number;
  others: number;
};

export type UserSelect = {
  area: boolean;
  province: boolean;
  district: boolean;
  area_name: boolean;
  total: boolean;
  galvanized_sheet: boolean;
  cemented: boolean;
  thatch: boolean;
  tile: boolean;
  stone: boolean;
  wood: boolean;
  mud: boolean;
  others: boolean;
};

export type RoofArgs = {
  // where: UserWhereUniqueInput
  select?: UserSelect | null;
};
