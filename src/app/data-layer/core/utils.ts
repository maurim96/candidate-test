export class Utils {
  static resKeyToProp(prop: string): string {
      return prop.replace(/_[a-z]/g, (m) => m[1].toUpperCase());
  };

  static recurResToProp(responseValue: object | object[]): any {
    if (Array.isArray(responseValue)) {
      return responseValue.map((rv) => Utils.recurResToProp(rv));
    } else if (responseValue && typeof responseValue === 'object') {
      const retval = {};

      Object.keys(responseValue)
        .forEach((rk) => {
          const key = Utils.resKeyToProp(rk);
          const value = Utils.recurResToProp(responseValue[rk]);

          retval[key] = value;
        });
      return retval;
    }
    return responseValue;
  }
}
