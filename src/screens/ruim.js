import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Selecionar = ({ onSelecionarValor }) => {
  const [hora, setHora] = useState('00');
  const [minuto, setMinuto] = useState('00');

  const handleSelecionarValor = () => {
    const valorSelecionado = `${hora}:${minuto}`;
    onSelecionarValor(valorSelecionado);
  };

  return (
    <View style={styles.container}>
      <View>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={hora}
          onValueChange={(valor) => setHora(valor)}
        >
          {Array.from({ length: 25 }, (_, i) => {
            const hora = i.toString().padStart(2, '0');
            return <Picker.Item key={hora} label={hora} value={hora} />;
          })}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={minuto}
          onValueChange={(valor) => setMinuto(valor)}
        >
          {Array.from({ length: 60 }, (_, i) => {
            const minuto = i.toString().padStart(2, '0');
            return <Picker.Item key={minuto} label={minuto} value={minuto} />;
          })}
        </Picker>
      </View>
      
      </View>

      <Button style={styles.Button} title="Selecionar" onPress={handleSelecionarValor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500, // Ajuste a altura conforme necessário
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  picker: {
    flex: 1,
  },
  Button:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
  }
});

export default Selecionar;
