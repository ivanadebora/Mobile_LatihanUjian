import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { postingUpdate } from '../actions'
import { CardSection, Input } from './common';

class PostingForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Image Link"
                        placeholder="Put Your Image Link"
                        value={this.props.link}
                        onChangeText={text => this.props.postingUpdate('link', text)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Caption"
                        placeholder="Write a caption"
                        value={this.props.caption}
                        onChangeText={ text => this.props.postingUpdate('caption', text)}
                    />
                </CardSection>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const { link, caption } = state.postForm;
    return { link, caption };
}

export default connect(mapStateToProps, { postingUpdate })(PostingForm);