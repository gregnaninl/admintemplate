
import { useEffect, useState } from 'react';
//import Button from 'react-bootstrap/Button'
import Loading from '../../components/loading/Loading';



const Polizas = () => {

    const [loading,setLoading] = useState(true); 

   /* const columns = [{
        dataField: 'id_sco',
        text: 'id',
        hidden:true
        },{
    dataField: 'numero',
    text: 'Número SCO'
    }, {
    dataField: 'nombre',
    text: 'Nombre'
    }, {
    dataField: 'objeto',
    text: 'Objeto'
    },{
    dataField: 'estado_descripcion',
    text: 'Estado'
    },{
        dataField: 'sp',
        text: 'SP',
        },{
    dataField: 'fecha_alta',
    text: 'Fecha de creación',
    },{
        dataField : 'buttons',
        text:'',
        formatter: (cellContent, row) => {
            return (
              <div>
                  
                    <Button variant="primary" size="sm"
                     onClick={()=>{
                     }}> 
                     Buscar
                     </Button>
                    
    
              </div>
            );
          }
        }
    ];*/

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);        
      }, []);


    return ( 
        <div>
            <div className="col-12">
              <div className="card">
              <div className="card-header">
              <i className="fa-solid fa-bars nav-bar-icon"></i>
              </div>                  
                <div className="card-body">
                  <h5 className="card-title">Polizas<span> / Hoy </span></h5>
                  <Loading active={loading}>
                    Hola
                  </Loading>
              </div>
            </div>
            </div>
        </div>
     );
}
 
export default Polizas;