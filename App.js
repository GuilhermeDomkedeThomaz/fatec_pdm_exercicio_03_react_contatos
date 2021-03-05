import React, {useState} from 'react';
import { Text, TextInput, StyleSheet, Button, View, FlatList } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const capturarNome = (nome) => {setNome(nome)};
  const [telefone, setTelefone] = useState('');
  const capturarTelefone = (telefone) => {setTelefone(telefone)};
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);
  const adicionarContato = () => {
    setContatos(() => {
      console.log('Nome: ' + nome, ' Telefone: ' + telefone);
      let contato = {
        'nome': nome,
        'telefone': telefone
      }
      setContadorContatos(contadorContatos + 1);
      return [...contatos, {key: contadorContatos.toString(), value: contato}];
    });
  }

  return(
    <View style={styles.container}>
      <View style={styles.contatoInputView}>
        <TextInput
          placeholder="Digite o nome..."
          style={styles.contatoTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput
          placeholder="Digite o telefone..."
          style={styles.contatoTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <Button
          style={styles.contatoInputButton}
          title="Inserir Contato"
          onPress={adicionarContato}
        />
      </View>
      <View style={styles.contatosFlatList}>
        <FlatList
          data={contatos}
          renderItem={
            contato => (
              <View style={styles.contatoNaLista}>
                <Text>{contato.item.value.nome}</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  contatoInputView: {
    alignItems: 'center',
    marginBottom: 12
  },
  contatoTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    textAlign: 'center'
  },
  contatoInputButton: {
    width: '80%'
  },
  contatoNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
  },
  contatosFlatList: {
    width: '80%',
    alignSelf: 'center'
  }
});
