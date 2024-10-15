import { useContext, useState } from 'react';
import { Modal, Text, View, TouchableOpacity} from 'react-native';
import { SegmentedButtons, Provider, TextInput, IconButton } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import WorkoutContext from './WorkoutContext';
import { customTheme, styles } from '../theme';

const buttons = [
    { value: 'walk', label: 'Walking', icon: 'walk' },
    { value: 'run', label: 'Running', icon: 'run-fast' },
    { value: 'bike', label: 'Biking', icon: 'bike' },
  ];
  
  function AddWorkoutView() {
  
    const [selection, setSelection] = useState(0);
    const [show, setShow] = useState(false);
    const [day, setDay] = useState('Select date');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const {workouts, setWorkouts} = useContext(WorkoutContext);
  
    function addWorkouts(){   
      const modified = [...workouts, {selection, distance: distance, duration, day}];
      setWorkouts(modified);
    }
  
    return (
      <Provider theme={customTheme}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Add a workout</Text>
          <SegmentedButtons
            value={selection}
            onValueChange={setSelection}
            buttons={buttons}
            style={styles.segmentedButtons}
          />
          <TextInput mode='outlined' keyboardType='numeric' label={'Distance (km)'} style={styles.input} value={distance} onChangeText={setDistance}/>
          <TextInput mode='outlined' keyboardType='numeric' label={'Duration (min)'} style={styles.input} value={duration} onChangeText={setDuration}/>
          <IconButton
            icon="calendar"
            size={30}
            color={customTheme.colors.primary}
            style={styles.icon}
          />
          <ModalCalendar show={show} setShow={setShow} setDay={setDay}/>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Text style={styles.buttonText}>{day}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.addworkoutButton}
          onPress={addWorkouts}
        >
          <Text style={styles.addWorkoutButtonText}>Add workout</Text>
        </TouchableOpacity>
        </View>
      </Provider>
    );
  };
  
  function ModalCalendar({show, setShow, setDay}) { 
    return (
      <Modal
        visible={show}
        transparent={false}
        >
          <View style={styles.modal}>
            <Calendar
               onDayPress={day => {
                setShow(false);
                setDay(day.dateString);
               }}
            />
          </View>
      </Modal>
    )
  }

  export { AddWorkoutView, ModalCalendar };