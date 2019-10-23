export const removeDublicates = (list: any) => {
  const uniqueArray = list.filter((thing: any, index: number) => {
    return (
      index ===
      list.findIndex((obj: any) => {
        return JSON.stringify(obj) === JSON.stringify(thing);
      })
    );
  });
  return uniqueArray;
};


export const isEmtyOrNullArrary = (emptyArray: { length: number | null; } | null) => (typeof emptyArray != "undefined" && emptyArray != null && emptyArray.length != null
  && emptyArray.length > 0)

