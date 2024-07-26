import { IStock } from '@/Interfaces/interfaces';
import { Post } from '../types';

export const fetchData = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await res.json();
  return data;
};

export const fetchStockData = async (): Promise<IStock[]> => {
  const response = await fetch('http://localhost:3001/batchQuotes?symbols=AAPL,MSFT,AMZN,GOOGL,FB,TSLA,NVDA,JPM,V,WMT,JNJ,PG,MA,UNH,HD,DIS,PYPL,NFLX');
  const data: IStock[] = await response.json();
  return data;
};