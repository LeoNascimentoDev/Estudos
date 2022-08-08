import React, { Component } from "react";

export default class Salutation extends Component {
    //definir estados para poderem ser alterados
    // o state pode ser inicializado com os parâmetros passados no index utilizando this.props.name e this.props.type ou simplesmente estar vazio
    state = {
        type: this.props.type,
        name: ""
    }

    constructor(props) {
        super(props)
        // outra possibilidade de passar ua chamada de função no onchange
        this.setName = this.setName.bind(this)
    }

    // para mudar e setar os estados
    setType(e) {

        this.setState({ type: e.target.value })
    }
    setName(e) {

        this.setState({ name: e.target.value })
    }
    render() {
        // "this" se refere ao elemento recém criado. É utilizado destructuring para acessar as propiedades.
        const { type, name } = this.state
        return (
            <div>
                <h1>
                    Salutation:
                    <br />
                    {type} {name}!
                    <hr />
                    <input type="text" placeholder="Type..." value={type} onChange={e => this.setType(e)} />
                    {/* observar a utra forma de realizar a chamada da função no "onchange" */}
                    <input type="text" placeholder="Name..." value={name} onChange={this.setName} />
                </h1>
            </div>
        )
    }
}