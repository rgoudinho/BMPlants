export default interface InterfacePlant {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  img: string;
  problemsDealtWith: Array<string>; //TODO: Array<Disease>
}
