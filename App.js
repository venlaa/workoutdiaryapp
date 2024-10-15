import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation, PaperProvider } from 'react-native-paper';
import { customTheme } from './theme';
import WorkoutContext from './components/WorkoutContext';
import { AddWorkoutView } from './components/AddWorkoutView';
import { WorkoutListView } from './components/WorkoutListView';
import { UnitView } from './components/UnitView';

const routes = [
  { key: 'addWorkoutView', title: 'Add a Workout', focusedIcon: 'plus-box' },
  { key: 'workoutListView', title: 'Workouts', focusedIcon: 'arm-flex' },
  { key: 'unitView', title: 'Switch unit', focusedIcon: 'cog' }
]

const renderScene = BottomNavigation.SceneMap({
  addWorkoutView: AddWorkoutView,
  workoutListView: WorkoutListView,
  unitView: UnitView
});

export default function App() {

  const [index, setIndex] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  return (
    <PaperProvider theme={customTheme}>
      <WorkoutContext.Provider value={{workouts, setWorkouts}}>
      <View style={{ flex: 1 }}>
        <StatusBar />
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{ backgroundColor: customTheme.colors.primary }}
          activeColor={customTheme.colors.surface}
          inactiveColor={customTheme.colors.onSurface}
        />
      </View>
      </WorkoutContext.Provider>
    </PaperProvider>
  )
};


