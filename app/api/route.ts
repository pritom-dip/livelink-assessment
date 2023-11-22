import creatorsData from '@/mockData/data';
import { sleep } from '@/utils/mimicApi';

export async function GET() {
  await sleep(2000);
  const data = creatorsData;
  return Response.json({ data });
}
