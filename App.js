import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Switch, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const { width, height } = Dimensions.get('window');

const App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [limite, setLimite] = useState(1000);
  const [estudante, setEstudante] = useState(false);

  const abrirConta = () => {
    const mensagem = `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$ ${limite.toFixed(2)}\nEstudante: ${estudante ? 'Sim' : 'Não'}`;
    Alert.alert('Dados da Conta', mensagem);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={(text) => setIdade(text)}
        keyboardType="numeric"
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          style={styles.picker}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}>
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro" value="Outro" />
        </Picker>
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Seu Limite:</Text>
        <Slider
          style={styles.slider}
          minimumValue={1000}
          maximumValue={34000}
          step={100}
          value={limite}
          onValueChange={(value) => setLimite(value)}
        />
        <Text style={styles.limitText}>Limite: R$ {limite.toFixed(2)}</Text>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Estudante:</Text>
        <Switch
          style={styles.switch}
          value={estudante}
          onValueChange={() => setEstudante(!estudante)}
        />
      </View>

      <Button
        title="Abrir Conta!"
        onPress={abrirConta}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  pickerContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  sliderContainer: {
    width: '100%',
    marginBottom: 20,
  },
  slider: {
    height: 40,
    width: '100%',
  },
  limitText: {
    fontSize: 16,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switch: {
    marginLeft: 10,
  },
});

export default App;
