import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

const planetas = [
  {
    id: '1',
    nome: 'Mercúrio',
    descricao: 'O menor e mais próximo planeta do Sol, com uma superfície cheia de crateras.',
    imagem: require('./assets/mercurio.png'),
    detalhes: {
      massa: '3.3 × 10^23 kg',
      raio: '2,439.7 km',
      temperatura: '430°C (dia) / -180°C (noite)',
      descoberta: 'Antiguidade',
    },
  },
  {
    id: '2',
    nome: 'Vênus',
    descricao: 'O planeta mais quente do sistema solar, com uma atmosfera densa de dióxido de carbono.',
    imagem: require('./assets/venus.png'),
    detalhes: {
      massa: '4.87 × 10^24 kg',
      raio: '6,051.8 km',
      temperatura: '462°C',
      descoberta: 'Antiguidade',
    },
  },
  {
    id: '3',
    nome: 'Terra',
    descricao: 'O único planeta conhecido por abrigar vida, coberto por oceanos e uma atmosfera rica em oxigênio.',
    imagem: require('./assets/terra.png'),
    detalhes: {
      massa: '5.97 × 10^24 kg',
      raio: '6,371 km',
      temperatura: '15°C (média)',
      descoberta: 'Antiguidade',
    },
  },
  {
    id: '4',
    nome: 'Marte',
    descricao: 'O planeta vermelho, conhecido por suas montanhas, vulcões e possibilidade de água no passado.',
    imagem: require('./assets/marte.png'),
    detalhes: {
      massa: '6.42 × 10^23 kg',
      raio: '3,389.5 km',
      temperatura: '-60°C (média)',
      descoberta: 'Antiguidade',
    },
  },
  {
    id: '5',
    nome: 'Júpiter',
    descricao: 'O maior planeta do sistema solar, com uma enorme tempestade chamada Grande Mancha Vermelha.',
    imagem: require('./assets/jupiter.png'),
    detalhes: {
      massa: '1.90 × 10^27 kg',
      raio: '69,911 km',
      temperatura: '-145°C',
      descoberta: 'Antiguidade',
    },
  },
  {
    id: '6',
    nome: 'Saturno',
    descricao: 'Conhecido por seus impressionantes anéis compostos de gelo e poeira.',
    imagem: require('./assets/saturno.png'),
    detalhes: {
      massa: '5.68 × 10^26 kg',
      raio: '58,232 km',
      temperatura: '-178°C',
      descoberta: 'Antiguidade',
    },
  },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <View style={styles.cardPrincipal}>
        <Image source={require('./assets/sistema_solar.png')} style={styles.mainImage} />
        <View style={styles.textContainer}>
          <Text style={styles.nome}>Sistema Solar</Text>
          <Text style={styles.descricao}>
            O Sistema Solar é formado pelo Sol e pelos corpos celestes que orbitam ao seu redor, incluindo planetas, luas, asteroides e cometas.
          </Text>
        </View>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Idade: 4,6 bilhões de anos</Text>
        <Text style={styles.infoText}>Planetas: 8</Text>
        <Text style={styles.infoText}>Estrela: Sol</Text>
      </View>
      <Text style={styles.subtitle}>Planetas</Text>
      <FlatList
        data={planetas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.planetImage} />
            <View style={styles.textContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.detalhes}>Massa: {item.detalhes.massa}</Text>
              <Text style={styles.detalhes}>Raio: {item.detalhes.raio}</Text>
              <Text style={styles.detalhes}>Temperatura: {item.detalhes.temperatura}</Text>
              <Text style={styles.detalhes}>Descoberta: {item.detalhes.descoberta}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cardPrincipal: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mainImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  infoBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planetImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  detalhes: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});
