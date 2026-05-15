import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';

const ServiceSelectionScreen = ({ navigation, route }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    { id: 1, name: 'Haircut', description: 'Professional haircut and styling', duration: '30 min', price: '$25' },
    { id: 2, name: 'Massage', description: 'Full body relaxation massage', duration: '60 min', price: '$60' },
    { id: 3, name: 'Facial', description: 'Deep cleansing facial treatment', duration: '45 min', price: '$45' },
    { id: 4, name: 'Manicure', description: 'Nail care and polish', duration: '30 min', price: '$20' },
    { id: 5, name: 'Pedicure', description: 'Foot care and massage', duration: '45 min', price: '$35' },
    { id: 6, name: 'Hair Coloring', description: 'Professional hair coloring', duration: '90 min', price: '$80' },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceSelect = (service: any) => {
    setSelectedService(service.id.toString());
  };

  const handleContinue = () => {
    if (selectedService) {
      const service = services.find(s => s.id.toString() === selectedService);
      navigation.navigate('DateTimeSelection', { service });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select Service</Text>
        <View style={{ width: 50 }} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search services..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999999"
          />
        </View>

        {/* Services List */}
        <View style={styles.servicesContainer}>
          {filteredServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[
                styles.serviceCard,
                selectedService === service.id.toString() && styles.serviceCardSelected,
              ]}
              onPress={() => handleServiceSelect(service)}
            >
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
                <View style={styles.serviceDetails}>
                  <Text style={styles.serviceDetail}>⏱ {service.duration}</Text>
                  <Text style={styles.serviceDetail}>💰 {service.price}</Text>
                </View>
              </View>
              <View style={[
                styles.radioButton,
                selectedService === service.id.toString() && styles.radioButtonSelected
              ]}>
                {selectedService === service.id.toString() && <Text style={styles.radioButtonText}>✓</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !selectedService && styles.continueButtonDisabled]}
        onPress={handleContinue}
        disabled={!selectedService}
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
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333333',
  },
  servicesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  serviceCardSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#E8F4FF',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  serviceDetails: {
    flexDirection: 'row',
    gap: 16,
  },
  serviceDetail: {
    fontSize: 12,
    color: '#666666',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  radioButtonSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  radioButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
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

export default ServiceSelectionScreen;
