import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import initRFIDScanner from './RFIDScannerUtils';

const ScannerComponent: React.FC = () => {
  useEffect(() => {
    // Inicialize o scanner RFID quando o componente for montado
    const {removeRFIDScannerCallback, shutdownRFIDScanner} = initRFIDScanner();

    // Exemplo de como desligar o scanner RFID após 10 segundos
    const timer = setTimeout(() => {
      removeRFIDScannerCallback();
      shutdownRFIDScanner();
    }, 10000);

    // Cleanup: Remova o callback e desligue o scanner quando o componente for desmontado
    return () => {
      clearTimeout(timer);
      removeRFIDScannerCallback();
      shutdownRFIDScanner();
    };
  }, []);

  return (
    // Seu código JSX/TSX para o componente Scanner
    // ...
    <View>
      <Text>Teste</Text>
    </View>
  );
};

export default ScannerComponent;
