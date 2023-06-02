import React from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

export default function Selecionar() {
  const translateY = new Animated.Value(0);
  const itemHeight = 50; // Altura de cada item da grade
  const minValue = 0; // Valor mínimo (0 no exemplo)
  const maxValue = 23; // Valor máximo (23 no exemplo)
  const visibleItems = 5; // Número de itens visíveis
  const totalHeight = visibleItems * itemHeight; // Altura total da grade

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      const adjustedTranslationY = translationY / itemHeight;
      const clampedTranslationY = Math.round(adjustedTranslationY) * itemHeight;
      Animated.timing(translateY, {
        toValue: clampedTranslationY,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  };

  const renderItem = (value) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={[
          styles.wheel,
          {
            transform: [{ translateY: translateY }],
            height: totalHeight
          }
        ]}>
          <View style={styles.itemsContainer}>
            {Array.from({ length: maxValue - minValue + 1 }, (_, index) =>
              renderItem(minValue + index)
            )}
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: 200,
    backgroundColor: 'gray',
    overflow: 'hidden',
  },
  itemsContainer: {
     // Ajuste para mostrar os cinco itens centrais
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});
