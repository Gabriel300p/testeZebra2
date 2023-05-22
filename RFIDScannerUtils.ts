import RFIDScanner, {RFIDScannerEvent, Tag} from 'react-native-zebra-rfid';

interface RFIDScannerFunctions {
  removeRFIDScannerCallback: () => void;
  shutdownRFIDScanner: () => void;
}

const initRFIDScanner = (): RFIDScannerFunctions => {
  // Inicialize e conecte o scanner RFID
  RFIDScanner.init();

  const onRfidResult = (tags: Tag[]) => {
    console.info('TAGS: ' + JSON.stringify(tags));
  };

  // Registre o callback para receber os dados do scanner
  RFIDScanner.on(RFIDScannerEvent.TAGS, onRfidResult);

  // Função para remover o callback
  const removeRFIDScannerCallback = (): void => {
    RFIDScanner.removeon(RFIDScannerEvent.TAGS, onRfidResult);
  };

  // Função para desligar o scanner RFID
  const shutdownRFIDScanner = (): void => {
    RFIDScanner.shutdown();
  };

  // Retorne as funções disponíveis
  return {
    removeRFIDScannerCallback,
    shutdownRFIDScanner,
  };
};

export default initRFIDScanner;
