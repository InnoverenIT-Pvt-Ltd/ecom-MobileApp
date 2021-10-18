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
import { Picker } from '@react-native-picker/picker';
import * as Yup from "yup";
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInput } from 'react-native-paper';
import { Container } from '../../../Components/UI/Layouts';
import { ScrollView } from 'react-native-gesture-handler';

// const CustomerSchema = Yup.object().shape({
//     firstName: Yup.string().required("Input needed!"),
// });

function Addresses(props) {
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
                        address1: '',
                        street: '',
                        city: '',
                        state: '',
                        pinCode: '',
                        country: '',
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
                                    <TextInput
                                        label="Address1"
                                        name="address1"
                                        value={values.address1}
                                        onChangeText={handleChange('address1')}
                                        onBlur={handleBlur('address1')}
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


                                <View style={styles.flexrow}>
                                    <TextInput
                                        label="Street"
                                        name="street"
                                        value={values.street}
                                        onChangeText={handleChange('street')}
                                        onBlur={handleBlur('street')}
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
                                <View style={styles.flexrow}>
                                    <TextInput
                                        label="City"
                                        name="city"
                                        value={values.city}
                                        onChangeText={handleChange('city')}
                                        onBlur={handleBlur('city')}
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

                                <View style={styles.flexrow}>
                                    <View
                                        style={{
                                            marginTop: 5,
                                            marginLeft: 8,
                                        }}
                                    >
                                        <TextInput
                                            style={{
                                                height: Dimensions.get('window').height * 0.06,
                                                width: Dimensions.get('window').width * 0.45,
                                            }}
                                            label="State"
                                            name="state"
                                            value={values.state}
                                            onChangeText={handleChange('state')}
                                            onBlur={handleBlur('state')}
                                            mode='outlined'
                                            // style={styles.firstname}
                                            theme={{
                                                colors: {
                                                    placeholder: 'black',
                                                    background: '#f5f6f5',
                                                    // text: 'grey',
                                                    primary: '#5d5d5d',
                                                },
                                            }}
                                        />

                                    </View>
                                    <View>
                                        <TextInput
                                            label="Pin Code"
                                            name="pinCode"
                                            value={values.pinCode}
                                            onChangeText={handleChange('pinCode')}
                                            onBlur={handleBlur('pinCode')}
                                            mode='outlined'
                                            style={styles.pinCode}
                                            theme={{
                                                colors: {
                                                    placeholder: 'black',
                                                    background: '#f5f6f5',
                                                    // text: 'grey',
                                                    primary: '#5d5d5d',
                                                },
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.flexrow}>
                                    <TextInput
                                        label="Country"
                                        name="country"
                                        value={values.country}
                                        onChangeText={handleChange('country')}
                                        onBlur={handleBlur('country')}
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

                                <View style={styles.buttonContainer}>
                                    <Button
                                        title={'Submit'}
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
    pinCode: {
        flex: 1,
        borderColor: 'gray',
        borderBottomColor: 'red',
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').height * 0.06,
        marginTop: 5,
        marginLeft: '8%',
        marginBottom: '1%',
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

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);