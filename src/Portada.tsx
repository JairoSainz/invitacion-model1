import boda from "./assets/boda.jpeg";
function Portada(){
    return <div>
        <img src={boda} alt="" className="w-full max-w-md mx-auto object-cover object-center" />
        <h1> Holiwis</h1>
    </div>


}
export default Portada;