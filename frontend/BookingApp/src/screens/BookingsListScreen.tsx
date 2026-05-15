import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const BookingsListScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingBookings = [
    { id: 1, service: 'Haircut', date: 'May 15, 2026', time: '10:00 AM', status: 'Confirmed', price: '$25' },
    { id: 2, service: 'Massage', date: 'May 18, 2026', time: '2:00 PM', status: 'Pending', price: '$60' },
  ];

  const pastBookings = [
    { id: 3, service: 'Facial', date: 'May 1, 2026', time: '11:00 AM', status: 'Completed', price: '$45' },
    { id: 4, service: 'Manicure', date: 'April 25, 2026', time: '3:00 PM', status: 'Completed', price: '$20' },
    { id: 5, service: 'Hair Coloring', date: 'April 10, 2026', time: '1:00 PM', status: 'Cancelled', price: '$80' },
  ];

  const bookings = activeTab === 'upcoming' ? upcomingBookings : pastBookings;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return '#34C759';
      case 'Pending':
        return '#FF9500';
      case 'Completed':
        return '#007AFF';
      case 'Cancelled':
        return '#FF3B30';
      default:
        return '#999999';
    }
  };

  const handleBookingPress = (booking: any) => {
    // Navigate to booking details
    console.log('Booking pressed:', booking);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Bookings</Text>
        <View style={{ width: 50 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'upcoming' && styles.tabActive]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.tabTextActive]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'past' && styles.tabActive]}
          onPress={() => setActiveTab('past')}
        >
          <Text style={[styles.tabText, activeTab === 'past' && styles.tabTextActive]}>
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bookings List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {bookings.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              {activeTab === 'upcoming' ? 'No upcoming bookings' : 'No past bookings'}
            </Text>
            {activeTab === 'upcoming' && (
              <TouchableOpacity
                style={styles.newBookingButton}
                onPress={() => navigation.navigate('NewBooking')}
              >
                <Text style={styles.newBookingButtonText}>Book Now</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          bookings.map((booking) => (
            <TouchableOpacity
              key={booking.id}
              style={styles.bookingCard}
              onPress={() => handleBookingPress(booking)}
            >
              <View style={styles.bookingHeader}>
                <Text style={styles.bookingService}>{booking.service}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(booking.status) },
                  ]}
                >
                  <Text style={styles.statusText}>{booking.status}</Text>
                </View>
              </View>

              <View style={styles.bookingDetails}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>📅</Text>
                  <Text style={styles.detailValue}>{booking.date}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>⏰</Text>
                  <Text style={styles.detailValue}>{booking.time}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>💰</Text>
                  <Text style={styles.detailValue}>{booking.price}</Text>
                </View>
              </View>

              {activeTab === 'upcoming' && booking.status === 'Confirmed' && (
                <View style={styles.bookingActions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Reschedule</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.actionButton, styles.cancelButton]}>
                    <Text style={[styles.actionButtonText, styles.cancelButtonText]}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
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
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#ffffff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  tabTextActive: {
    color: '#007AFF',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  newBookingButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  newBookingButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  bookingCard: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  bookingService: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  bookingDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailLabel: {
    fontSize: 14,
  },
  detailValue: {
    fontSize: 14,
    color: '#666666',
  },
  bookingActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  cancelButtonText: {
    color: '#ffffff',
  },
});

export default BookingsListScreen;
