import type { IUsersResult } from "../services/getUsersApi";

type IDepartment = Record<
  string,
  {
    male: number;
    female: number;
    ageRange: string;
    hair: Record<string, number>;
    addressUser: Record<string, string>;
  }
>;

const mapUsersToDepartment = ({ users }: IUsersResult) => {
  const formattedData: IDepartment = {};

  for (const user of users) {
    const department = user.company.department;

    if (!department) {
      continue;
    }

    const departmentData = formattedData[department] || {
      male: 0,
      female: 0,
      ageRange: "",
      hair: {},
      addressUser: {},
    };

    if (user.gender === "male") departmentData.male += 1;
    if (user.gender === "female") departmentData.female += 1;

    const age = user.age;
    if (!departmentData.ageRange) {
      departmentData.ageRange = `${age}-${age}`;
    } else {
      const [minAge, maxAge] = departmentData.ageRange.split("-");
      departmentData.ageRange = `${Math.min(Number(minAge), age)}-${Math.max(
        Number(maxAge),
        age
      )}`;
    }

    const hairColor = user.hair.color;
    departmentData.hair[hairColor] = (departmentData.hair[hairColor] || 0) + 1;

    const fullName = `${user.firstName}${user.lastName}`;
    departmentData.addressUser[fullName] = user.address.postalCode;

    formattedData[department] = departmentData;
  }

  return formattedData;
};

export default mapUsersToDepartment;
