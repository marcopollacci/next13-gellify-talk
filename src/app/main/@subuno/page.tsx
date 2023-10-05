import Link from 'next/link';
import ClientComponent from './_client-component/client-component';

export default function Page() {
    return (
        <>
            <p>Pagina sub 1</p>
            <ClientComponent />
            <br />
            <div style={{marginTop: '10px', textDecoration: 'underline'}}><Link href="/intercept">Render intercept url</Link></div>
        </>
    )
}