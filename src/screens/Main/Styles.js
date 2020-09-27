import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  form: {
    marginTop: 10,
    flex: 1,
    padding: 15,
    backgroundColor: 'rgb(245,245,245)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lineForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputName: {
    borderRadius: 4,
    padding: 6,
    height: 32,
    borderWidth: 1,
    borderColor: '#999',
    width: 200,
    justifyContent: 'center',
  },
  boxLeft: {
    marginRight: 10,
  },
  boxRight: {
    flex: 1,
  },

  boxRadio: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  radioButton: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#999',
  },
  textRadio: {
    fontSize: 10,
    marginLeft: 2,
    color: '#555',
  },
  picker: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 2,
    borderColor: '#999',
    color: '#555',
  },
  inputSalario: {
    borderRadius: 4,
    padding: 6,
    borderWidth: 1,
    borderColor: '#999',
    width: 120,
    height: 32,
  },
  boxInputDataNasc: {
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#999',
    height: 32,
    alignItems: 'center',
    paddingRight: 5,
  },
  inputDataNasc: {
    flex: 1,
    padding: 5,
    height: 32,
  },
  boxChecks: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnDocuments: {
    width: 100,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#3CB371',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  btnDocumentsText: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#FFF',
  },
  boxFilesDocuments: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  boxBtnForm: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  btn: {
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnCancel: {
    borderWidth: 1,
    borderColor: '#555',
  },
  btnSave: {
    backgroundColor: '#3CB371',
  },
});
