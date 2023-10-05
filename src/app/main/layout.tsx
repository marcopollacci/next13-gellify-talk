  
interface MainLayoutProps {
    children: React.ReactNode;
    subuno: React.ReactNode;
    subdue: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
    return (
        <>
            <p>Layout component was created at {Date.now()}</p>
            {props.children}
            <br />
            {props.subdue}
            <br />
            {props.subuno}
            <br />
            <br />
        </>
    )

}