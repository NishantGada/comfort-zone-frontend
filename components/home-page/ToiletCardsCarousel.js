import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ToiletCardCarousel = ({ data }) => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.scrollContent}
			style={styles.scrollView}
		>
			{data.map((toilet, index) => (
				<View key={index} style={styles.toiletCard}>
					<Image
						source={toilet.toilet_image_url}
						style={styles.image}
					/>
					<View style={styles.overlay}>
						<Text style={styles.cardTitle}>{toilet.toilet_name}</Text>
						<View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
							<Text style={styles.toiletRating}>{toilet.toilet_rating}</Text>
							<Text style={styles.toiletReviewCount}>{toilet.toilet_reviews?.count} reviews</Text>
						</View>
					</View>
				</View>
			))}
		</ScrollView>
	);
};


const styles = StyleSheet.create({
	scrollView: {
		marginVertical: 20,
	},
	scrollContent: {
		gap: 20,
	},
	toiletCard: {
		width: screenWidth * 0.8,
		height: 300,
		backgroundColor: '#ddd',
		borderRadius: 12,
		overflow: 'hidden',
		position: 'relative',
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 12,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'flex-end', // Pushes content to the bottom
		alignItems: 'flex-start',   // Aligns content to the left
		padding: 16, // Adds spacing from edges
	},
	cardTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'left',
	},
	toiletRating: {
		color: '#BDBDBD',
		fontSize: 12,
		textAlign: 'left',
	},
	toiletReviewCount: {
		color: '#BDBDBD',
		fontSize: 12,
		textAlign: 'left',
	},
});

/*

const styles = StyleSheet.create({
	scrollContent: {
		paddingHorizontal: 16,
		gap: 16,
	},
	scrollView: {
		marginVertical: 20,
	},
	toiletCard: {
		width: 200,
		height: 120,
		borderRadius: 12,
		overflow: 'hidden',
		position: 'relative',
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 12,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
	},
});

*/

export default ToiletCardCarousel;
