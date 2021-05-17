import React from 'react'

export const Footer = () => {
    let footerStyle={
        position: "absolute",
        //  top: "94.4vh",
        marginTop:'20px',
        display:"flex",
        width: "100%",
        fontFamily:"college",
        // textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    }
    
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">

            Copyright &copy; www.MyTodos.com
            </p>
        </footer>
    )
}
