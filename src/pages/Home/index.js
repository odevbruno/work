import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width } = Dimensions.get('window');

const COR_AZUL = "#266873"
const COR_BLACK_ESCURO = "#121214"

export default function Home({ navigation }) {

  const [index, setIndex] = useState(0)
  const [reqs, setReqs] = useState([])

  const GeraNovaReq = () => {
    if (reqs.length > 0) {
      return novosItems();
    } else {
      return novoItem();
    }
  }

  const novoItem = () => {
    const random = Math.floor(Math.random() * 999999)
    let arr = []
    let data = {
      id: '123',
      title: `Patrimônio ${random}`,
      dataAtual: new Date()
    }
    arr.push(data)
    setReqs(arr)
  }

  const novosItems = () => {
    const random = Math.floor(Math.random() * 999999)
    let arr = []
    let data = {
      id: '123',
      title: `Patrimônio ${random}`,
      dataAtual: new Date()
    }
    const res = [...reqs, data]
    setReqs(res)
  }

  const BoxSolicitacao = () => (
    <View style={styles.row}>
      <Text style={[styles.txt, styles.txtBOLD]}>Solicitações</Text>
      <Text style={styles.txt}>{reqs.length}</Text>
    </View>
  )

  const BoxCategorias = () => (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => setIndex(0)}
        style={index === 0 ? [styles.botaoCategoria, { borderWidth: 2, borderColor: COR_AZUL }] : styles.botaoCategoria}>
        <Text style={index === 0 ? styles.txtBotoesAtivos : styles.txtBotoes}>Em andamento</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIndex(1)}
        style={index === 1 ? [styles.botaoCategoria, { borderWidth: 2, borderColor: COR_AZUL }] : styles.botaoCategoria}>
        <Text style={index === 1 ? styles.txtBotoesAtivos : styles.txtBotoes}>Finalizados</Text>
      </TouchableOpacity>
    </View>
  )

  const HeaderScreen = () => (
    <View style={styles.header}>
      <Image
        source={require('../../Img/Logo.png')}
        style={styles.logo}
      />
      <Ionicons onPress={() => navigation.navigate('Login')} color={COR_BLACK_ESCURO} size={25} name='log-out-outline' />
    </View>
  )

  const Arrays = () => (
    <>
      <View style={styles.divider} />
      <FlatList
        data={reqs}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    </>
  )

  const CardItem = ({ data }) => {
    const { title, dataAtual } = data;
    return (
      <View style={styles.card}>
        <View style={styles.detailsCard} />
        <View style={styles.containerCard}>
          <Text style={[styles.txt, { fontSize: 19 }]}>{title}</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8
          }}>
            <Ionicons style={{
              marginRight: 5
            }}
              name='time-outline'
              size={18}
              color={'#b2b1b4'}
            />
            <Text style={styles.txtBotoes}>{dataAtual?.toLocaleDateString('pt-br')} às {dataAtual?.toLocaleTimeString('pt-br').substring(0,5)}</Text>
          </View>
          <View style={{
            backgroundColor: '#4c484c',
            position: 'absolute',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            right: 35,
            top: 20
          }}>
            <Ionicons color={COR_AZUL} name='hourglass' size={30} />
          </View>
        </View>
      </View>
    )
  }

  const Footer = () => (
    <TouchableOpacity
      style={styles.botao}
      onPress={() => GeraNovaReq()}
    >
      <Text style={styles.botaoText}>Nova solicitação</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <HeaderScreen />
      <BoxSolicitacao />
      <BoxCategorias />
      <Arrays />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 10
  },
  containerCard: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    padding: 15
  },
  card: {
    flexDirection: 'row',
    width: width - 31,
    height: 90,
    backgroundColor: '#363336',
    marginBottom: 20,
    borderRadius: 5
  },
  detailsCard: {
    height: '100%',
    width: 10,
    backgroundColor: COR_AZUL,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  botaoCategoria: {
    backgroundColor: '#363336',
    width: '48%',
    height: 33,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  txtBOLD: {
    fontWeight: 'bold',
    fontSize: 18
  },
  txt: {
    fontSize: 15,
    color: 'white',
  },
  txtBotoes: {
    color: '#b2b1b4',
  },
  txtBotoesAtivos: {
    color: COR_AZUL,
  },
  header: {
    backgroundColor: '#2c7a87',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COR_BLACK_ESCURO
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: '90%',
    height: 55,
    backgroundColor: '#2c7a87',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})