import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../utils/StyleConstants';

export default function Home() {
	return (
		<View style={styles.HomeContainer}>
			<Text>Home</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	HomeContainer: {
		flex: 1,
		padding: 10,
		backgroundColor: Colors.background,
	},
});