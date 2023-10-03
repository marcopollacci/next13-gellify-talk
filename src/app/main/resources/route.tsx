export async function GET() {
    await delay(3000); 
    return Response.json({ message: 'GET api from <root>/main/resources' })
}

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }