export default async function Page() {
    const data = await fetch('http://localhost:3000/main/resources');
    return (
      <>
        <p>Pagina sub2</p>
        <div>{JSON.stringify(await data.json())}</div> 
      </>
    );
  }
  