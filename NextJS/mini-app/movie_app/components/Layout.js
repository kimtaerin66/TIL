import NavBar from './NavBar';

export default function Layout({children}){
    return(
        <>
        <NavBar />
        <div>{children}</div>
        </>
    )
}

//children은 react.js가 제공하는 prop이다.