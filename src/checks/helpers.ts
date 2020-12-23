interface IParams {
  regex: RegExp;
}

export const makeFunction = ({ regex }: IParams) => (str: string) => {
  try {
    if (typeof str !== "string") return false;

    return regex.test(str);
  } catch (e) {
    return false;
  }
};
