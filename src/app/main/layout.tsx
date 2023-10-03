  
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
            {props.subuno}
            <br />
            {props.subdue}
            <br />
            <br />
        </>
    )

}