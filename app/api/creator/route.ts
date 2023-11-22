import creatorsData from '@/mockData/data';
import { sleep } from '@/utils/mimicApi';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return new Response('Please Provide an id', {
      status: 400
    });
  }

  await sleep(2000);
  const creator = creatorsData.find(c => c.id === +id);

  if (!creator) {
    return new Response('Invalid id', {
      status: 404
    });
  }

  return Response.json({ data: creator });
}
