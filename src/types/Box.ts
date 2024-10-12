interface Box {
  name: string;
  description: string;
  state?: "new";
  price: number;
  creator: string;
  imageUrl: string;
}
export default Box;
