import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

const BookingConfirmationScreen = ({ navigation, route }: any) => {
  const { service, date, time } = route.params;
  const { user } = useAuth();
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmBooking = async () => {
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // await bookingService.createBooking({
      //   serviceId: service.id,
      //   date,
      //   time,
      //   notes,
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(() => resolve(undefined), 2000));

      Alert.alert(
        'Booking Confirmed!',
        'Your booking has been successfully created.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home'),
          },
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to create booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Confirm Booking</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Booking Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Booking Summary</Text>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Service</Text>
            <Text style={styles.summaryValue}>{service.name}</Text>
          </View>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Duration</Text>
            <Text style={styles.summaryValue}>{service.duration}</Text>
          </View>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Price</Text>
            <Text style={styles.summaryValue}>{service.price}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Date</Text>
            <Text style={styles.summaryValue}>{date}</Text>
          </View>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Time</Text>
            <Text style={styles.summaryValue}>{time}</Text>
          </View>
        </View>

        {/* User Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Booking For</Text>
          <Text style={styles.userName}>{user?.name || 'User'}</Text>
          <Text style={styles.userEmail}>{user?.email || ''}</Text>
        </View>

        {/* Additional Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>Additional Notes (Optional)</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Add any special requests or notes..."
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            placeholderTextColor="#999999"
          />
        </View>

        {/* Terms */}
        <View style={styles.termsSection}>
          <Text style={styles.termsText}>
            By confirming this booking, you agree to our terms and conditions.
          </Text>
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <TouchableOpacity
        style={[styles.confirmButton, isLoading && styles.confirmButtonDisabled]}
        onPress={handleConfirmBooking}
        disabled={isLoading}
      >
        {isLoading ? (
          <Text style={styles.confirmButtonText}>Processing...</Text>
        ) : (
          <Text style={styles.confirmButtonText}>Confirm Booking</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  scrollView: {
    flex: 1,
  },
  summaryCard: {
    backgroundColor: '#F2F2F7',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 12,
  },
  infoCard: {
    backgroundColor: '#F2F2F7',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
  },
  notesSection: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  notesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  notesInput: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333333',
    minHeight: 100,
  },
  termsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  termsText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 18,
  },
  confirmButton: {
    margin: 20,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BookingConfirmationScreen;
