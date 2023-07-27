import { Component } from "react";
import './App.css'

class App extends Component{

  state={
    counter: 0,
    posts:[
      {
        id:1,
        title:'O title 1',
        body: 'O corpo 1'
      },
      {
        id:2,
        title:'O title 2',
        body: 'O corpo 2'
      },
      {
        id:3,
        title:'O title 3',
        body: 'O corpo 3'
      },
    ]
  }

  timeoutUpDate = null;
// SE EU QUISER QUE ALGO APARESSA SEMPRE ABRO A TELA POREM APARECE APENAS UMA VEZ. CRIAÇÃO DO COMPONENTE

  componentDidMount(){
    this.handleTimeout();
  }
// FAZ A ATUALIZAÇÃO DO COMPONENTE, POREM OCORRE DE DEIXAR ALGUM LIXO NO SISTEMA E PODE DAR ERRO.ATUALIZAÇÃO DO COMPONENTE
  componentDidUpdate(){
    this.handleTimeout();
  }
//FAZ A LIMPESA DOS LIXOS E EVITA A SUJEIRA NO SISTEMA FAZENDO POR SI SO A LIMPEZA.LIMPA NO FINAL DA VIDA DO COMPONENTE
  componentWillUnmount(){
    clearTimeout(this.timeoutUpDate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo mudou!'
    this.timeoutUpDate = setTimeout(()=>{
      this.setState({ posts, counter: counter + 1 })
    },2000)
  }
  render(){
    const { posts, counter } = this.state;

    return(
      <div className="App">
        <h1>{ counter }</h1>
        { posts.map(post => (
          <div key={post.id}>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
          </div>
        )) }
      </div>
    );

  }
}

export default App;
