import React from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';

import FeaturedToilets from '../components/home-page/FeaturedToilets';
import StationsNearby from '../components/home-page/StationsNearby';
import { CommonStyles } from '../utils/StyleConstants';

export default function Home() {
	return (
		<ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
			<View style={styles.header}>
				<View>
					<Text style={styles.greeting}>Hello, Nishant</Text>
					<Text style={styles.welcomeText}>Welcome to Comfort Zone</Text>
					<Text style={styles.currentLocation}>Mumbai, Maharashtra, 400077</Text>
				</View>
				<TouchableOpacity>
					<Image
						source={require('../assets/images/person.jpeg')}
						style={styles.profileImage}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.searchBarContainer}>
				<TextInput
					style={styles.searchBar}
					placeholder="Search..."
					placeholderTextColor="gray"
				/>
			</View>

			<StationsNearby />
			<FeaturedToilets />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: CommonStyles.background,
	},
	scrollContent: {
		padding: 20,
		paddingBottom: 40,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	greeting: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	welcomeText: {
		fontSize: 12,
		color: 'gray',
	},
	currentLocation: {
		fontSize: 12,
		color: 'gray',
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	searchBarContainer: {
		marginVertical: 20,
	},
	searchBar: {
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 20,
		backgroundColor: 'white',
		padding: 15,
		width: '100%',
		fontSize: 16,
	},
});
