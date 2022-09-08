export class Utils {
  public static getFullString(item: Object, objectKeys: Object): string {
    const listKeys = Object.keys(objectKeys);
    let temp: string = '';
    listKeys.forEach((key) => {
      temp += item[key].trim() + ' ';
    });
    return temp.trim().toLocaleLowerCase();
  }
}
