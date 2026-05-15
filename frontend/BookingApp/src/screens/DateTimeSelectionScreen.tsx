import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const DateTimeSelectionScreen = ({ navigation, route }: any) => {
  const { service } = route.params;
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = [
    { id: 1, day: 'Mon', date: '15', month: 'May', fullDate: 'May 15, 2026' },
    { id: 2, day: 'Tue', date: '16', month: 'May', fullDate: 'May 16, 2026' },
    { id: 3, day: 'Wed', date: '17', month: 'May', fullDate: 'May 17, 2026' },
    { id: 4, day: 'Thu', date: '18', month: 'May', fullDate: 'May 18, 2026' },
    { id: 5, day: 'Fri', date: '19', month: 'May', fullDate: 'May 19, 2026' },
    { id: 6, day: 'Sat', date: '20', month: 'May', fullDate: 'May 20, 2026' },
    { id: 7, day: 'Sun', date: '21', month: 'May', fullDate: 'May 21, 2026' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate('BookingConfirmation', {
        service,
        date: selectedDate,
        time: selectedTime,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select Date & Time</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Selected Service Info */}
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>{service.name}</Text>
          <Text style={styles.serviceDetails}>{service.duration} • {service.price}</Text>
        </View>

        {/* Date Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
            {dates.map((date) => (
              <TouchableOpacity
                key={date.id}
                style={[
                  styles.dateCard,
                  selectedDate === date.fullDate && styles.dateCardSelected,
                ]}
                onPress={() => setSelectedDate(date.fullDate)}
              >
                <Text style={[
                  styles.dayText,
                  selectedDate === date.fullDate && styles.dayTextSelected
                ]}>{date.day}</Text>
                <Text style={[
                  styles.dateText,
                  selectedDate === date.fullDate && styles.dateTextSelected
                ]}>{date.date}</Text>
                <Text style={[
                  styles.monthText,
                  selectedDate === date.fullDate && styles.monthTextSelected
                ]}>{date.month}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Time Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.timeGrid}>
            {timeSlots.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.timeSlotSelected,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[
                  styles.timeText,
                  selectedTime === time && styles.timeTextSelected
                ]}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, (!selectedDate || !selectedTime) && styles.continueButtonDisabled]}
        onPress={handleContinue}
        disabled={!selectedDate || !selectedTime}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
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
  serviceInfo: {
    backgroundColor: '#F2F2F7',
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  serviceDetails: {
    fontSize: 14,
    color: '#666666',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  dateScroll: {
    flexDirection: 'row',
  },
  dateCard: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 70,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  dateCardSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#E8F4FF',
  },
  dayText: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  dayTextSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  dateTextSelected: {
    color: '#007AFF',
  },
  monthText: {
    fontSize: 12,
    color: '#666666',
  },
  monthTextSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeSlot: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    minWidth: 100,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  timeSlotSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#E8F4FF',
  },
  timeText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  timeTextSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  continueButton: {
    margin: 20,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DateTimeSelectionScreen;
