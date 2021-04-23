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

  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
