import React from "react";
import SonComp from "./SonComp";
const father = props =>
    <div>
        <h1>
            Test, Father and sons components:
        </h1>
        <h1>
            {props.FirstName} {props.LastName}
        </h1>
        <h2>
            <ul>
                <h4>"Filhos passados pelo componente pai:"</h4>
                <SonComp FirstName="Pedro" LastName={props.LastName} />
                {/* abaixo passa todas as propiedades do pai */}
                <SonComp {...props} />
                {/* Aqui da prioridade para a o que vem depois */}
                <SonComp {...props} FirstName="Marcia" />
                <h4>"Filhos passados pela chamada do componente no index:" </h4>
                {/* aqui passando os filhos de forma literal sem verificar propriedades */}
                {props.children} 
                {/* aqui passando verificando propriedades */}
                {
                    React.Children.map(props.children, child => {
                        return React.cloneElement(child, {
                            ...props, ...child.props
                        })
                    })
                }

            </ul>
        </h2>
    </div>
export default father