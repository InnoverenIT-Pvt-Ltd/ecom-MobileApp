import React from 'react';
import { View, Text } from 'react-native';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import Logo from '../Components/UI/Elements/Logo';
import RightHeader from '../Components/UI/Elements/RightHeader';

function MainHeader(props) {
    return (
        <View
            style={{
                justifyContent: 'space-between',
                border: '5px solid green',
                backgroundColor: 'white',
                height: '8%',
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '1%',
                }}>
                <View style={{ marginLeft: '2%', marginTop: '1%' }}>
                    <Logo {...props} />
                </View>
                <RightHeader {...props} />
            </View>
        </View>
    );
}

// const mapStateToProps = ({auth}) => ({
//     // user: auth.userDetails,
// });

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(MainHeader);
export default MainHeader;