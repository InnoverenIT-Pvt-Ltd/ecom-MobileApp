import React, { useEffect } from 'react';
import {
    View,
    Text,
    // Picker,
    Button,
    StyleSheet,
    Dimensions,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as Yup from "yup";
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInput } from 'react-native-paper';
import { Container } from '../../../Components/UI/Layouts';
import { ScrollView } from 'react-native-gesture-handler';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import MainHeaderBackbutton from '../../../../Navigation/MainHeaderBackButton';
// import { getCountries } from '../../../Auth/AuthAction';
// import { getSources } from '../../../Settings/Source/SourceAction';
// import { addCustomer } from '../../CustomerAction';

// const CustomerSchema = Yup.object().shape({
//     firstName: Yup.string().required("Input needed!"),
// });

function Profile(props) {

    // debugger;
    // console.log(props.userId);

    // useEffect(() => {
    //     props.getCountries();
    //     props.getSources();
    // }, []);

    // const navigation = props;

    // const onhandleClick = () => {
    //     props.navigation.navigate('Customer');
    // };

    // function handleReset(resetForm) {
    //     resetForm();
    //     alert('New Customer created');
    //     navigate('Customer');
    // }

    // const GOOGLE_PLACES_API_KEY = 'AIzaSyAQdQZU6zRL9w32DH2_9al-kkXnK38fnJY&libraries=places';

    return (
        <>
            {/* <MainHeaderBackbutton
                onhandleBackClick={onhandleClick}
                headerText={'Add'}
                navigation={navigation.props}
            /> */}
            <Container>
                <Formik
                    initialValues={{
                        salutation: "",
                        firstName: "",
                        lastName: "",
                        leadSource: "",
                        title: "",
                        dialCode: "",
                        countryDialCode: "",
                        mobileNo: "",
                        emailId: "",
                        gender: "",
                        maritalStatus: "",
                        customerType: "",
                        userId: props.userId,
                        address: [
                            {
                                addressType: '',
                                address1: '',
                                address2: '',
                                town: '',
                                street: '',
                                city: '',
                                state: '',
                                postalCode: '',
                                country: '',
                                latitude: '',
                                longitude: '',
                            },
                        ],
                    }}
                    // validationSchema={CustomerSchema}
                    // onSubmit={(values, { resetForm }) => {
                    //     console.log(values);
                    //     props.addCustomer(
                    //         {
                    //             ...values,
                    //             userId: props.userId,
                    //         },
                    //         props.userId,
                    //         () => handleReset(resetForm),
                    //     );
                    // }}
                >
                    {({ handleChange, handleBlur, handleSubmit, setFieldValue, errors, values }) => (
                        <View style={styles.form}>
                            <StatusBar backgroundColor="#0093d7" />
                            <ScrollView>
                                <View style={styles.flexrow}>
                                    <View
                                        style={{
                                            height: Dimensions.get('window').height * 0.06,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            margin: '1%',
                                            marginTop: 10,
                                            marginLeft: 5,
                                            background: '#f5f6f5',
                                            borderRadius: 10,
                                        }}>
                                        <Picker
                                            style={{
                                                height: Dimensions.get('window').height * 0.06,
                                                width: Dimensions.get('window').width * 0.28,
                                            }}
                                            mode="dropdown"
                                            name="salutation"
                                            selectedValue={values.salutation}
                                            onValueChange={itemValue =>
                                                setFieldValue('salutation', itemValue)
                                            }
                                            onBlur={handleBlur('salutation')}
                                        >
                                            <Picker.Item label="Select" value="" />
                                            <Picker.Item label="Mr" value="Mr" />
                                            <Picker.Item label="Ms" value="Ms" />
                                            <Picker.Item label="None" value="None" />
                                        </Picker>
                                    </View>
                                    <View>
                                        <TextInput
                                            label="First Name"
                                            name="firstName"
                                            value={values.firstName}
                                            onChangeText={handleChange('firstName')}
                                            onBlur={handleBlur('firstName')}
                                            mode='outlined'
                                            style={styles.firstname}
                                            theme={{
                                                colors: {
                                                    placeholder: 'black',
                                                    background: '#f5f6f5',
                                                    // text: 'grey',
                                                    primary: '#5d5d5d',
                                                },
                                            }}
                                        />
                                        {errors.firstName && (
                                            <Text
                                                style={{
                                                    fontSize: 10,
                                                    color: 'red',
                                                    marginLeft: '6%',
                                                    marginTop: '-1%',
                                                }}>
                                                {errors.firstName}
                                            </Text>
                                        )}
                                    </View>
                                </View>

                                <View style={styles.flexrow}>
                                    <View>
                                        <TextInput
                                            label="Last Name"
                                            name="lastName"
                                            value={values.lastName}
                                            onChangeText={handleChange('lastName')}
                                            onBlur={handleBlur('lastName')}
                                            mode='outlined'
                                            theme={{
                                                colors: {
                                                    placeholder: 'black',
                                                    background: '#f5f6f5',
                                                    primary: '#5d5d5d',
                                                },
                                            }}
                                            style={styles.lastname}
                                        />
                                    </View>
                                   
                                </View>

                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop: '5%',
                                    }}>
                                    <View
                                        style={{
                                            height: Dimensions.get('window').height * 0.06,
                                            width: Dimensions.get('window').width * 0.29,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            marginTop: '0%',
                                            marginLeft: 6,
                                            borderRadius: 10,
                                        }}>
                                        {/* <Picker
                                            style={{
                                                flex: 0,
                                                height: Dimensions.get('window').height * 0.06,
                                                width: Dimensions.get('window').width * 0.29,
                                            }}
                                            mode="dropdown"
                                            name="dialCode"
                                            selectedValue={values.dialCode}
                                            onValueChange={(itemValue, itemIndex) => {
                                                console.log(itemValue);
                                                setFieldValue('dialCode', itemValue);
                                            }}>
                                            <Picker.Item label="Select" value="" />
                                            {props.countries.map((item, key) => (
                                                <Picker.Item
                                                    style={{
                                                        height: Dimensions.get('window').height * 0.06,
                                                    }}
                                                    label={`${item.countryDialCode || ''}`}
                                                    value={`${item.countryDialCode || ''}`}
                                                    key={key}
                                                />
                                            ))}
                                        </Picker> */}
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                        <TextInput
                                            style={{
                                                height: Dimensions.get('window').height * 0.06,
                                                width: Dimensions.get('window').width * 0.62,
                                                borderColor: 'gray',
                                                marginLeft: '6%',
                                                marginBottom: '3%',
                                                marginTop: '-3%',
                                            }}
                                            theme={{
                                                colors: {
                                                    placeholder: 'black',
                                                    background: '#f5f6f5',
                                                    primary: '#5d5d5d',
                                                },
                                            }}
                                            mode="outlined"
                                            name="mobileNo"
                                            label="Mobile No"
                                            value={values.mobileNo}
                                            keyboardType={'numeric'}
                                            onChangeText={handleChange('mobileNo')}
                                            onBlur={handleBlur('mobileNo')}
                                        />
                                        {errors.mobileNo && (
                                            <Text style={{ fontSize: 12, color: 'red', marginLeft: 5 }}>
                                                {errors.mobileNo}
                                            </Text>
                                        )}
                                    </View>
                                </View>

                                <View style={styles.flexrow}>
                                    <TextInput
                                        label="Email"
                                        name="emailId"
                                        value={values.emailId}
                                        onChangeText={handleChange('emailId')}
                                        onBlur={handleBlur('emailId')}
                                        mode='outlined'
                                        theme={{
                                            colors: {
                                                placeholder: 'black',
                                                background: '#f5f6f5',
                                                // text: 'grey',
                                                primary: '#5d5d5d',
                                            },
                                        }}
                                        style={styles.input}
                                    />
                                </View>

                                <View
                                        style={{
                                            height: Dimensions.get('window').height * 0.06,
                                            width: Dimensions.get('window').width * 0.93,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            margin: '1%',
                                            marginTop: 16,
                                            marginLeft: 10,
                                            background: '#f5f6f5',
                                            borderRadius: 10,
                                        }}>
                                        <Picker
                                            style={{
                                                height: Dimensions.get('window').height * 0.06,
                                                width: Dimensions.get('window').width * 0.95,
                                            }}
                                            mode="dropdown"
                                            name="leadSource"
                                            selectedValue={values.leadSource}
                                            onValueChange={itemValue => {
                                                console.log(itemValue);
                                                setFieldValue('leadSource', itemValue);
                                            }}
                                        >
                                            <Picker.Item label="Source" value="" />
                                            <Picker.Item label="LinkedIn" value="LinkedIn" />
                                            <Picker.Item label="WhatsApp" value="WhatsApp" />
                                            <Picker.Item label="Google" value="Google" />
                                        </Picker>
                                    </View>

                                <View style={styles.flexrow}>
                                    <View
                                        style={{
                                            height: Dimensions.get('window').height * 0.06,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            marginTop: 14,
                                            marginLeft: 6,
                                            background: '#f5f6f5',
                                            borderRadius: 10,
                                        }}>
                                        <Picker
                                            style={{
                                                height: Dimensions.get('window').height * 0.06,
                                                width: Dimensions.get('window').width * 0.45,
                                            }}
                                            mode="dropdown"
                                            name="gender"
                                            selectedValue={values.gender}
                                            onValueChange={itemValue =>
                                                setFieldValue('gender', itemValue)
                                            }
                                            onBlur={handleBlur('gender')}
                                        >
                                            <Picker.Item label="Gender" value="" />
                                            <Picker.Item label="Male" value="Male" />
                                            <Picker.Item label="Female" value="Female" />
                                            <Picker.Item label="Transgender" value="Transgender" />
                                        </Picker>
                                    </View>
                                    <View
                                        style={{
                                            height: Dimensions.get('window').height * 0.06,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            margin: '1%',
                                            marginTop: 14,
                                            marginLeft: 15,
                                            background: '#f5f6f5',
                                            borderRadius: 10,
                                        }}>
                                        <Picker
                                            style={{
                                                height: Dimensions.get('window').height * 0.06,
                                                width: Dimensions.get('window').width * 0.45,
                                            }}
                                            mode="dropdown"
                                            name="maritalStatus"
                                            selectedValue={values.maritalStatus}
                                            onValueChange={itemValue =>
                                                setFieldValue('maritalStatus', itemValue)
                                            }
                                            onBlur={handleBlur('maritalStatus')}
                                        >
                                            <Picker.Item label="MaritalStatus" value="" />
                                            <Picker.Item label="Single" value="Single" />
                                            <Picker.Item label="Married" value="Married" />
                                            <Picker.Item label="Divorced" value="Divorced" />
                                            <Picker.Item label="Widowed" value="Widowed" />
                                        </Picker>
                                    </View>
                                </View>

                                {/* <View>
                                    <View style={{ marginTop: '4%', marginLeft: '2%' }}>
                                        <Text style={{ fontSize: 16 }}>Address</Text>
                                    </View>

                                    <View style={styles.places}>
                                        <GooglePlacesAutocomplete
                                            placeholder='Search'
                                            onPress={(data, details = null) => {
                                                console.log(data, details);
                                            }}
                                            query={{
                                                key: GOOGLE_PLACES_API_KEY,
                                                language: 'en',
                                            }}
                                        />
                                    </View>
                                </View> */}

                                <View style={styles.buttonContainer}>
                                    <Button
                                        title={'Create'}
                                        color="#2e8dd1"
                                        // onPress={handleSubmit}
                                        buttonStyle={{ width: '100%' }}
                                        // loading={props.addingCustomer ? <ActivityIndicator /> : null}
                                    >
                                    </Button>
                                </View>

                            </ScrollView>
                        </View>
                    )}
                </Formik>
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'white', // Set your own custom Color
        flexDirection: 'column',
        margin: 'auto',
        width: Dimensions.get('window').width,
    },
    flexrow: {
        display: 'flex',
        flexDirection: 'row',
    },
    firstname: {
        flex: 1,
        borderColor: 'gray',
        borderBottomColor: 'red',
        width: Dimensions.get('window').width * 0.62,
        height: Dimensions.get('window').height * 0.06,
        marginTop: 3,
        marginLeft: '5%',
        marginBottom: '1%',
    },
    lastname: {
        flex: 1,
        borderColor: 'gray',
        borderBottomColor: 'red',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.06,
        marginBottom: '1%',
        marginLeft: '1.5%',
        marginTop: '4%',
    },
    input: {
        height: Dimensions.get('window').height * 0.06,
        width: Dimensions.get('window').width * 0.94,
        borderColor: 'gray',
        marginLeft: '2%',
        marginBottom: '1%',
        marginTop: '3%',
    },
    buttonContainer: {
        width: '95%',
        marginTop: 15,
        fontSize: 15,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 14,
    },
    places: {
        marginTop: 7,
        marginBottom: 7,
    },
});

const mapStateToProps = ({ auth, source, customer }) => ({
    // fetchingCountries: auth.fetchingCountries,
    // countries: auth.countries,
    // fetchingSources: source.fetchingSources,
    // sources: source.sources,
    // userId: auth.userDetails.userId,
    // addingCustomer: customer.addingCustomer,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // getCountries,
            // getSources,
            // addCustomer,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);