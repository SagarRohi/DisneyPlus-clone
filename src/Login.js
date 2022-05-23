import Header from "./Header";
const Login=()=>{
    return <><Header/>
    <div className="w-screen h-screen bg-cover bg-center bg-home flex justify-center items-cente">
        <div className="w-full flex flex-col justify-center items-center space-y-5">
            <img src='/images/cta-logo-one.svg'
            className="w-4/6 md:w-3/6 lg:w-2/6" alt="home page"/>
            <button 
             className="uppercase w-4/6 py-1.5 md:w-3/6 lg:w-2/6 
            bg-blue-700 lg:text-xl lg:font-medium text-white rounded hover:bg-blue-500">Get All There</button>
            <p className="text-white text-md font-light text-center 
               w-5/6 md:w-4/6 lg:w-3/6 tracking-wider leading-7">get Premium access to raya and the last dragon for an additional fee with a disney+ subscription. As of 
                03/26/22, the price of disney+ and the disney bundle will increase by $1.
            </p>
            <img src='/images/cta-logo-two.png'
            className="w-4/6 object-cover md:w-3/6 lg:w-2/6" alt="home page"/>
        </div>
    </div>
    </>
}

export default Login;