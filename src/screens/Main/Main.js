import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import Checkbox from '../../components/Checkbox';
import Document from '../../components/Document';

import Header from '../../components/Header';
import Style from './Styles';
import PickerInput from '../../components/PickerInput';

function Main() {
  //MASC= 0 <-> FEMI= 1
  const [sexo, setSexo] = useState(0);
  const [profissao, setProfissao] = useState('');
  const [moeda, setMoeda] = useState('');

  const dados_saved = [
    { label: 'Documento de indentidade' },
    { label: 'NIF' },
    { label: 'Comprovante de Residência' },
  ];

  const profissao_data = [
    { label: 'Eletricista', value: 'eletricista' },
    { label: 'Médico', value: 'medico' },
    { label: 'Pedreiro', value: 'pedreiro' },
  ];
  const moeda_data = [
    { label: 'Real', value: 'real' },
    { label: 'Dólar', value: 'dolar' },
    { label: 'Euro', value: 'euro' },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Header />
      <View style={Style.form}>
        <View style={Style.lineForm}>
          <View style={Style.boxLeft}>
            <Text style={Style.textForm}>Nome *</Text>
            <TextInput style={Style.inputName} />
          </View>
          <View style={Style.boxRight}>
            <Text style={Style.textForm}>Sexo *</Text>
            <View style={Style.boxRadio}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={Style.radioButton}
                  onPress={() => setSexo(0)}>
                  <Text style={sexo === 0 ? Style.selectedRadio : null}></Text>
                </TouchableOpacity>
                <Text style={Style.textRadio}>MASCULINO</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={Style.radioButton}
                  onPress={() => setSexo(1)}>
                  <Text style={sexo === 1 ? Style.selectedRadio : null}></Text>
                </TouchableOpacity>
                <Text style={Style.textRadio}>FEMININO</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[Style.lineForm, { marginTop: 12 }]}>
          <PickerInput
            data={profissao_data}
            onValueChange={setProfissao}
            value={profissao}
            title="Profissão"
            width={200}
          />
          <PickerInput
            data={moeda_data}
            onValueChange={setMoeda}
            value={moeda}
            width={120}
            title="Moeda"
          />
        </View>

        <View style={[Style.lineForm, { marginTop: 10 }]}>
          <View style={Style.boxLeft}>
            <Text style={Style.textForm}>Salário</Text>
            <TextInput style={Style.inputSalario} />
          </View>
          <View style={Style.boxRight}>
            <Text style={Style.textForm}>Data de Nascimento</Text>
            <View style={Style.boxInputDataNasc}>
              <TextInput style={Style.inputDataNasc} />
              <Icon name={'calendar'} size={22} color={'#666'} />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text style={Style.textForm}>Locais onde deseja trabalhar</Text>
          <View style={Style.boxChecks}>
            <Checkbox title="Luanda" />
            <Checkbox title="Cabo Ledo" />
            <Checkbox title="Viana" />
            <Checkbox title="Benguela" />
            <Checkbox title="Talatona" />
          </View>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={Style.textForm}>Documentos</Text>
          <TouchableOpacity style={Style.btnDocuments}>
            <Icon name={'camera'} size={22} color={'#FFF'} />
            <Text style={Style.btnDocumentsText}>Adcionar</Text>
          </TouchableOpacity>
          <FlatList
            style={{ marginTop: 10 }}
            data={dados_saved}
            numColumns={2}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <View style={{ width: '50%' }}>
                <Document onPress={() => {}} title={item.label} />
              </View>
            )}
          />
        </View>
        <View style={Style.boxBtnForm}>
          <TouchableOpacity
            onPress={() => {}}
            style={[Style.btnCancel, Style.btn]}>
            <Text style={{ color: '#555', fontWeight: 'bold' }}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[Style.btnSave, Style.btn]}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Main;
