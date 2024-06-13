import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DarkMode from '../Settings/DarkMode'; // Import the DarkMode context


const HeaderSearchbar = () => {
    const navigation = useNavigation();
    const { isDarkMode } = useContext(DarkMode); // Access the dark mode state
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Searchbar
                placeholder="Search"
                style={[styles.searchbar, isDarkMode && styles.darkSearchbar]}
                inputStyle={[styles.searchInput, isDarkMode && styles.darkSearchInput]}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={() => navigation.navigate('SearchResults', { searchQuery })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:"90%",
        justifyContent:'flex-end',
        height:"70%",
        top:9
    },
    darkContainer: {
        backgroundColor: '#121212',
    },
    searchbar: {
        backgroundColor: '#EDEDED', // Light gray background
        width: '100%',
        height: '100%', // Ensure it takes full height of the container
    },
    darkSearchbar: {
        backgroundColor: '#333333', // Dark gray background
    },
    searchInput: {
        color: '#000000', // Black text color
    },
    darkSearchInput: {
        color: '#FFFFFF', // White text color in dark mode
    },
});

export default HeaderSearchbar;
