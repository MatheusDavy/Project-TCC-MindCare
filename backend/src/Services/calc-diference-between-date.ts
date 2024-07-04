export function calcDifferenceBetweenDate(data1: Date, data2: string): number {
  const date2 = new Date(data2);

  const diffInMs = Math.abs(date2.getTime() - data1.getTime());
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}