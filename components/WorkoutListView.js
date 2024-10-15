import { useContext } from 'react';
import { Text, View, FlatList, SafeAreaView} from 'react-native';
import { Card, Text as RNPText, Avatar } from 'react-native-paper';
import WorkoutContext from './WorkoutContext';
import { styles } from '../theme';

function WorkoutListView() {
  

    const { workouts } = useContext(WorkoutContext);
  
    const totals = {
      walking: workouts
        .filter(workout => workout.selection === 'walk')
        .reduce((sum, workout) => sum + Number(workout.distance), 0),
      running: workouts
        .filter(workout => workout.selection === 'run')
        .reduce((sum, workout) => sum + Number(workout.distance), 0),
      biking: workouts
        .filter(workout => workout.selection === 'bike')
        .reduce((sum, workout) => sum + Number(workout.distance), 0),
    };
  
    const WorkoutCard = ({ icon, total, iconColor}) => (
      <Card>
        <View style={styles.sumCardContainer}>
        <Avatar.Icon size={50} icon={icon} style={styles.sumIcon} color={iconColor}/>
        <Card.Content>
          <RNPText style={styles.totalText}>{total} km</RNPText>
        </Card.Content>
        </View>
      </Card>
    );
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}> 
          <Text style={styles.headerText}>Your workouts</Text>
          <View style={styles.sumCardContainer}>
            <WorkoutCard title="Walking" icon="walk" total={totals.walking} iconColor="#F59B5B"/>
            <WorkoutCard title="Running" icon="run-fast" total={totals.running} iconColor="#F59B5B" />
            <WorkoutCard title="Biking" icon="bike" total={totals.biking} iconColor="#F59B5B" />
          </View>
          <FlatList
            data={workouts}
            renderItem={Item}
            keyExtractor={item => item.day}
            contentContainerStyle={{ paddingBottom: 20 }} 
            ListFooterComponent={<View style={{ height: 50 }} />} 
          />
        </View>
        </SafeAreaView>
    )
  }
  
  function Item ({ item }) {
  
    return( 
    <Card style={styles.card}>
      <Card.Title titleVariant='titleMedium' title={item.day} left={props => <Avatar.Icon icon={item.selection} size={40}style={styles.cardIconColor} />} />
      <Card.Content>
        <RNPText>Distance: {item.distance} km </RNPText>
        <RNPText>Duration: {item.duration} min </RNPText>
      </Card.Content>
    </Card>
    );
  };

  export { WorkoutListView, Item };