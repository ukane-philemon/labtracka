import { faker } from '@faker-js/faker';
import type { LaboratoryModel } from "@interface";


export const mockLaboratory: LaboratoryModel[] = [...Array<LaboratoryModel>(23)].map((_, index) => {
  const addLeadingZero = (i: number): string => i >= 0 && i < 10 ? `0${i.toString()}` : i.toString()

  return ({
    id: index,
    branchId: `LMS0${addLeadingZero(index)}`,
    city: faker.location.city(),
    state: faker.location.state(),
    streetName: faker.location.street(),
    addressNo: faker.number.int(50),
    dateCreated: faker.date.past(),
    totalTestOrders: faker.number.int(1000),
    totalRevenue: faker.number.int(1000),
    pendingOrders: faker.number.int(1000),
    totalUsers: faker.number.int(1000),
  })
})
