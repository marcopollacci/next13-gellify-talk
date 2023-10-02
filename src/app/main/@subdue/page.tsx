export default async function Page() {
    await delay(3000);
    return (<>
            <p>Pagina sub2</p>
        </>);
}

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
