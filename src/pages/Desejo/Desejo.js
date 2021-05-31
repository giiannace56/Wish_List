import {Component} from 'react';

class Desejo extends Component{
    constructor (props)
    {
        super(props);
        this.state = {
            listaDesejos : [],
            usuario : '',

            //Observar a retirada
            desejo : ''
        }
    }

    buscarDesejos = () =>
    {
        console.log('Vamos fazer a chamada para a API')
        fetch('http://localhost:5000/api/desejo')

        .then(response => response.json())

        .then(dados => this.setState({listaDesejos : dados}))

        .catch(erro => console.log(erro))
    }

    buscarUsuario = () =>
    {
        console.log('Vamos fazer a chamada para a API')
        fetch('http://localhost:5000/api/usuario')

        .then(response => response.json())

        .then(dados => this.setState({usuario : dados}))

        .catch(erro => console.log(erro))
    }

    //Observar a construção deste método
    atualizaDesejo = async (event) =>
    {
       await this.setState({desejo : event.target.value})
    }

    CadastrarDesejo = (event) =>
    {
        event.preventDefault();

        fetch('http://localhost:5000/api/desejo', {
            method :  'POST',
            body :    JSON.stringify({Desejo : this.state.listaDesejos}),
            headers : 
            {
                "Content-Type" : "application/json"
            }
        })

        .then(console.log('Desejo Inserido!'))

        .catch(erro => console.log(erro))
    
        .then(this.buscarDesejos)
    }


    componentDidMount()
    {
        this.buscarDesejos();

        //Observar se vai ser mantido
        this.buscarUsuario();
    }

    render()
    {
        return(
            <div>
                <main>
                <section>
                        <h2>Inserir um novo Desejo</h2>
                        <form onSubmit = {this.CadastrarDesejo}>
                            <div>
                                <input
                                    type = "text"
                                    value = {this.state.desejo}
                                    onChange = {this.atualizaDesejo}
                                    placeholder = " Inserir Um novo desejo"
                                />
                                <button type = "submit">Inserir</button>
                            </div>
                        </form>
                    </section>

                    <section>
                        <h2>Lista dos Desejos</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Usuário</th>
                                    <th>Desejos</th>
                                    <th>Descrição do Desejo</th>  {/* Observar se vai ser retirado */}
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaDesejos.map( (Desejos) => {
                                        return (
                                            <tr>
                                                <td>{Desejos.IdDesejo}</td>
                                                <td>{Desejos.DescricaoDesejo}</td>
                                                <td>{Desejos.DesejoUsuario}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}


export default Desejo;