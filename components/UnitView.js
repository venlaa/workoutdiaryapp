import { Text, View, SafeAreaView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../theme';


function UnitView() {

    return (
      <SafeAreaView>
        <View style={styles.customTheme}>
          <Text style={styles.unitHeaderText}> Settings
        </Text>
        <RadioButton.Group>
            <RadioButton.Item label="Kilometers" value="km" />
            <RadioButton.Item label="Miles" value="mi" />
          </RadioButton.Group>
       </View>
      </SafeAreaView>
    )
  }
  
  export { UnitView };