import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useEffect } from 'react';

export function Quiz({route}) {

    const { xp, setXp } = route.params

    function handlePress () {
        setXp((currentXp) => {
            return (currentXp + 1)
        })
    }
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Quiz</Text>
        <Button onPress={handlePress}>Press to increase your XP</Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });