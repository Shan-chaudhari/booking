import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';

const HomeScreen = ({ navigation }: any) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleNewBooking = () => {
    navigation.navigate('NewBooking');
  };

  const handleMyBookings = () => {
    navigation.navigate('BookingsList');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  // Mock data for demo
  const upcomingBookings = [
    { id: 1, service: 'Haircut', date: 'May 15, 2026', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, service: 'Massage', date: 'May 18, 2026', time: '2:00 PM', status: 'Pending' },
  ];

  const recentActivity = [
    { id: 1, action: 'Booking confirmed', service: 'Haircut', time: '2 hours ago' },
    { id: 2, action: 'Profile updated', service: '', time: '1 day ago' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Hello, {user?.name || 'User'}!</Text>
              <Text style={styles.subtitle}>Welcome back to Ihjaz</Text>
            </View>
            <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{user?.name?.charAt(0) || 'U'}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image 
            source={require('../../assets/ihjaz_logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionCard} onPress={handleNewBooking}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>+</Text>
            </View>
            <Text style={styles.actionTitle}>New Booking</Text>
            <Text style={styles.actionSubtitle}>Create a new booking</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={handleMyBookings}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>📅</Text>
            </View>
            <Text style={styles.actionTitle}>My Bookings</Text>
            <Text style={styles.actionSubtitle}>View your bookings</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Bookings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Bookings</Text>
            <TouchableOpacity onPress={handleMyBookings}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {upcomingBookings.map((booking) => (
            <View key={booking.id} style={styles.bookingCard}>
              <View style={styles.bookingInfo}>
                <Text style={styles.bookingService}>{booking.service}</Text>
                <Text style={styles.bookingDateTime}>{booking.date} at {booking.time}</Text>
              </View>
              <View style={[styles.statusBadge, booking.status === 'Confirmed' ? styles.statusConfirmed : styles.statusPending]}>
                <Text style={styles.statusText}>{booking.status}</Text>
              </View>
            </View>
          ))}
          
          {upcomingBookings.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No upcoming bookings</Text>
              <TouchableOpacity style={styles.emptyButton} onPress={handleNewBooking}>
                <Text style={styles.emptyButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          
          {recentActivity.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityDot} />
              <View style={styles.activityContent}>
                <Text style={styles.activityAction}>{activity.action}</Text>
                {activity.service && <Text style={styles.activityService}>{activity.service}</Text>}
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionIconText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
  },
  seeAll: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  bookingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingService: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  bookingDateTime: {
    fontSize: 14,
    color: '#666666',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusConfirmed: {
    backgroundColor: '#34C759',
  },
  statusPending: {
    backgroundColor: '#FF9500',
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 16,
  },
  emptyButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  emptyButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginTop: 6,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityAction: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 2,
  },
  activityService: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: '#999999',
  },
  logoutButton: {
    margin: 20,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;